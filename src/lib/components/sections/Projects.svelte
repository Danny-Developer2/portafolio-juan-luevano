<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import ProjectCard from './ProjectCard.svelte';
  import { projects } from '$lib/data/projects';

  const spans = [
    'sm:col-span-2 lg:col-span-3',
    'lg:col-span-3',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-3',
    'lg:col-span-3'
  ];
</script>

<section id="proyectos" class="relative border-y border-line bg-raised/30 py-24 sm:py-32">
  <div class="container-x">
    <SectionHeading
      index="02"
      eyebrow="Proyectos"
      title="Trabajo seleccionado"
      description="Siete proyectos reales de GitHub que muestran variedad técnica: frontend con SSR, APIs en capas, full stack y automatización. Cada tarjeta indica el problema que resuelve y las tecnologías usadas."
    />

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
      {#each projects as project, i (project.id)}
        <ProjectCard
          {project}
          class={spans[i] ?? 'lg:col-span-2'}
          delay={(i % 3) * 90}
          featured={i === 0}
        />
      {/each}
    </div>

    <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
      <p class="font-mono text-xs text-faint">
        Todos los proyectos son públicos y están disponibles en GitHub.
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
</section>
