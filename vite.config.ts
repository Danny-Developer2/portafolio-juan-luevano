import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  // Inyecta la URL pública en build time (equivalente a PUBLIC_SITE_URL).
  define: {
    __PUBLIC_SITE_URL__: JSON.stringify(process.env.PUBLIC_SITE_URL ?? 'http://localhost:5169')
  },
  server: {
    port: 5169,
    strictPort: true
  },
  preview: {
    port: 5169,
    strictPort: true
  }
});
