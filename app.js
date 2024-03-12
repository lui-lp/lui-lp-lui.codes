import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { logger } from './middlewares/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(logger);

app.use('/assets', express.static(join(dirname(__filename), 'public')));

app.get('/', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'index.html'));
});

app.get('/index', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'index.html'));
});


app.get('/about', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'contact.html'));
});

app.get('/projects', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'projects.html'));
});

app.get('/projects/:slug', (request, response) => {
  const slug = request.params.slug;

  if (slug) {
    response.send(`${slug}, maybe will be a project one day :) .`);
  } else {
    response.send(`Invalid slug provided.`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`👋 Started server on port ${PORT}`);
});