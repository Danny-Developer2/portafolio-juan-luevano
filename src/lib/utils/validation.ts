/** Validación del formulario de contacto. Sin dependencias externas. */

export interface ContactForm {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactForm(values: ContactForm): ContactErrors {
  const errors: ContactErrors = {};

  const nombre = values.nombre.trim();
  if (!nombre) {
    errors.nombre = 'Ingresa tu nombre.';
  } else if (nombre.length < 2) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres.';
  } else if (nombre.length > 80) {
    errors.nombre = 'El nombre no puede superar los 80 caracteres.';
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = 'Ingresa tu correo electrónico.';
  } else if (email.length > 120) {
    errors.email = 'El correo es demasiado largo.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Ingresa un correo electrónico válido.';
  }

  const asunto = values.asunto.trim();
  if (!asunto) {
    errors.asunto = 'Ingresa un asunto.';
  } else if (asunto.length < 3) {
    errors.asunto = 'El asunto debe tener al menos 3 caracteres.';
  } else if (asunto.length > 120) {
    errors.asunto = 'El asunto no puede superar los 120 caracteres.';
  }

  const mensaje = values.mensaje.trim();
  if (!mensaje) {
    errors.mensaje = 'Escribe tu mensaje.';
  } else if (mensaje.length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
  } else if (mensaje.length > 2000) {
    errors.mensaje = 'El mensaje no puede superar los 2000 caracteres.';
  }

  return errors;
}

export function hasErrors(errors: ContactErrors): boolean {
  return Object.keys(errors).length > 0;
}

/** Codifica los valores para application/x-www-form-urlencoded de forma segura. */
export function encodeFormPayload(values: Record<string, string>): string {
  return Object.entries(values)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}
