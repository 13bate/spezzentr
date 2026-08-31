import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import type { IncomingMessage, ServerResponse } from 'http';

export default defineConfig({
  base: '/spezzentr/',
  server: {
    open: true
  },

  plugins: [
    react(),
    // Простой API для админки
    {
      name: 'admin-api',
      configureServer(server) {
        server.middlewares.use('/api/admin/schedules/:id', (req: IncomingMessage, res: ServerResponse, next) => {
          // Parse the URL to get the id
          const url = new URL(req.url || '', `http://${req.headers.host}`);
          const pathParts = url.pathname.split('/');
          const id = pathParts[pathParts.length - 1]; // Get the last part

          const filePath = path.resolve(`public/content/schedules/${id}.json`);

          if (req.method === 'GET') {
            try {
              const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            } catch {
              res.statusCode = 404;
              res.end('Not found');
            }
            return;
          }

          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
              try {
                const data = JSON.parse(body);
                // Ensure directory exists
                const dir = path.dirname(filePath);
                if (!fs.existsSync(dir)) {
                  fs.mkdirSync(dir, { recursive: true });
                }
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true }));
              } catch {
                res.statusCode = 500;
                res.end('Save error');
              }
            });
            return;
          }

          // If method not handled, pass to next middleware
          next();
        });
      },
    },
  ],
});
