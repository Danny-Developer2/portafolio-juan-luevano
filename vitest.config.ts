import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // `conditions: ['browser']` evita que `svelte` se resuelva a su entrada de
  // servidor dentro de Vitest; es lo que permite montar componentes en jsdom.
  plugins: [svelte({ hot: false })],
  resolve: {
    alias: {
      $lib: fileURLToPath(new URL('./src/lib', import.meta.url))
    },
    // Evita que `svelte` se resuelva a su entrada de servidor (index-server.js)
    conditions: ['browser']
  },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.{test,spec}.{js,ts}'],
    exclude: ['**/node_modules/**', '**/e2e/**'],
    reporters: 'default'
  }
});
