<script lang="ts">
  import Reveal from './Reveal.svelte';

  interface Props {
    index: string;
    eyebrow: string;
    title: string;
    description?: string;
    align?: 'left' | 'center';
  }

  let { index, eyebrow, title, description, align = 'left' }: Props = $props();
</script>

<div class="mb-12 sm:mb-16 {align === 'center' ? 'text-center' : ''}">
  <Reveal>
    <p class="eyebrow flex items-center gap-3 {align === 'center' ? 'justify-center' : ''}">
      <span class="eyebrow-accent">{index}</span>
      <span class="h-px w-8 bg-line-strong" aria-hidden="true"></span>
      <span>{eyebrow}</span>
    </p>
  </Reveal>
  <Reveal delay={80}>
    <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-5xl">
      {title}
    </h2>
  </Reveal>
  {#if description}
    <Reveal delay={160}>
      <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg {align === 'center' ? 'mx-auto' : ''}">
        {description}
      </p>
    </Reveal>
  {/if}
</div>
