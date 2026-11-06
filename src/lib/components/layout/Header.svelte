<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '$lib/components/ui/Icon.svelte';
  import { profile } from '$lib/data/profile';

  const nav = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'stack', label: 'Stack' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'contacto', label: 'Contacto' }
  ];

  let scrolled = $state(false);
  let open = $state(false);
  let active = $state('');
  let progress = $state(0);
  let headerEl: HTMLElement | undefined = $state();

  onMount(() => {
    const onScroll = () => {
      const y = window.scrollY;
      scrolled = y > 24;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress = max > 0 ? Math.min(100, (y / max) * 100) : 0;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active = entry.target.id;
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') open = false;
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      io.disconnect();
    };
  });

  function closeMenu() {
    open = false;
  }

  function toggleMenu() {
    open = !open;
  }
</script>

<header
  bind:this={headerEl}
  class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrolled
    ? 'border-b border-line bg-base/80 backdrop-blur-xl'
    : 'border-b border-transparent bg-transparent'}"
>
  <div class="container-x">
    <div class="flex h-16 items-center justify-between gap-4 sm:h-20">
      <a href="#inicio" class="group flex items-center gap-3" aria-label="Ir al inicio">
        <span
          class="grid h-9 w-9 place-items-center rounded-xl border border-line-strong bg-overlay font-display text-sm font-bold text-accent transition-colors group-hover:border-accent/50"
        >
          JL
        </span>
        <span class="hidden flex-col leading-tight sm:flex">
          <span class="font-display text-sm font-semibold tracking-tight text-fg">
            {profile.nombreCorto}
          </span>
          <span class="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {profile.tituloCorto}
          </span>
        </span>
      </a>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
        {#each nav as item (item.id)}
          <a
            href="#{item.id}"
            class="rounded-full px-3.5 py-2 text-sm transition-colors {active === item.id
              ? 'bg-overlay text-fg'
              : 'text-muted hover:text-fg'}"
            aria-current={active === item.id ? 'true' : undefined}
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <div class="flex items-center gap-2">
        <a href="#contacto" class="btn-primary btn-sm hidden sm:inline-flex">
          <Icon name="send" size={15} />
          Contáctame
        </a>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-xl border border-line bg-overlay/70 text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onclick={toggleMenu}
        >
          <Icon name={open ? 'close' : 'menu'} size={20} />
        </button>
      </div>
    </div>
  </div>

  <!-- Barra de progreso de lectura -->
  <div class="h-px w-full bg-line/50" aria-hidden="true">
    <div class="h-px bg-accent transition-[width] duration-150" style="width: {progress}%"></div>
  </div>

  <!-- Menú móvil -->
  {#if open}
    <div
      id="mobile-menu"
      class="fixed inset-0 top-16 z-40 flex flex-col bg-base/95 backdrop-blur-2xl lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
    >
      <nav class="container-x flex flex-1 flex-col justify-center gap-2" aria-label="Navegación móvil">
        {#each nav as item, i (item.id)}
          <a
            href="#{item.id}"
            class="group flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold text-fg-soft transition-colors hover:text-accent"
            style="animation: fadeSlide .4s {i * 45}ms both"
            onclick={closeMenu}
          >
            <span>{item.label}</span>
            <span class="font-mono text-xs text-faint">0{i + 1}</span>
          </a>
        {/each}
      </nav>
      <div class="container-x pb-10">
        <a href="#contacto" class="btn-primary w-full" onclick={closeMenu}>
          <Icon name="send" size={16} />
          Contáctame
        </a>
      </div>
    </div>
  {/if}
</header>

<style>
  @keyframes fadeSlide {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-delay: 0ms !important;
    }
  }
</style>
