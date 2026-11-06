<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '$lib/data/projects';

  // Tres proyectos por pagina. En la ultima pagina, si faltan tarjetas, se
  // muestra un marcador "Proximamente" para completar la fila.
  const POR_PAGINA = 3;

  let pagina = $state(1);

  const paginas = Math.ceil(projects.length / POR_PAGINA);
  const visibles = $derived(projects.slice((pagina - 1) * POR_PAGINA, pagina * POR_PAGINA));
  const faltantes = $derived(Math.max(0, POR_PAGINA - visibles.length));
  const esPrimera = $derived(pagina === 1);
  const esUltima = $derived(pagina === paginas);

  function irA(p: number) {
    if (p < 1 || p > paginas) return;
    pagina = p;
    document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
</script>

<section id="proyectos" class="relative border-y border-line bg-raised/30 py-24 sm:py-32">
  <div class="container-x">
    <SectionHeading
      index="02"
      eyebrow="Proyectos"
      title="Trabajo seleccionado"
      description="Herramientas propias de ciberseguridad en Python, frontend con SSR, APIs en capas, full stack y automatización. Cada tarjeta indica el problema que resuelve y las tecnologías usadas."
    />

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
      {#each visibles as project, i (project.id)}
        <ProjectCard {project} class="lg:col-span-2" delay={(i % 3) * 90} featured={i === 0} />
      {/each}

      <!-- Marcadores para completar la ultima fila -->
      {#each Array.from({ length: faltantes }) as _, i (i)}
        <div
          class="grid place-items-center rounded-2xl border border-dashed border-line/80 bg-raised/20 p-8 text-center lg:col-span-2"
        >
          <div>
            <span
              class="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-line bg-overlay text-faint"
            >
              <Icon name="rocket" size={22} />
            </span>
            <p class="mt-4 font-display text-lg font-semibold text-fg-soft">Próximamente</p>
            <p class="mt-1 text-sm text-muted">Nuevos proyectos en camino.</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Paginacion -->
    <div class="mt-12 flex flex-col items-center gap-6">
      <nav class="flex items-center gap-2" aria-label="Paginación de proyectos">
        <button
          type="button"
          class="btn-ghost btn-sm"
          onclick={() => irA(pagina - 1)}
          disabled={esPrimera}
        >
          <Icon name="arrow-right" size={15} class="rotate-180" />
          Anterior
        </button>

        <div class="flex items-center gap-1.5">
          {#each Array.from({ length: paginas }, (_, i) => i + 1) as p (p)}
            <button
              type="button"
              onclick={() => irA(p)}
              class="grid h-9 w-9 place-items-center rounded-lg border text-sm font-medium transition-colors {p ===
              pagina
                ? 'border-accent/50 bg-accent/10 text-accent'
                : 'border-line text-muted hover:border-accent/40 hover:text-accent'}"
              aria-current={p === pagina ? 'page' : undefined}
            >
              {p}
            </button>
          {/each}
        </div>

        <button
          type="button"
          class="btn-ghost btn-sm"
          onclick={() => irA(pagina + 1)}
          disabled={esUltima}
        >
          Siguiente
          <Icon name="arrow-right" size={15} />
        </button>
      </nav>

      <div
        class="flex w-full flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row"
      >
        <p class="font-mono text-xs text-faint">
          Página {pagina} de {paginas} · {projects.length} proyectos públicos en GitHub
        </p>
        <a
          href="https://github.com/Danny-Developer2?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost btn-sm"
        >
          Ver todos los repositorios
          <Icon name="arrow-up-right" size={15} />
        </a>
      </div>
    </div>
  </div>
</section>
