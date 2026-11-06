<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import { skillGroups } from '$lib/data/stack';

  const spans = [
    'lg:col-span-3',
    'lg:col-span-3',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-3',
    'lg:col-span-3'
  ];
</script>

<section id="stack" class="relative py-24 sm:py-32">
  <div class="container-x">
    <SectionHeading
      index="03"
      eyebrow="Stack tecnológico"
      title="Tecnologías que domino"
      description="Herramientas respaldadas por mi CV y por el código real de mis repositorios. No uso barras de nivel: preferiría que lo compruebes en el código."
    />

    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
      {#each skillGroups as group, i (group.titulo)}
        <Reveal class={spans[i] ?? 'lg:col-span-2'} delay={(i % 3) * 90}>
          <div class="card h-full p-5">
            <div class="flex items-center gap-3">
              <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-overlay text-accent">
                <Icon name={group.icon} size={17} />
              </span>
              <h3 class="font-display text-sm font-semibold tracking-tight text-fg">
                {group.titulo}
              </h3>
              <span class="ml-auto font-mono text-[10px] text-faint">
                {String(group.items.length).padStart(2, '0')}
              </span>
            </div>
            <div class="mt-4 flex flex-wrap gap-1.5">
              {#each group.items as item (item)}
                <span class="chip">{item}</span>
              {/each}
            </div>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>
