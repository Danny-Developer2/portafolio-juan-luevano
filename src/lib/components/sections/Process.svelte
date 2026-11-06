<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import { processSteps } from '$lib/data/process';

  const spans = [
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-2',
    'lg:col-span-6'
  ];
</script>

<section id="proceso" class="relative py-24 sm:py-32">
  <div class="container-x">
    <SectionHeading
      index="05"
      eyebrow="Cómo trabajo"
      title="Mi proceso de ingeniería"
      description="Siete etapas, del análisis a la entrega. El orden importa: corregir un problema de arquitectura en producción cuesta mucho más que pensarlo antes."
    />

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {#each processSteps as step, i (step.numero)}
        <Reveal class={spans[i] ?? 'lg:col-span-2'} delay={(i % 3) * 90}>
          <div
            class="group card relative h-full overflow-hidden p-5 transition-colors hover:border-accent/40"
          >
            <span
              class="pointer-events-none absolute -top-3 right-2 font-display text-6xl font-bold text-overlay select-none"
              aria-hidden="true"
              >{step.numero}</span
            >
            <span
              class="relative grid h-10 w-10 place-items-center rounded-xl border border-line bg-overlay text-accent"
            >
              <Icon name={step.icon} size={18} />
            </span>
            <h3 class="relative mt-4 font-display text-base font-semibold text-fg">
              {step.titulo}
            </h3>
            <p class="relative mt-2 text-[13px] leading-relaxed text-muted">{step.descripcion}</p>
          </div>
        </Reveal>
      {/each}
    </div>
  </div>
</section>
