import { expect, test } from '@playwright/test';

test('el hero carga con el nombre y la navegación principal', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Juan Daniel');

  const esEscritorio = (page.viewportSize()?.width ?? 1280) >= 1024;
  if (esEscritorio) {
    await expect(page.getByRole('navigation', { name: 'Navegación principal' })).toBeVisible();
  } else {
    // En móvil el nav se sustituye por el botón de menú
    await expect(page.getByRole('button', { name: /abrir menú/i })).toBeVisible();
  }

  await expect(page.locator('#inicio a[href="#proyectos"]').first()).toBeVisible();
});

test('la navegación por anclas lleva a cada sección', async ({ page }) => {
  await page.goto('/');
  for (const id of ['sobre-mi', 'proyectos', 'stack', 'experiencia', 'proceso', 'contacto']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
});

test('el formulario de contacto valida los campos obligatorios', async ({ page }) => {
  await page.goto('/#contacto');
  await page.getByRole('button', { name: /enviar mensaje/i }).click();
  await expect(page.getByRole('alert').first()).toBeVisible();
});

test('los enlaces externos de proyectos apuntan a GitHub', async ({ page }) => {
  await page.goto('/#proyectos');
  const links = page.getByRole('link', { name: /repositorio/i });
  expect(await links.count()).toBeGreaterThan(0);
  expect(await links.first().getAttribute('href')).toMatch(/^https:\/\/github\.com\//);
});

test('no hay errores de consola al cargar la página', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/');
  await page.waitForTimeout(2000);

  expect(errors).toEqual([]);
});
