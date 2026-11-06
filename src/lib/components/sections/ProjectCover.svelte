<script lang="ts">
  import type { ProjectAccent } from '$lib/data/types';

  interface Props {
    titulo: string;
    subtitulo: string;
    accent: ProjectAccent;
    class?: string;
  }

  let { titulo, subtitulo, accent, class: className = '' }: Props = $props();

  const uid = Math.random().toString(36).slice(2, 9);

  const palettes: Record<ProjectAccent, { from: string; to: string; glow: string; text: string }> = {
    mint: { from: '#3ddc97', to: '#1f8f5f', glow: 'rgba(61, 220, 151, 0.45)', text: '#04241a' },
    blue: { from: '#58a6ff', to: '#2b5ea8', glow: 'rgba(88, 166, 255, 0.42)', text: '#04182f' },
    amber: { from: '#f0b429', to: '#b96b00', glow: 'rgba(240, 180, 41, 0.4)', text: '#2a1a00' }
  };

  let p = $derived(palettes[accent] ?? palettes.mint);
</script>

<svg
  viewBox="0 0 400 250"
  preserveAspectRatio="xMidYMid slice"
  class={className}
  role="img"
  aria-label="Portada del proyecto {titulo}"
>
  <defs>
    <linearGradient id="bg-{uid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d1218" />
      <stop offset="1" stop-color="#080b0f" />
    </linearGradient>
    <linearGradient id="bar-{uid}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color={p.from} />
      <stop offset="1" stop-color={p.to} />
    </linearGradient>
    <pattern id="grid-{uid}" width="22" height="22" patternUnits="userSpaceOnUse">
      <path d="M22 0H0V22" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
    </pattern>
    <filter id="blur-{uid}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="46" />
    </filter>
  </defs>

  <rect width="400" height="250" fill="url(#bg-{uid})" />
  <rect width="400" height="250" fill="url(#grid-{uid})" />
  <circle cx="336" cy="42" r="130" fill={p.glow} filter="url(#blur-{uid})" opacity="0.55" />
  <circle cx="30" cy="228" r="110" fill={p.glow} filter="url(#blur-{uid})" opacity="0.3" />

  <!-- Marco de editor -->
  <g opacity="0.9">
    <rect x="26" y="30" width="348" height="190" rx="12" fill="none" stroke="rgba(255,255,255,0.08)" />
    <rect x="26" y="30" width="348" height="26" rx="12" fill="rgba(255,255,255,0.035)" />
    <circle cx="44" cy="43" r="3.4" fill="#ff5f57" opacity="0.7" />
    <circle cx="58" cy="43" r="3.4" fill="#febc2e" opacity="0.7" />
    <circle cx="72" cy="43" r="3.4" fill="#28c840" opacity="0.7" />
    <rect x="90" y="39" width="110" height="9" rx="4.5" fill="rgba(255,255,255,0.07)" />
    <text
      x="356"
      y="45"
      text-anchor="end"
      font-family="JetBrains Mono, monospace"
      font-size="10.5"
      fill={p.from}
    >
      {subtitulo}
    </text>
  </g>

  <!-- Bloque de código estilizado -->
  <g font-family="JetBrains Mono, monospace">
    <rect x="44" y="76" width="14" height="14" rx="3" fill="url(#bar-{uid})" />
    <rect x="70" y="76" width="150" height="14" rx="7" fill="rgba(255,255,255,0.07)" />
    <rect x="44" y="102" width="22" height="14" rx="3" fill="url(#bar-{uid})" opacity="0.75" />
    <rect x="78" y="102" width="200" height="14" rx="7" fill="rgba(255,255,255,0.05)" />
    <rect x="44" y="128" width="18" height="14" rx="3" fill="url(#bar-{uid})" opacity="0.55" />
    <rect x="74" y="128" width="110" height="14" rx="7" fill="rgba(255,255,255,0.05)" />
    <rect x="44" y="154" width="26" height="14" rx="3" fill="url(#bar-{uid})" opacity="0.4" />
    <rect x="82" y="154" width="170" height="14" rx="7" fill="rgba(255,255,255,0.04)" />
  </g>

  <text x="36" y="212" font-family="Space Grotesk, sans-serif" font-size="25" font-weight="700" fill="#e9eff4">
    {titulo}
  </text>
</svg>
