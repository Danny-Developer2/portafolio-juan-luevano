<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    children: any;
    delay?: number;
    y?: number;
    as?: string;
    class?: string;
    id?: string;
  }

  let { children, delay = 0, y = 22, as = 'div', class: className = '', id }: Props = $props();

  let el: HTMLElement | undefined = $state();
  let visible = $state(false);

  onMount(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      visible = true;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible = true;
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  });
</script>

<svelte:element
  this={as}
  bind:this={el}
  {id}
  class="reveal {visible ? 'is-visible' : ''} {className}"
  style="--reveal-delay: {delay}ms; --reveal-y: {y}px"
>
  {@render children()}
</svelte:element>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(var(--reveal-y));
    transition:
      opacity 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) var(--reveal-delay),
      transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) var(--reveal-delay);
    will-change: opacity, transform;
  }

  .reveal.is-visible {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
</style>
