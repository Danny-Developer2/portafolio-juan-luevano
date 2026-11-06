<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import ProjectCover from './ProjectCover.svelte';
  import type { Project } from '$lib/data/types';

  interface Props {
    project: Project;
    class?: string;
    delay?: number;
    featured?: boolean;
  }

  let { project, class: className = '', delay = 0, featured = false }: Props = $props();

  let maxFeatures = $derived(featured ? 4 : 3);
  let maxTech = $derived(featured ? 8 : 6);
</script>

<Reveal class="h-full {className}" {delay}>
  <article
    class="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(61,220,151,0.35)]"
  >
    <div class="relative overflow-hidden">
      <ProjectCover
        titulo={project.cover.titulo}
        subtitulo={project.cover.subtitulo}
        accent={project.accent}
        class="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div class="absolute top-3 left-3 flex gap-2">
        <span class="chip border-white/10 bg-base/80 backdrop-blur">{project.categoria}</span>
      </div>
      <span class="chip absolute top-3 right-3 border-white/10 bg-base/80 backdrop-blur">
        {project.ano}
      </span>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <h3 class="font-display text-lg font-semibold tracking-tight text-fg">
        {project.nombre}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-muted">{project.descripcion}</p>

      <div class="mt-4">
        <p class="eyebrow mb-1.5">Problema que resuelve</p>
        <p class="text-[13px] leading-relaxed text-fg-soft">{project.problema}</p>
      </div>

      <ul class="mt-4 space-y-2">
        {#each project.features.slice(0, maxFeatures) as feature (feature)}
          <li class="flex gap-2 text-[13px] leading-relaxed text-muted">
            <Icon name="check" size={15} class="mt-0.5 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        {/each}
      </ul>

      <div class="mt-4 mb-5 flex flex-wrap gap-1.5">
        {#each project.tech.slice(0, maxTech) as tech (tech)}
          <span class="chip">{tech}</span>
        {/each}
      </div>

      <div class="mt-auto flex items-center gap-3 border-t border-line pt-4">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-fg-soft transition-colors hover:text-accent"
        >
          <Icon name="github" size={16} />
          Repositorio
        </a>
        {#if project.demo}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm font-medium text-fg-soft transition-colors hover:text-accent"
          >
            <Icon name="eye" size={16} />
            Demo
          </a>
        {/if}
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          class="ml-auto grid h-8 w-8 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
          aria-label="Abrir {project.nombre} en GitHub"
        >
          <Icon name="arrow-up-right" size={15} />
        </a>
      </div>
    </div>
  </article>
</Reveal>
