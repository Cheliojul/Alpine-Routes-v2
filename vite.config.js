import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { routes } from './src/data/routes.js';

const fromRoot = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  // Repo is served from https://cheliojul.github.io/Alpine-Routes-v2/
  base: '/Alpine-Routes-v2/',
  plugins: [
    handlebars({
      partialDirectory: fromRoot('./src/partials'),
      context: { routes },
    }),
  ],
});
