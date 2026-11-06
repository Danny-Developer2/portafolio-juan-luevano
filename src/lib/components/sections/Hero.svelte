<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import TerminalCard from './TerminalCard.svelte';
  import MatrixRain from '$lib/components/effects/MatrixRain.svelte';
  import { profile } from '$lib/data/profile';

  const github = profile.social.find((s) => s.icon === 'github');
</script>

<section id="inicio" class="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
  <!-- Fondo: retícula + lluvia digital + halos -->
  <div class="absolute inset-0 bg-grid mask-fade-b" aria-hidden="true"></div>
  <div
    class="absolute inset-0"
    style="mask-image: linear-gradient(100deg, transparent 0%, rgba(0,0,0,0.45) 38%, black 70%); -webkit-mask-image: linear-gradient(100deg, transparent 0%, rgba(0,0,0,0.45) 38%, black 70%)"
    aria-hidden="true"
  >
    <MatrixRain class="h-full w-full" opacity={0.34} />
  </div>
  <div
    class="absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[130px]"
    aria-hidden="true"
  ></div>
  <div
    class="absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-accent-2/10 blur-[130px]"
    aria-hidden="true"
  ></div>

  <div class="container-x relative">
    <div class="grid items-center gap-14 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <Reveal>
          <p class="inline-flex items-center gap-2 rounded-full border border-line bg-overlay/70 px-3.5 py-1.5 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60"></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            {profile.disponible ? 'Disponible para oportunidades' : 'No disponible'}
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h1 class="mt-6 font-display text-4xl font-semibold tracking-tight text-fg sm:text-6xl lg:text-7xl">
            <span class="block text-muted text-lg font-normal tracking-normal sm:text-xl">
              Hola, soy
            </span>
            <span class="mt-2 block">Juan Daniel</span>
            <span class="block">
              Luevano <span class="text-accent">Ruiz</span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p class="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-fg-soft sm:text-base">
            <Icon name="code" size={18} class="text-accent" />
            <span>Desarrollador Full Stack</span>
            <span class="text-faint" aria-hidden="true">/</span>
            <span>Analista de Ciberseguridad</span>
          </p>
        </Reveal>

        <Reveal delay={250}>
          <p class="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.propuestaValor} Especializado en Angular, .NET y Python, con experiencia
            real en APIs, bases de datos y despliegues en la nube.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a href="#proyectos" class="btn-primary">
              Explorar proyectos
              <Icon name="arrow-down" size={16} />
            </a>
            <a href="#contacto" class="btn-ghost">
              Contáctame
              <Icon name="arrow-up-right" size={16} />
            </a>
            {#if github}
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                class="grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-overlay/60 text-fg-soft transition-colors hover:border-accent/50 hover:text-accent"
                aria-label="GitHub de Juan Daniel Luevano Ruiz"
              >
                <Icon name="github" size={19} />
              </a>
            {/if}
          </div>
        </Reveal>

        <Reveal delay={400}>
          <dl class="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {#each profile.stats as stat (stat.etiqueta)}
              <div>
                <dt class="sr-only">{stat.etiqueta}</dt>
                <dd class="font-display text-3xl font-semibold text-fg">{stat.valor}</dd>
                <dd class="mt-1 font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                  {stat.etiqueta}
                </dd>
              </div>
            {/each}
          </dl>
        </Reveal>
      </div>

      <div class="lg:col-span-5">
        <Reveal delay={220} y={30}>
          <div class="relative">
            <div
              class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent-2/20 blur-2xl"
              aria-hidden="true"
            ></div>
            <div class="relative animate-float">
              <TerminalCard />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </div>

  <a
    href="#sobre-mi"
    class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-faint uppercase transition-colors hover:text-accent sm:flex"
    aria-label="Bajar a la sección Sobre mí"
  >
    scroll
    <span class="h-8 w-px bg-gradient-to-b from-accent to-transparent" aria-hidden="true"></span>
  </a>
</section>
