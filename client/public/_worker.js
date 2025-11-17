import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages'
import * as build from './server/index.js'

export const onRequest = async (context) => {
  try {
    const handler = createPagesFunctionHandler({
      build,
      getLoadContext: (ctx) => ({ env: ctx.env })
    })
    return await handler(context)
  } catch (e) {
    const message = e && typeof e === 'object' && 'message' in e ? String(e.message) : String(e)
    const stack = e && typeof e === 'object' && 'stack' in e ? String(e.stack) : ''
    return new Response(`Internal Error: ${message}\n${stack}`, { status: 500, headers: { 'Content-Type': 'text/plain' } })
  }
}
