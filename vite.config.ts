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
        try {
          const chunks: Buffer[] = [];
          for await (const chunk of req) chunks.push(chunk as Buffer);

          const module = await server.ssrLoadModule('/api/_openrouter.ts');
          const response: Response = await module.handleGenerate(
            new Request('http://localhost/api/generate', {
              method: req.method ?? 'POST',
              headers: {'Content-Type': 'application/json'},
              body: chunks.length ? Buffer.concat(chunks) : undefined,
            }),
          );

          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));

          if (!response.body) {
            res.end();
            return;
          }

          const reader = response.body.getReader();
          for (;;) {
            const {done, value} = await reader.read();
            if (done) break;
            res.write(Buffer.from(value));
          }
          res.end();
        } catch (err: any) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({error: err?.message ?? 'Dev API handler failed.'}));
        }
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
