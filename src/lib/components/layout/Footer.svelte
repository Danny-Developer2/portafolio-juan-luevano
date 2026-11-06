<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte';
  import { profile } from '$lib/data/profile';
  import { projects } from '$lib/data/projects';

  const year = new Date().getFullYear();

  const secciones = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'stack', label: 'Stack' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'contacto', label: 'Contacto' }
  ];

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="relative border-t border-line bg-raised/40">
  <div class="container-x py-14">
    <div class="grid gap-10 md:grid-cols-12">
      <div class="md:col-span-5">
        <a href="#inicio" class="flex items-center gap-3">
          <span class="grid h-10 w-10 place-items-center rounded-xl border border-line-strong bg-overlay font-display text-base font-bold text-accent">
            JL
          </span>
          <span class="font-display text-lg font-semibold tracking-tight">{profile.nombreCompleto}</span>
        </a>
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-muted">
          {profile.propuestaValor}
        </p>
        <div class="mt-6 flex items-center gap-2">
          {#each profile.social as link (link.label)}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer me"
              class="grid h-10 w-10 place-items-center rounded-xl border border-line bg-overlay/70 text-muted transition-colors hover:border-accent/50 hover:text-accent"
              aria-label={link.label}
            >
              <Icon name={link.icon} size={18} />
            </a>
          {/each}
        </div>
      </div>

      <div class="md:col-span-3">
        <h3 class="eyebrow">Secciones</h3>
        <ul class="mt-4 space-y-2.5">
          {#each secciones as s (s.id)}
            <li>
              <a href="#{s.id}" class="text-sm text-muted transition-colors hover:text-accent">
                {s.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <div class="md:col-span-4">
        <h3 class="eyebrow">Proyectos</h3>
        <ul class="mt-4 space-y-2.5">
          {#each projects.slice(0, 5) as p (p.id)}
            <li>
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                {p.nombre}
                <Icon name="arrow-up-right" size={13} class="opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div
      class="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center"
    >
      <p class="font-mono text-xs text-faint">
        © {year} {profile.nombreCompleto} · Monterrey, N.L., México
      </p>
      <div class="flex items-center gap-4">
        <p class="font-mono text-xs text-faint">SvelteKit + Tailwind CSS</p>
        <button
          type="button"
          onclick={toTop}
          class="grid h-9 w-9 place-items-center rounded-xl border border-line bg-overlay/70 text-muted transition-colors hover:border-accent/50 hover:text-accent"
          aria-label="Volver arriba"
        >
          <Icon name="arrow-down" size={16} class="rotate-180" />
        </button>
      </div>
    </div>
  </div>
</footer>
