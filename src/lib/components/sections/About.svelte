<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import { profile } from '$lib/data/profile';
  import { idiomas } from '$lib/data/experience';

  const pilares = [
    {
      icon: 'code' as const,
      titulo: 'Código limpio',
      texto: 'Tipado estricto, responsabilidades claras y módulos pequeños que se pueden mantener.'
    },
    {
      icon: 'shield' as const,
      titulo: 'Seguridad desde el diseño',
      texto: 'Validación de entradas, mínimo privilegio y protección de datos desde la arquitectura.'
    },
    {
      icon: 'flask' as const,
      titulo: 'Testing real',
      texto: 'Pruebas unitarias y end-to-end; verifico el comportamiento antes de dar por terminado.'
    },
    {
      icon: 'zap' as const,
      titulo: 'Automatización',
      texto: 'Scripts y agentes de IA para eliminar trabajo repetitivo y acelerar la entrega.'
    }
  ];

  const enfoca = [
    'Aplicaciones web completas (frontend + backend + base de datos)',
    'APIs REST seguras, documentadas y con control de acceso',
    'Migración de sistemas existentes a tecnologías modernas',
    'Automatización de procesos y reportes',
    'Revisión de seguridad y hardening básico'
  ];
</script>

<section id="sobre-mi" class="relative py-24 sm:py-32">
  <div class="container-x">
    <SectionHeading
      index="01"
      eyebrow="Sobre mí"
      title="Perfil profesional"
      description="Desarrollador full stack con base en ciberseguridad: construyo software que funciona y, además, resiste."
    />

    <div class="grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <Reveal>
          <p class="text-base leading-relaxed text-fg-soft sm:text-lg">
            {profile.resumen}
          </p>
        </Reveal>
        <Reveal delay={90}>
          <p class="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Mi enfoque combina el desarrollo full stack con una mentalidad de defensa. Trabajo con
            tipado estricto, validación de entradas, pruebas automatizadas y despliegues repetibles;
            y me apoyo en la automatización y la IA para entregar más en menos tiempo.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            {#each pilares as p (p.titulo)}
              <div class="card flex gap-3 p-4">
                <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-overlay text-accent">
                  <Icon name={p.icon} size={17} />
                </span>
                <div>
                  <h3 class="font-display text-sm font-semibold text-fg">{p.titulo}</h3>
                  <p class="mt-1 text-[13px] leading-relaxed text-muted">{p.texto}</p>
                </div>
              </div>
            {/each}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div class="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6">
            <span class="flex items-center gap-2 text-sm text-muted">
              <Icon name="map-pin" size={16} class="text-accent" />
              {profile.ubicacion}
            </span>
            {#each idiomas as idioma (idioma.nombre)}
              <span class="flex items-center gap-2 text-sm text-muted">
                <Icon name="globe" size={16} class="text-accent" />
                {idioma.nombre}: <span class="text-fg-soft">{idioma.nivel}</span>
              </span>
            {/each}
          </div>
        </Reveal>
      </div>

      <div class="lg:col-span-5">
        <Reveal delay={120}>
          <div class="card p-6">
            <h3 class="eyebrow">En qué puedo aportar</h3>
            <ul class="mt-5 space-y-3.5">
              {#each enfoca as item (item)}
                <li class="flex gap-3 text-sm leading-relaxed text-muted">
                  <Icon name="check" size={16} class="mt-0.5 shrink-0 text-accent" />
                  {item}
                </li>
              {/each}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div class="card mt-5 p-6">
            <div class="flex items-center gap-3">
              <span class="grid h-10 w-10 place-items-center rounded-xl border border-line bg-overlay text-accent">
                <Icon name="briefcase" size={18} />
              </span>
              <div>
                <p class="font-display text-sm font-semibold text-fg">Director General</p>
                <p class="text-xs text-muted">Ldevs · Monterrey, N.L.</p>
              </div>
            </div>
            <p class="mt-4 text-[13px] leading-relaxed text-muted">
              Emprendimiento propio de desarrollo de software, registrado en LinkedIn.
            </p>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <dl class="mt-5 grid grid-cols-2 gap-3">
            {#each profile.stats as stat (stat.etiqueta)}
              <div class="card p-4 text-center">
                <dd class="font-display text-2xl font-semibold text-accent">{stat.valor}</dd>
                <dt class="mt-1 font-mono text-[10px] tracking-[0.1em] text-muted uppercase">
                  {stat.etiqueta}
                </dt>
              </div>
            {/each}
          </dl>
        </Reveal>
      </div>
    </div>
  </div>
</section>
