import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();

  if (isProduction) {
    // Serve static files from the dist directory in production
    app.use(express.static(join(__dirname, 'dist')));
  } else {
    // In development, use Vite's dev server
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(vite.middlewares);
  }

  // Handle all routes
  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      
      if (isProduction) {
        // In production, serve the index.html file
        res.sendFile(join(__dirname, 'dist', 'index.html'));
      } else {
        // In development, let Vite handle the request
        const html = await vite.transformIndexHtml(url, '');
        res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
      }
    } catch (e) {
      // If an error occurs, let Vite fix the stack trace
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

createServer(); 