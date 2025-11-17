import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages'
import * as build from './server/index.js'

export const compatibility_date = '2024-11-16'
export const compatibility_flags = ['nodejs_compat']

export default {
  async fetch(request, env, ctx) {
    return createPagesFunctionHandler({
      build,
      getLoadContext: (context) => ({ env: context.env })
    })(request, env, ctx)
  }
}
