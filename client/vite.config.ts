import { defineConfig } from 'vite';
import { vitePlugin as remix } from '@remix-run/dev';

export default defineConfig({
  plugins: [
    remix(),
  ],
  resolve: {
    conditions: ['worker', 'browser'],
    alias: {
      'react-dom/server': 'react-dom/server.browser'
    }
  },
  optimizeDeps: {
    include: ['react-dom/server.browser']
  },
  ssr: {
    noExternal: ['react-dom']
  },
  server: {
    port: 5173,
    strictPort: false,
  }
});
