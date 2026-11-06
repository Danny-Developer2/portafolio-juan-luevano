import { describe, expect, it } from 'vitest';
import { education, experience } from './experience';
import { processSteps } from './process';
import { profile } from './profile';
import { projects } from './projects';
import { skillGroups } from './stack';

describe('Contenido del portafolio', () => {
  it('los datos personales provienen del CV y no exponen el teléfono', () => {
    expect(profile.nombreCompleto).toBe('Juan Daniel Luevano Ruiz');
    expect(profile.email).toContain('@');
    expect(profile.social.length).toBeGreaterThanOrEqual(2);
    expect(JSON.stringify(profile)).not.toMatch(/\d{10}/);
  });

  it('los proyectos tienen identidad única y datos completos', () => {
    const ids = new Set(projects.map((p) => p.id));
    expect(ids.size).toBe(projects.length);

    for (const p of projects) {
      expect(p.nombre.length).toBeGreaterThan(3);
      expect(p.descripcion.length).toBeGreaterThan(40);
      expect(p.problema.length).toBeGreaterThan(20);
      expect(p.features.length).toBeGreaterThanOrEqual(3);
      expect(p.tech.length).toBeGreaterThanOrEqual(3);
      expect(p.repo).toMatch(/^https:\/\/github\.com\/Danny-Developer2\//);
    }
  });

  it('no hay enlaces de demo no verificados', () => {
    for (const p of projects) {
      if (p.demo) expect(p.demo).toMatch(/^https:\/\//);
    }
  });

  it('experiencia, formación y proceso están completos', () => {
    expect(experience.length).toBeGreaterThanOrEqual(3);
    expect(education.length).toBeGreaterThanOrEqual(2);
    expect(processSteps.length).toBe(7);
    expect(skillGroups.length).toBeGreaterThanOrEqual(5);
  });

  it('cada grupo de stack tiene tecnologías', () => {
    for (const group of skillGroups) {
      expect(group.items.length).toBeGreaterThan(0);
      expect(group.titulo.length).toBeGreaterThan(0);
    }
  });
});
