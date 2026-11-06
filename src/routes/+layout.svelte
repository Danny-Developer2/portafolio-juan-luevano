<script lang="ts">
import '../app.css';
import Header from '$lib/components/layout/Header.svelte';
import Footer from '$lib/components/layout/Footer.svelte';
import { SEO, SITE_NAME, SITE_URL } from '$lib/data/seo';

import { profile } from '$lib/data/profile';

let { children } = $props();

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.nombreCompleto,
  jobTitle: profile.titulo,
  description: SEO.description,
  email: profile.email,
  url: SITE_URL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Monterrey',
    addressRegion: 'Nuevo León',
    addressCountry: 'MX'
  },
  sameAs: profile.social
    .filter((s) => s.icon === 'github' || s.icon === 'linkedin')
    .map((s) => s.url),
  knowsAbout: [
    'Desarrollo web',
    'Desarrollo full stack',
    'Ciberseguridad',
    'ASP.NET Core',
    'Angular',
    'React',
    'Python',
    'APIs REST',
    'Secure SDLC'
  ]
};

// Svelte no interpola dentro de <script>, por lo que se inyecta completo.
// Se escapa el cierre para no terminar el bloque de script del componente.
const jsonLdTag =
  '<script type="application/ld+json">' + JSON.stringify(jsonLd) + '<\/script>';
</script>

<svelte:head>
  <title>{SEO.title}</title>
  <meta name="description" content={SEO.description} />
  <meta name="author" content={SITE_NAME} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={SITE_URL} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content={SEO.locale} />
  <meta property="og:title" content={SEO.title} />
  <meta property="og:description" content={SEO.description} />
  <meta property="og:url" content={SITE_URL} />
  <meta property="og:image" content="{SITE_URL}{SEO.ogImage}" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={SEO.title} />
  <meta name="twitter:description" content={SEO.description} />
  <meta name="twitter:image" content="{SITE_URL}{SEO.ogImage}" />

  {@html jsonLdTag}
</svelte:head>

<a
  href="#contenido"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#04241a]"
>
  Saltar al contenido principal
</a>

<Header />
<main id="contenido">
  {@render children()}
</main>
<Footer />
