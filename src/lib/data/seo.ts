/**
 * Configuración SEO.
 * La URL del sitio se inyecta en build time desde la variable PUBLIC_SITE_URL
 * (ver `define` en vite.config.ts). En local usa http://localhost:5169.
 */
declare const __PUBLIC_SITE_URL__: string;

export const SITE_URL: string = __PUBLIC_SITE_URL__;

export const SITE_NAME = 'Juan Daniel Luevano Ruiz';

export const SEO = {
  title: 'Juan Daniel Luevano Ruiz — Desarrollador Full Stack & Ciberseguridad',
  description:
    'Portafolio de Juan Daniel Luevano Ruiz, desarrollador full stack y analista de ciberseguridad en Monterrey, N.L. Angular, .NET, Python y React.',
  locale: 'es_MX',
  ogImage: '/og-image.jpg'
};
