import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Contact from './Contact.svelte';

describe('Contact', () => {
  it('muestra errores de validación al enviar el formulario vacío', async () => {
    render(Contact);
    await fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0);
    expect(screen.queryByText('Mensaje enviado')).toBeNull();
  });

  it('muestra el aviso de desarrollo con datos válidos (sin envío real)', async () => {
    render(Contact);

    await fireEvent.input(screen.getByLabelText('Nombre'), { target: { value: 'Ana López' } });
    await fireEvent.input(screen.getByLabelText('Correo electrónico'), {
      target: { value: 'ana@example.com' }
    });
    await fireEvent.input(screen.getByLabelText('Asunto'), { target: { value: 'Proyecto' } });
    await fireEvent.input(screen.getByLabelText('Mensaje'), {
      target: { value: 'Hola, quiero información sobre un proyecto.' }
    });

    await fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(await screen.findByText(/Validación correcta/i)).toBeTruthy();
  });
});
