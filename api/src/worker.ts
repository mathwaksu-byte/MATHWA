import { createClient } from '@supabase/supabase-js'

function cors(origin: string, allowed: string[]) {
  const allow = allowed.includes(origin) ? origin : '*'
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  }
}

async function json(data: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...headers } })
}

export default {
  async fetch(request: Request, env: Record<string, string>, ctx: ExecutionContext) {
    const url = new URL(request.url)
    const origin = request.headers.get('Origin') || ''
    const corsHeaders = cors(origin, [env.CLIENT_URL || '', env.ADMIN_URL || ''])

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders })
    }

    const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY)
    const supabaseAdmin = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_KEY)

    if (url.pathname === '/api/health' && request.method === 'GET') {
      return json({ status: 'ok', timestamp: new Date().toISOString() }, 200, corsHeaders)
    }

    if (url.pathname === '/api/settings/public' && request.method === 'GET') {
      const { data, error } = await supabase.from('SiteSetting').select('*').eq('key', 'default').single()
      if (error) return json({ error: error.message }, 500, corsHeaders)
      return json({ settings: data || {} }, 200, corsHeaders)
    }

    if (url.pathname === '/api/universities' && request.method === 'GET') {
      const { data, error } = await supabase.from('University').select('*').eq('active', true).order('created_at', { ascending: false })
      if (error) return json({ error: error.message }, 500, corsHeaders)
      return json({ universities: data || [] }, 200, corsHeaders)
    }

    if (url.pathname.startsWith('/api/universities/') && request.method === 'GET') {
      const slug = url.pathname.split('/').pop() || ''
      const { data: uni, error } = await supabase.from('University').select('*').eq('slug', slug).single()
      if (error || !uni || !uni.active) return json({ error: 'University not found' }, 404, corsHeaders)
      const { data: feeRows } = await supabase.from('Fee').select('*').eq('university_id', uni.id).order('year', { ascending: true })
      const fees = (feeRows || []).map((r: any) => ({ year: r.year, tuition: Number(r.tuition), hostel: Number(r.hostel), misc: Number(r.misc), currency: r.currency }))
      return json({ university: uni, fees }, 200, corsHeaders)
    }

    if (url.pathname === '/api/applications' && request.method === 'POST') {
      let payload: any = {}
      try { payload = await request.json() } catch {}
      const insert = {
        name: payload.full_name || payload.name,
        email: payload.email || null,
        phone: payload.phone,
        city: payload.city || null,
        neet_qualified: payload.neet_qualified === true || payload.neet_qualified === 'true' || payload.neet_qualified === 'on' ? true : false,
        marksheet_url: payload.marksheet_url || null,
        preferred_university_slug: payload.preferred_university_slug || null,
        preferred_year: typeof payload.preferred_year === 'number' ? payload.preferred_year : (payload.preferred_year ? parseInt(String(payload.preferred_year), 10) : null),
        status: 'pending'
      }
      const { data, error } = await supabaseAdmin.from('Lead').insert([insert]).select().single()
      if (error) return json({ error: error.message }, 400, corsHeaders)
      return json({ application: data, message: 'Application submitted successfully' }, 201, corsHeaders)
    }

    if (url.pathname === '/api/uploads/single' && request.method === 'POST') {
      const form = await request.formData()
      const file = form.get('file') as File | null
      if (!file) return json({ error: 'No file uploaded' }, 400, corsHeaders)
      const bucket = String(form.get('bucket') || 'uploads')
      const folder = String(form.get('folder') || '')
      const name = file.name || 'file'
      const ext = name.includes('.') ? name.split('.').pop() : 'bin'
      const fileName = `${folder ? folder + '/' : ''}${crypto.randomUUID()}.${ext}`
      const buf = await file.arrayBuffer()
      const { data, error } = await supabaseAdmin.storage.from(bucket).upload(fileName, new Uint8Array(buf), { contentType: file.type, upsert: false })
      if (error) return json({ error: error.message }, 500, corsHeaders)
      const { data: pub } = supabase.storage.from(bucket).getPublicUrl(fileName)
      return json({ file: { path: data.path, url: pub.publicUrl, size: file.size, mimetype: file.type } }, 200, corsHeaders)
    }

    return json({ error: 'Route not found' }, 404, corsHeaders)
  }
}

