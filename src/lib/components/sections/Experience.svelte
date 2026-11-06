<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import { education, experience, idiomas } from '$lib/data/experience';
  import type { EducationItem } from '$lib/data/types';

  function iconFor(tipo: EducationItem['tipo']) {
    if (tipo === 'grado') return 'graduation-cap';
    if (tipo === 'certificacion') return 'award';
    return 'book';
  }

  function labelFor(tipo: EducationItem['tipo']) {
    if (tipo === 'grado') return 'Grado';
    if (tipo === 'certificacion') return 'Certificación';
    return 'Diplomado';
  }
</script>

<section id="experiencia" class="relative border-y border-line bg-raised/30 py-24 sm:py-32">
  <div class="container-x">
    <SectionHeading
      index="04"
      eyebrow="Trayectoria"
      title="Experiencia y formación"
      description="Datos verificados contra mi CV. Tres roles profesionales y una formación combinada en desarrollo y ciberseguridad."
    />

    <div class="grid gap-14 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <Reveal>
          <h3 class="eyebrow mb-7">Experiencia profesional</h3>
        </Reveal>
        <ol class="relative space-y-10 border-l border-line pl-6">
          {#each experience as exp (exp.empresa)}
            <li class="relative">
              <span
                class="absolute top-1.5 -left-[31px] h-3.5 w-3.5 rounded-full border-2 border-accent bg-base"
                aria-hidden="true"
              ></span>
              <Reveal delay={80}>
                <p class="font-mono text-xs tracking-[0.1em] text-muted uppercase">{exp.periodo}</p>
                <h4 class="mt-2 font-display text-xl font-semibold tracking-tight text-fg">
                  {exp.rol}
                </h4>
                <p class="mt-1 text-sm text-muted">
                  {exp.empresa} · {exp.ubicacion}
                </p>
                <p class="mt-3 text-sm leading-relaxed text-fg-soft">{exp.descripcion}</p>
                <ul class="mt-4 space-y-2">
                  {#each exp.logros as logro (logro)}
                    <li class="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <Icon name="check" size={15} class="mt-0.5 shrink-0 text-accent" />
                      <span>{logro}</span>
                    </li>
                  {/each}
                </ul>
                <div class="mt-4 flex flex-wrap gap-1.5">
                  {#each exp.tech as tech (tech)}
                    <span class="chip">{tech}</span>
                  {/each}
                </div>
              </Reveal>
            </li>
          {/each}
        </ol>
      </div>

      <div class="lg:col-span-5">
        <Reveal>
          <h3 class="eyebrow mb-7">Formación y certificaciones</h3>
        </Reveal>
        <div class="space-y-4">
          {#each education as ed (ed.titulo)}
            <Reveal delay={80}>
              <div class="card p-5">
                <div class="flex gap-3">
                  <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-overlay text-accent">
                    <Icon name={iconFor(ed.tipo)} size={17} />
                  </span>
                  <div class="min-w-0">
                    <p class="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                      {labelFor(ed.tipo)} · {ed.periodo}
                    </p>
                    <h4 class="mt-1 font-display text-[15px] font-semibold text-fg">{ed.titulo}</h4>
                    <p class="mt-0.5 text-[13px] text-muted">{ed.institucion}</p>
                    {#if ed.detalle}
                      <p class="mt-2 flex items-start gap-1.5 text-[12px] text-warn">
                        <Icon name="alert" size={13} class="mt-0.5 shrink-0" />
                        {ed.detalle}
                      </p>
                    {/if}
                  </div>
                </div>
              </div>
            </Reveal>
          {/each}
        </div>

        <Reveal delay={160}>
          <div class="card mt-5 p-5">
            <h3 class="eyebrow">Idiomas</h3>
            <ul class="mt-4 space-y-2.5">
              {#each idiomas as idioma (idioma.nombre)}
                <li class="flex items-center justify-between text-sm">
                  <span class="flex items-center gap-2 text-fg-soft">
                    <Icon name="globe" size={15} class="text-accent" />
                    {idioma.nombre}
                  </span>
                  <span class="font-mono text-xs text-muted">{idioma.nivel}</span>
                </li>
              {/each}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>
