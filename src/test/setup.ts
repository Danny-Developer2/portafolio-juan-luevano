import { cleanup } from '@testing-library/svelte';
import { afterEach } from 'vitest';

// jsdom no implementa matchMedia; lo necesario para los componentes con animaciones.
if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false
    })
  });
}

afterEach(() => {
  cleanup();
});
