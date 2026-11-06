<script lang="ts">
  const items = [
    'Angular',
    '.NET',
    'Python',
    'React',
    'Next.js',
    'TypeScript',
    'SQL Server',
    'PostgreSQL',
    'Docker',
    'Azure',
    'Kali Linux',
    'Burp Suite',
    'Flask',
    'Node.js',
    'Tailwind CSS',
    'Git'
  ];

  const duplicated = [...items, ...items];
</script>

<div class="relative overflow-hidden border-y border-line bg-raised/50 py-4">
  <div class="flex w-max animate-marquee gap-8 pr-8">
    {#each duplicated as item, i (item + i)}
      <span
        class="flex items-center gap-8 font-mono text-xs tracking-[0.2em] whitespace-nowrap text-muted uppercase"
        aria-hidden={i >= items.length ? 'true' : undefined}
      >
        {item}
        <span class="h-1 w-1 rounded-full bg-accent/60" aria-hidden="true"></span>
      </span>
    {/each}
  </div>
  <div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent"></div>
  <div class="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base to-transparent"></div>
</div>

<style>
  @media (prefers-reduced-motion: reduce) {
    .animate-marquee {
      animation: none !important;
    }
  }
</style>
