import { describe, expect, it } from 'vitest';
import { encodeFormPayload, hasErrors, validateContactForm } from './validation';

const valido = {
  nombre: 'Ana López',
  email: 'ana@example.com',
  asunto: 'Proyecto',
  mensaje: 'Hola, quiero información sobre un proyecto.'
};

describe('validateContactForm', () => {
  it('acepta un formulario válido', () => {
    expect(validateContactForm(valido)).toEqual({});
    expect(hasErrors(validateContactForm(valido))).toBe(false);
  });

  it('rechaza un formulario vacío en los cuatro campos', () => {
    const errors = validateContactForm({ nombre: '', email: '', asunto: '', mensaje: '' });
    expect(Object.keys(errors).sort()).toEqual(['asunto', 'email', 'mensaje', 'nombre']);
    expect(hasErrors(errors)).toBe(true);
  });

  it('valida el formato del correo', () => {
    expect(validateContactForm({ ...valido, email: 'correo-malo' }).email).toBeTruthy();
    expect(validateContactForm({ ...valido, email: 'a@b.co' }).email).toBeUndefined();
  });

  it('valida la longitud del mensaje', () => {
    expect(validateContactForm({ ...valido, mensaje: 'corto' }).mensaje).toBeTruthy();
    expect(validateContactForm({ ...valido, mensaje: 'a'.repeat(2001) }).mensaje).toBeTruthy();
    expect(validateContactForm({ ...valido, mensaje: 'a'.repeat(2000) }).mensaje).toBeUndefined();
  });

  it('limpia los espacios en blanco antes de validar', () => {
    expect(validateContactForm({ ...valido, nombre: '  Ana  ' })).toEqual({});
    expect(validateContactForm({ ...valido, nombre: '   ' }).nombre).toBeTruthy();
  });
});

describe('encodeFormPayload', () => {
  it('codifica pares clave-valor de forma segura', () => {
    expect(encodeFormPayload({ a: 'hola mundo', b: 'x&y=z' })).toBe('a=hola%20mundo&b=x%26y%3Dz');
  });

  it('soporta campos vacíos', () => {
    expect(encodeFormPayload({ a: '', b: 'x' })).toBe('a=&b=x');
  });
});
