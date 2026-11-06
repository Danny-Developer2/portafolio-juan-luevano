<script lang="ts">
  import { onMount } from 'svelte';
  import Icon from '$lib/components/ui/Icon.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import SectionHeading from '$lib/components/ui/SectionHeading.svelte';
  import { profile } from '$lib/data/profile';
  import {
    encodeFormPayload,
    hasErrors,
    validateContactForm,
    type ContactErrors,
    type ContactForm
  } from '$lib/utils/validation';

  type Status = 'idle' | 'sending' | 'success' | 'error' | 'dev';

  let form = $state<ContactForm>({ nombre: '', email: '', asunto: '', mensaje: '' });
  let errors = $state<ContactErrors>({});
  let touched = $state<Partial<Record<keyof ContactForm, boolean>>>({});
  let status = $state<Status>('idle');
  let botField = $state('');
  let loadedAt = $state(0);
  let nativeFallback = false;
  let formEl: HTMLFormElement | undefined = $state();

  const isDev = import.meta.env.DEV;

  onMount(() => {
    loadedAt = Date.now();
  });

  const campos: {
    key: keyof ContactForm;
    label: string;
    type: string;
    autocomplete: 'name' | 'email' | 'off';
    placeholder: string;
    maxlength: number;
  }[] = [
    {
      key: 'nombre',
      label: 'Nombre',
      type: 'text',
      autocomplete: 'name',
      placeholder: 'Tu nombre completo',
      maxlength: 80
    },
    {
      key: 'email',
      label: 'Correo electrónico',
      type: 'email',
      autocomplete: 'email',
      placeholder: 'tu@correo.com',
      maxlength: 120
    },
    {
      key: 'asunto',
      label: 'Asunto',
      type: 'text',
      autocomplete: 'off',
      placeholder: '¿En qué puedo ayudarte?',
      maxlength: 120
    }
  ];

  function validateField(key: keyof ContactForm) {
    const all = validateContactForm(form);
    if (all[key]) {
      errors = { ...errors, [key]: all[key] };
    } else {
      const next = { ...errors };
      delete next[key];
      errors = next;
    }
  }

  function onBlur(key: keyof ContactForm) {
    touched[key] = true;
    validateField(key);
  }

  function onInput(key: keyof ContactForm) {
    if (touched[key]) validateField(key);
  }

  async function handleSubmit(event: SubmitEvent) {
    // Permite el envío nativo cuando se usa el plan B (Netlify directo)
    if (nativeFallback) return;
    event.preventDefault();

    errors = validateContactForm(form);
    touched = { nombre: true, email: true, asunto: true, mensaje: true };
    if (hasErrors(errors)) {
      status = 'error';
      return;
    }

    status = 'sending';

    const payload: Record<string, string> = {
      'form-name': 'contact',
      nombre: form.nombre.trim(),
      email: form.email.trim(),
      asunto: form.asunto.trim(),
      mensaje: form.mensaje.trim(),
      'bot-field': botField,
      'form-loaded-at': String(loadedAt)
    };

    // Anti-spam: honeypot rellenado o envío en menos de 2.5 s tras cargar.
    // En desarrollo no hay backend de Netlify, así que solo se aplica el honeypot.
    const tooFast = !isDev && Date.now() - loadedAt < 2500;
    if (botField || tooFast) {
      status = 'success';
      return;
    }

    if (isDev) {
      // En desarrollo no hay backend de Netlify: no se afirma un envío real.
      status = 'dev';
      return;
    }

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormPayload(payload)
      });
      status = res.ok ? 'success' : 'error';
    } catch {
      // Plan B: envío nativo para que Netlify Forms lo procese
      nativeFallback = true;
      formEl?.requestSubmit();
    }
  }

  function resetForm() {
    form = { nombre: '', email: '', asunto: '', mensaje: '' };
    errors = {};
    touched = {};
    status = 'idle';
    nativeFallback = false;
  }

  const metodos = [
    { icon: 'mail' as const, label: 'Email', valor: profile.email, href: `mailto:${profile.email}` },
    { icon: 'github' as const, label: 'GitHub', valor: 'Danny-Developer2', href: 'https://github.com/Danny-Developer2' },
    {
      icon: 'linkedin' as const,
      label: 'LinkedIn',
      valor: 'Juan Daniel Luevano Ruiz',
      href: 'https://www.linkedin.com/in/juan-daniel-luevano-ruiz-52a17b33b'
    },
    { icon: 'map-pin' as const, label: 'Ubicación', valor: profile.ubicacion, href: undefined }
  ];
</script>

<section id="contacto" class="relative overflow-hidden border-t border-line py-24 sm:py-32">
  <div class="absolute inset-0 bg-grid mask-fade-b opacity-60" aria-hidden="true"></div>
  <div
    class="absolute -bottom-40 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
    aria-hidden="true"
  ></div>

  <div class="container-x relative">
    <SectionHeading
      index="06"
      eyebrow="Contacto"
      title="¿Trabajamos juntos?"
      description="Cuéntame qué necesitas: un proyecto, una colaboración o una oportunidad laboral. Revisaré tu mensaje y te responderé."
    />

    <div class="grid gap-12 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <Reveal>
          <h3 class="font-display text-xl font-semibold text-fg">Canales directos</h3>
          <p class="mt-2 text-sm text-muted">
            El formulario usa Netlify Forms: los mensajes llegan a mi correo sin exponerlo públicamente.
          </p>
        </Reveal>

        <div class="mt-6 space-y-3">
          {#each metodos as metodo (metodo.label)}
            <Reveal delay={80}>
              <div class="card flex items-center gap-4 p-4">
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-overlay text-accent">
                  <Icon name={metodo.icon} size={18} />
                </span>
                <div class="min-w-0 flex-1">
                  <p class="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                    {metodo.label}
                  </p>
                  <p class="truncate text-sm text-fg-soft">{metodo.valor}</p>
                </div>
                {#if metodo.href}
                  <a
                    href={metodo.href}
                    target={metodo.href.startsWith('http') ? '_blank' : undefined}
                    rel={metodo.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    class="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent/50 hover:text-accent"
                    aria-label={`${metodo.label}: ${metodo.valor}`}
                  >
                    <Icon name="arrow-up-right" size={16} />
                  </a>
                {/if}
              </div>
            </Reveal>
          {/each}
        </div>

        <Reveal delay={160}>
          <div class="card mt-5 flex items-start gap-3 p-4">
            <Icon name="shield-check" size={18} class="mt-0.5 shrink-0 text-accent" />
            <p class="text-[13px] leading-relaxed text-muted">
              Tus datos se usan solo para responder a tu mensaje. No se almacenan en este sitio
              ni se comparten con terceros.
            </p>
          </div>
        </Reveal>
      </div>

      <div class="lg:col-span-7">
        <Reveal delay={120}>
          <div class="card p-6 sm:p-8">
            {#if status === 'success'}
              <div class="flex flex-col items-center py-10 text-center" role="status" aria-live="polite">
                <span class="grid h-16 w-16 place-items-center rounded-2xl border border-accent/40 bg-accent/10 text-accent">
                  <Icon name="check" size={30} />
                </span>
                <h3 class="mt-6 font-display text-2xl font-semibold text-fg">Mensaje enviado</h3>
                <p class="mt-2 max-w-md text-sm text-muted">
                  Gracias por escribir. Revisaré tu mensaje y te responderé lo antes posible.
                </p>
                <button type="button" class="btn-ghost mt-8" onclick={resetForm}>
                  <Icon name="refresh" size={16} />
                  Enviar otro mensaje
                </button>
              </div>
            {:else}
              <form
                bind:this={formEl}
                name="contact"
                method="POST"
                action="/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                novalidate
                onsubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p class="hidden" aria-hidden="true">
                  <label>
                    No rellenes este campo <input name="bot-field" bind:value={botField} tabindex="-1" autocomplete="off" />
                  </label>
                </p>

                <div class="grid gap-5 sm:grid-cols-2">
                  {#each campos as campo (campo.key)}
                    <div class={campo.key === 'asunto' ? 'sm:col-span-2' : ''}>
                      <label for="campo-{campo.key}" class="label">{campo.label}</label>
                      <input
                        id="campo-{campo.key}"
                        name={campo.key}
                        type={campo.type}
                        autocomplete={campo.autocomplete}
                        placeholder={campo.placeholder}
                        class="input"
                        class:border-warn={touched[campo.key] && errors[campo.key]}
                        bind:value={form[campo.key]}
                        onblur={() => onBlur(campo.key)}
                        oninput={() => onInput(campo.key)}
                        maxlength={campo.maxlength}
                        aria-invalid={Boolean(touched[campo.key] && errors[campo.key])}
                        aria-describedby={touched[campo.key] && errors[campo.key] ? `error-${campo.key}` : undefined}
                      />
                      {#if touched[campo.key] && errors[campo.key]}
                        <p id="error-{campo.key}" class="mt-1.5 flex items-center gap-1 text-xs text-warn" role="alert">
                          <Icon name="alert" size={12} />
                          {errors[campo.key]}
                        </p>
                      {/if}
                    </div>
                  {/each}
                </div>

                <div class="mt-5">
                  <label for="campo-mensaje" class="label">Mensaje</label>
                  <textarea
                    id="campo-mensaje"
                    name="mensaje"
                    rows="6"
                    placeholder="Describe tu proyecto o tu necesidad…"
                    class="input resize-y"
                    class:border-warn={touched.mensaje && errors.mensaje}
                    bind:value={form.mensaje}
                    onblur={() => onBlur('mensaje')}
                    oninput={() => onInput('mensaje')}
                    maxlength="2000"
                    aria-invalid={Boolean(touched.mensaje && errors.mensaje)}
                    aria-describedby={touched.mensaje && errors.mensaje ? 'error-mensaje' : 'hint-mensaje'}
                  ></textarea>
                  <div class="mt-1.5 flex items-center justify-between gap-3">
                    {#if touched.mensaje && errors.mensaje}
                      <p id="error-mensaje" class="flex items-center gap-1 text-xs text-warn" role="alert">
                        <Icon name="alert" size={12} />
                        {errors.mensaje}
                      </p>
                    {:else}
                      <p id="hint-mensaje" class="text-xs text-faint">
                        Máximo 2000 caracteres.
                      </p>
                    {/if}
                    <span class="font-mono text-[11px] text-faint">{form.mensaje.length}/2000</span>
                  </div>
                </div>

                {#if status === 'error'}
                  <p class="mt-4 flex items-center gap-2 rounded-xl border border-warn/40 bg-warn/10 px-4 py-3 text-sm text-warn" role="alert">
                    <Icon name="alert" size={16} />
                    Revisa los campos marcados antes de enviar.
                  </p>
                {/if}

                {#if status === 'dev'}
                  <p class="mt-4 flex items-start gap-2 rounded-xl border border-accent-2/40 bg-accent-2/10 px-4 py-3 text-sm text-accent-2" role="status">
                    <Icon name="zap" size={16} class="mt-0.5 shrink-0" />
                    Validación correcta. En este entorno de desarrollo no se realiza el envío; en
                    producción el formulario se entrega con Netlify Forms.
                  </p>
                {/if}

                <div class="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p class="font-mono text-[11px] text-faint">Protegido con honeypot · Sin trackers</p>
                  <button type="submit" class="btn-primary" disabled={status === 'sending'}>
                    {#if status === 'sending'}
                      <Icon name="spinner" size={17} class="animate-spin" />
                      Enviando…
                    {:else}
                      <Icon name="send" size={17} />
                      Enviar mensaje
                    {/if}
                  </button>
                </div>
              </form>
            {/if}
          </div>
        </Reveal>
      </div>
    </div>
  </div>
</section>
