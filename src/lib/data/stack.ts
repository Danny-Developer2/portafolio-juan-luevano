import type { SkillGroup } from './types';

/**
 * Tecnologías respaldadas por el CV y por el código real de los repositorios.
 * No se usan barras de porcentaje: el nivel no se puede medir de forma objetiva.
 */
export const skillGroups: SkillGroup[] = [
  {
    titulo: 'Frontend',
    icon: 'layout',
    items: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Bootstrap']
  },
  {
    titulo: 'Backend',
    icon: 'server',
    items: [
      'C#',
      '.NET / ASP.NET Core',
      'Python',
      'Flask',
      'Node.js',
      'Express',
      'APIs REST',
      'JWT',
      'Swagger / OpenAPI',
      'AutoMapper',
      'FluentValidation'
    ]
  },
  {
    titulo: 'Bases de datos',
    icon: 'database',
    items: ['SQL Server', 'PostgreSQL', 'SQLite', 'Entity Framework Core', 'SQLAlchemy', 'Sequelize', 'Alembic']
  },
  {
    titulo: 'Herramientas',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Visual Studio', 'npm', 'NuGet']
  },
  {
    titulo: 'Infraestructura',
    icon: 'cloud',
    items: ['Azure', 'AWS', 'Netlify', 'Railway', 'Nginx']
  },
  {
    titulo: 'Ciberseguridad',
    icon: 'shield',
    items: [
      'Kali Linux',
      'Nmap',
      'Nessus',
      'Burp Suite',
      'Metasploit',
      'Análisis de vulnerabilidades',
      'Secure SDLC',
      'Cifrado de datos'
    ]
  },
  {
    titulo: 'IA y automatización',
    icon: 'brain',
    items: ['Claude', 'Agentes de IA (AI Agents)', 'Automatización con Python', 'Automatización de procesos']
  }
];
