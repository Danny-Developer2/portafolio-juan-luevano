import type { Profile } from './types';

/**
 * Datos personales verificados contra el CV (Datos_Humano/Curriculum_JuanLuevano_2026.pdf)
 * y el perfil de LinkedIn público. No se incluye el teléfono por privacidad.
 */
export const profile: Profile = {
  nombreCompleto: 'Juan Daniel Luevano Ruiz',
  nombreCorto: 'Juan Luevano',
  titulo: 'Desarrollador Full Stack & Analista de Ciberseguridad',
  tituloCorto: 'Full Stack · Ciberseguridad',
  ubicacion: 'Monterrey, Nuevo León, México',
  email: 'daniel_luevanolr@hotmail.com',
  resumen:
    'Profesional de sistemas con formación en Seguridad de Tecnologías de la Información (UANL) e Ingeniería en Ciberseguridad (UVM). Me especializo en desarrollo full stack —Angular, React, .NET y Python— y en integrar la seguridad desde el diseño del software (Secure SDLC). He construido APIs REST, aplicaciones web y de escritorio, y automatizaciones con Python y agentes de IA. Me muevo con comodidad entre el frontend y el backend, y aporto una mentalidad de defensa: código defensivo, validación de entradas y protección de datos.',
  propuestaValor:
    'Construyo aplicaciones web completas —del frontend al backend— con la seguridad integrada desde el primer commit.',
  disponible: true,
  social: [
    { label: 'GitHub', url: 'https://github.com/Danny-Developer2', icon: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juan-daniel-luevano-ruiz-52a17b33b',
      icon: 'linkedin'
    },
    { label: 'Email', url: 'mailto:daniel_luevanolr@hotmail.com', icon: 'mail' }
  ],
  stats: [
    { valor: '28', etiqueta: 'repositorios públicos' },
    { valor: '7', etiqueta: 'proyectos destacados' },
    { valor: '3', etiqueta: 'roles profesionales' },
    { valor: '2', etiqueta: 'disciplinas: desarrollo + seguridad' }
  ]
};
