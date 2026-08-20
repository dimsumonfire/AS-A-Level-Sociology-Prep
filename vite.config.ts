import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin, type ViteDevServer} from 'vite';

/**
 * Serves /api/generate during `npm run dev` using the same handler Vercel runs
 * in production, so local development does not require `vercel dev`.
 */
function apiDevPlugin(): Plugin {
  return {
    name: 'openrouter-api-dev',
    configureServer(server: ViteDevServer) {
      server.middlewares.use('/api/generate', async (req, res) => {
        const module = await server.ssrLoadModule('/api/_node.ts');
        await module.nodeHandler(req, res);
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');

  // The dev handler reads these from process.env, matching the Vercel runtime.
  // Assigned only when present: writing `undefined` into process.env would
  // coerce to the string "undefined" and read as a configured value.
  for (const key of ['OPENROUTER_API_KEY', 'OPENROUTER_MODEL', 'APP_URL']) {
    if (env[key]) process.env[key] = env[key];
  }

  return {
    plugins: [react(), tailwindcss(), apiDevPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
