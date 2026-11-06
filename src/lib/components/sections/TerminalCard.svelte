<script lang="ts">
  interface Token {
    t: string;
    c: 'key' | 'str' | 'bool' | 'punct' | 'plain' | 'comment';
  }

  const codeLines: Token[][] = [
    [{ t: 'const', c: 'key' }, { t: ' desarrollador ', c: 'plain' }, { t: '=', c: 'punct' }, { t: ' {', c: 'punct' }],
    [
      { t: '  nombre', c: 'key' },
      { t: ': ', c: 'punct' },
      { t: "'Juan Daniel Luevano Ruiz'", c: 'str' },
      { t: ',', c: 'punct' }
    ],
    [
      { t: '  rol', c: 'key' },
      { t: ': ', c: 'punct' },
      { t: "'Full Stack · Ciberseguridad'", c: 'str' },
      { t: ',', c: 'punct' }
    ],
    [
      { t: '  stack', c: 'key' },
      { t: ': ', c: 'punct' },
      { t: "['Angular', '.NET', 'Python']", c: 'str' },
      { t: ',', c: 'punct' }
    ],
    [
      { t: '  seguridad', c: 'key' },
      { t: ': ', c: 'punct' },
      { t: "'desde el diseño'", c: 'str' },
      { t: ',', c: 'punct' }
    ],
    [
      { t: '  datos', c: 'key' },
      { t: ': ', c: 'punct' },
      { t: "'SQL Server · PostgreSQL'", c: 'str' },
      { t: ',', c: 'punct' }
    ],
    [
      { t: '  disponible', c: 'key' },
      { t: ': ', c: 'punct' },
      { t: 'true', c: 'bool' },
      { t: ',', c: 'punct' }
    ],
    [{ t: '};', c: 'punct' }]
  ];

  const colors: Record<Token['c'], string> = {
    key: '#7dd3fc',
    str: '#3ddc97',
    bool: '#f0b429',
    punct: '#5d6b78',
    plain: '#c7d1da',
    comment: '#5d6b78'
  };
</script>

<div class="card overflow-hidden shadow-2xl shadow-black/40">
  <div class="flex items-center gap-2 border-b border-line bg-overlay/80 px-4 py-3">
    <span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true"></span>
    <span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true"></span>
    <span class="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true"></span>
    <span class="ml-3 font-mono text-[11px] text-faint">perfil.ts</span>
    <span class="ml-auto font-mono text-[10px] text-faint">UTF-8 · TS</span>
  </div>

  <pre class="min-h-[240px] overflow-x-auto p-4 font-mono text-[11.5px] leading-[1.8] sm:text-[12.5px]"><code
      >{#each codeLines as line, i (i)}<span
          class="code-line"
          style="animation-delay: {150 + i * 140}ms"
          ><span class="text-faint select-none">{String(i + 1).padStart(2, ' ')}  </span
        >{#each line as token, j (i + '-' + j)}<span style="color: {colors[token.c]}"
            >{token.t}</span
          >{/each}</span
      >{/each}<span
        class="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent"
        aria-hidden="true"></span></code
    ></pre>

  <div class="flex items-center justify-between border-t border-line bg-overlay/60 px-4 py-2.5">
    <span class="font-mono text-[10px] text-faint">zsh — node 26</span>
    <span class="flex items-center gap-1.5 font-mono text-[10px] text-accent">
      <span class="h-1.5 w-1.5 animate-glow rounded-full bg-accent" aria-hidden="true"></span>
      listo
    </span>
  </div>
</div>

<style>
  .code-line {
    display: block;
    opacity: 0;
    animation: line-in 0.35s ease-out forwards;
  }

  @keyframes line-in {
    from {
      opacity: 0;
      transform: translateX(-6px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .code-line {
      animation: none;
      opacity: 1;
    }
  }
</style>
