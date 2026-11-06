import type { ProcessStep } from './types';

/** Enfoque de ingeniería: del análisis a la entrega. */
export const processSteps: ProcessStep[] = [
  {
    numero: '01',
    titulo: 'Análisis',
    descripcion:
      'Entender el problema, los usuarios y el contexto antes de escribir código. Definir el alcance real, no el imaginado.',
    icon: 'search'
  },
  {
    numero: '02',
    titulo: 'Diseño',
    descripcion:
      'Definir la experiencia, la interfaz y la arquitectura. Validar decisiones con el cliente antes de construir.',
    icon: 'layers'
  },
  {
    numero: '03',
    titulo: 'Arquitectura',
    descripcion:
      'Elegir el stack, estructurar módulos y definir contratos: APIs, tipos y modelos de datos.',
    icon: 'git-branch'
  },
  {
    numero: '04',
    titulo: 'Desarrollo',
    descripcion:
      'Implementar con código limpio, tipado estricto y revisiones constantes. Seguridad desde el diseño.',
    icon: 'code'
  },
  {
    numero: '05',
    titulo: 'Testing',
    descripcion:
      'Pruebas unitarias, de integración y end-to-end. Verificar el comportamiento, no asumirlo.',
    icon: 'flask'
  },
  {
    numero: '06',
    titulo: 'Validación',
    descripcion:
      'Revisar seguridad, accesibilidad y rendimiento con criterios objetivos y medibles.',
    icon: 'shield'
  },
  {
    numero: '07',
    titulo: 'Entrega',
    descripcion:
      'Despliegue automatizado, documentación clara y acompañamiento posterior al lanzamiento.',
    icon: 'rocket'
  }
];
