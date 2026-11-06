# Portafolio Profesional — Juan Daniel Luevano Ruiz

Portafolio web personal de **Juan Daniel Luevano Ruiz**, Desarrollador Full Stack & Analista de
Ciberseguridad (Monterrey, N.L., México).

Sitio en producción: **https://juan-luevano-portafolio.netlify.app**

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Stack](#stack)
- [Secciones del sitio](#secciones-del-sitio)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Puesta en marcha](#puesta-en-marcha)
- [Scripts disponibles](#scripts-disponibles)
- [Variables de entorno](#variables-de-entorno)
- [Testing](#testing)
- [Despliegue en Netlify](#despliegue-en-netlify)
- [SEO y accesibilidad](#seo-y-accesibilidad)
- [Seguridad](#seguridad)
- [Créditos y licencias](#créditos-y-licencias)
- [Nota sobre datos personales](#nota-sobre-datos-personales)

---

## Descripción

Portafolio de una sola página (SPA) construido con SvelteKit, con identidad visual propia
(estética "terminal / ciberseguridad": tema oscuro, acento verde menta, tipografía Space Grotesk /
Inter / JetBrains Mono).

El contenido se generó **exclusivamente** a partir de fuentes verificables: el CV del autor y sus
repositorios públicos de GitHub. No contiene datos inventados, experiencia fabricada ni métricas
falsas.

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | SvelteKit 2.x + Svelte 5 |
| Lenguaje | TypeScript (estricto) |
| Estilos | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Iconos | Lucide (`@lucide/svelte`) + SVG propios para marcas |
| Animaciones | CSS + Canvas + `IntersectionObserver` (sin dependencias de animación) |
| Fuentes | Fontsource (Space Grotesk, Inter, JetBrains Mono) — autocargadas, sin CDNs de terceros |
| Tests unitarios | Vitest + Testing Library |
| Tests end-to-end | Playwright |
| Build | Vite 6 |
| Despliegue | Netlify (`@sveltejs/adapter-static`) |

## Secciones del sitio

1. **Hero** — nombre, titulación, propuesta de valor, CTAs, enlaces sociales, estadísticas y una
   ventana de código animada.
2. **Sobre mí** — perfil, pilares de trabajo, idiomas y qué puede aportar.
3. **Proyectos** — 7 proyectos reales de GitHub con problema que resuelve, funcionalidades,
   tecnologías y enlace al repositorio.
4. **Stack tecnológico** — agrupado por categorías (sin barras de nivel subjetivas).
5. **Experiencia y formación** — timeline verificable + certificaciones e idiomas.
6. **Cómo trabajo** — 7 etapas del proceso de ingeniería.
7. **Contacto** — canales directos y formulario con validación y estados de envío.
8. **Footer** — navegación secundaria y enlaces.

## Estructura del proyecto

```text
├── netlify.toml              # Build, redirecciones y cabeceras de seguridad
├── playwright.config.ts      # Configuración E2E (escritorio + móvil)
├── svelte.config.js          # Adaptador estático
├── vite.config.ts            # Plugins + inyección de PUBLIC_SITE_URL
├── vitest.config.ts          # Configuración de tests unitarios
├── static/                   # favicon, imagen Open Graph
└── src/
    ├── app.html              # Plantilla HTML + meta CSP
    ├── app.css               # Design system (tokens, componentes, utilidades)
    ├── lib/
    │   ├── data/             # Contenido tipado (perfil, proyectos, stack, experiencia, SEO)
    │   ├── utils/            # Validación del formulario
    │   └── components/
    │       ├── ui/           # Icon, Reveal, SectionHeading
    │       ├── layout/       # Header, Footer
    │       ├── effects/      # MatrixRain (Canvas)
    │       └── sections/     # Hero, About, Projects, Stack, Experience, Process, Contact…
    ├── routes/               # +layout, +page, robots.txt, sitemap.xml
    └── test/                 # Setup de Testing Library
```

## Puesta en marcha

Requisitos: **Node.js >= 20.19** (probado con Node 26) y npm.

```bash
npm install
npm run dev        # http://localhost:5169
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en el puerto 5169 |
| `npm run build` | Build de producción (genera `build/`) |
| `npm run preview` | Previsualiza el build en el puerto 5169 |
| `npm run check` | Diagnóstico de tipos con `svelte-check` |
| `npm run test:run` | Tests unitarios (Vitest) |
| `npm run test:coverage` | Cobertura de tests |
| `npm run test:e2e` | Tests end-to-end (Playwright) |

## Variables de entorno

| Variable | Descripción | Por defecto |
| --- | --- | --- |
| `PUBLIC_SITE_URL` | URL pública del sitio. Se usa para `canonical`, Open Graph y el sitemap | `http://localhost:5169` |

Ejemplo para producción:

```bash
PUBLIC_SITE_URL=https://juan-luevano-portafolio.netlify.app npm run build
```

No se necesitan claves ni secretos: el sitio es 100 % estático.

## Testing

```bash
npm run check        # 0 errores, 0 warnings
npm run test:run     # tests unitarios
npm run test:e2e     # tests end-to-end (Chromium escritorio + emulación móvil)
```

Cobertura incluida: validación del formulario, integridad del contenido, renderizado del
formulario de contacto y smoke tests de navegación en el sitio desplegado.

## Despliegue en Netlify

1. Instalar dependencias y compilar:

   ```bash
   npm install
   PUBLIC_SITE_URL=https://<tu-dominio>.netlify.app npm run build
   ```

2. Configuración ya incluida en `netlify.toml`:
   - Comando de build: `npm run build`
   - Directorio de publicación: `build`
   - Redirección SPA: `/*` → `/200.html` (200)
   - Cabeceras de seguridad: `X-Frame-Options`, `X-Content-Type-Options`,
     `Referrer-Policy`, `Permissions-Policy`
   - Cache agresivo para `/_app/immutable/*`

3. Desplegar (CLI):

   ```bash
   npx netlify deploy --prod --dir=build
   ```

### Formulario de contacto

El formulario usa **Netlify Forms** (no requiere backend ni claves). Para que funcione es
necesario activar una vez la detección de formularios en el panel de Netlify:

1. Ir a **Forms** del sitio (`https://app.netlify.com/projects/<sitio>/forms`).
2. Pulsar **Enable form detection**.
3. Redesplegar el sitio.

Sin ese ajuste, Netlify no registra el formulario y el envío devuelve 404.

## SEO y accesibilidad

- Título, descripción, canonical, Open Graph y Twitter Card.
- Datos estructurados `Person` en JSON-LD.
- `robots.txt` y `sitemap.xml` generados en el build.
- HTML semántico, enlace "saltar al contenido", `aria-label`s, gestión de foco y
  `prefers-reduced-motion` respetado.
- CSP en `<meta>` con `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`.

## Seguridad

- No se incluyen secretos, claves ni tokens en el repositorio.
- El CV original y los datos personales están excluidos vía `.gitignore`.
- Formulario protegido con honeypot y "time-trap" anti-spam.
- Sin dependencias de red en tiempo de ejecución (fuentes y librerías autohospedadas).

## Créditos y licencias

Consulta [CREDITOS.md](./CREDITOS.md). Todas las piezas visuales son originales; las fuentes usan
SIL OFL 1.1 y las librerías sus licencias MIT/ISC/Apache.

## Nota sobre datos personales

Este repositorio **no incluye** el CV original ni documentos con datos privados
(`Datos_Humano/` está ignorado). El número de teléfono no se publica en el sitio.

---

© Juan Daniel Luevano Ruiz. Construido con SvelteKit, Tailwind CSS y Netlify.
