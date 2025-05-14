import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

async function createServer() {
  const app = express();
  
  let vite;
  if (!isProduction) {
    // In development, use Vite's dev server
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from the dist directory
    app.use(express.static(join(__dirname, 'dist')));
  }

  // Handle all routes by serving the index.html
  app.get('*', (req, res, next) => {
    const url = req.originalUrl;
    
    // Skip API routes and static files
    if (url.startsWith('/api/') || url.includes('.')) {
      return next();
    }

    if (isProduction) {
      // In production, send the index.html file
      res.sendFile(join(__dirname, 'dist', 'index.html'));
    } else {
      // In development, let Vite handle the request
      res.sendFile(join(__dirname, 'index.html'));
    }
  });

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

createServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
});
