import type { EducationItem, ExperienceItem } from './types';

/** Experiencia verificada contra el CV. No se añaden empresas ni periodos no documentados. */
export const experience: ExperienceItem[] = [
  {
    rol: 'Analista en Sistemas',
    empresa: 'Uresti, Asociados',
    periodo: 'Abril 2024 – Mayo 2026',
    ubicacion: 'Monterrey, N.L.',
    descripcion:
      'Automatización de procesos y desarrollo de herramientas internas con Python, integración de APIs y soluciones de IA.',
    logros: [
      'Automatización de procesos con Python para el envío de comunicaciones mediante APIs',
      'Desarrollo de scripts Python y aplicaciones de escritorio para automatización',
      'Implementación de soluciones de IA con Claude y agentes inteligentes (AI Agents)',
      'Integración de APIs para envío masivo de SMS y correos electrónicos',
      'Generación de reportes, auditoría de logs y análisis forense',
      'Implementación de mecanismos de cifrado y protección de datos'
    ],
    tech: ['Python', 'APIs REST', 'Claude / AI Agents', 'Cifrado', 'Automatización']
  },
  {
    rol: 'Desarrollador Web Full Stack',
    empresa: 'Soft Inc.',
    periodo: '2022 – 2023',
    ubicacion: 'México',
    descripcion:
      'Desarrollo de software en la nube con Angular en el frontend y .NET en el backend, con despliegues en Docker, Azure y AWS.',
    logros: [
      'Desarrollos desde cero y migración de software existente a nuevas tecnologías',
      'Aplicación de código defensivo y prácticas de software seguro',
      'Trabajo con contenedores Docker y nubes Azure / AWS'
    ],
    tech: ['Angular', '.NET', 'TypeScript', 'Docker', 'Azure', 'AWS']
  },
  {
    rol: 'Desarrollador Junior Backend',
    empresa: 'Inversiones Accionarias Landus',
    periodo: '2021 – 2022',
    ubicacion: 'México',
    descripcion:
      'Desarrollo y mantenimiento de aplicaciones web y de escritorio, con lógica de negocio e integración de bases de datos en C# y .NET.',
    logros: [
      'Desarrollo de funcionalidades y lógica de negocio en C# / .NET',
      'Integración de bases de datos y optimización de procesos internos',
      'Mantenimiento y mejora continua de sistemas existentes'
    ],
    tech: ['C#', '.NET', 'SQL Server', 'Aplicaciones escritorio']
  }
];

/** Formación y certificaciones verificadas contra el CV. */
export const education: EducationItem[] = [
  {
    titulo: 'Licenciatura en Seguridad de Tecnologías de la Información',
    institucion: 'FCFM — Universidad Autónoma de Nuevo León (UANL)',
    periodo: '2019 – 2024',
    tipo: 'grado'
  },
  {
    titulo: 'Ingeniería en Ciberseguridad',
    institucion: 'Universidad del Valle de México (UVM)',
    periodo: '2026',
    tipo: 'grado'
  },
  {
    titulo: 'Diplomado en Ciberseguridad',
    institucion: 'Universidad del Valle de México (UVM)',
    periodo: '—',
    detalle: 'Mención en el perfil profesional del CV.',
    tipo: 'diplomado'
  },
  {
    titulo: 'Desarrollo Web — Angular & .NET',
    institucion: 'Institución no especificada en el CV',
    periodo: '2023 – 2024',
    detalle: 'Pendiente de verificar: el CV no indica la institución emisora.',
    tipo: 'certificacion'
  }
];

export const idiomas = [
  { nombre: 'Español', nivel: 'Nativo' },
  { nombre: 'Inglés', nivel: 'Básico-intermedio' }
];
