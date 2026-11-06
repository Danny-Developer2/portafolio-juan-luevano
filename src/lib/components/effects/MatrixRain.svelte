<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    class?: string;
    opacity?: number;
    density?: number;
  }

  let { class: className = '', opacity = 0.55, density = 1 }: Props = $props();

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let raf = 0;
  let columns: number[] = [];
  const fontSize = 14;
  const chars = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>{}[]()/=+*#$';

  onMount(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx = canvas.getContext('2d');
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(w / (fontSize * density));
      columns = Array.from({ length: cols }, () => Math.random() * -60);
    };

    const draw = () => {
      if (!ctx) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      ctx.font = `${fontSize}px "JetBrains Mono", ui-monospace, monospace`;
      for (let i = 0; i < columns.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize * density;
        const y = columns[i] * fontSize;
        ctx.fillStyle = Math.random() > 0.976 ? '#9ff5cd' : 'rgba(61, 220, 151, 0.5)';
        ctx.fillText(ch, x, y);
        if (y > h && Math.random() > 0.976) columns[i] = 0;
        columns[i] += 1;
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    if (reduce) {
      draw();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<canvas bind:this={canvas} class={className} style="opacity: {opacity}" aria-hidden="true"></canvas>
