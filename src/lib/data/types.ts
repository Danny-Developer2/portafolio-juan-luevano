/** Tipos del contenido del portafolio. */

export interface SocialLink {
  label: string;
  url: string;
  icon: IconName;
}

export interface Stat {
  valor: string;
  etiqueta: string;
}

export interface Profile {
  nombreCompleto: string;
  nombreCorto: string;
  titulo: string;
  tituloCorto: string;
  ubicacion: string;
  email: string;
  resumen: string;
  propuestaValor: string;
  disponible: boolean;
  social: SocialLink[];
  stats: Stat[];
}

export type ProjectAccent = 'mint' | 'blue' | 'amber';

export interface Project {
  id: string;
  nombre: string;
  descripcion: string;
  problema: string;
  features: string[];
  tech: string[];
  repo: string;
  demo?: string;
  accent: ProjectAccent;
  cover: { titulo: string; subtitulo: string };
  categoria: string;
  ano: string;
}

export interface SkillGroup {
  titulo: string;
  icon: IconName;
  items: string[];
}

export interface ExperienceItem {
  rol: string;
  empresa: string;
  periodo: string;
  ubicacion: string;
  descripcion: string;
  logros: string[];
  tech: string[];
}

export interface EducationItem {
  titulo: string;
  institucion: string;
  periodo: string;
  detalle?: string;
  tipo: 'grado' | 'certificacion' | 'diplomado';
}

export interface ProcessStep {
  numero: string;
  titulo: string;
  descripcion: string;
  icon: IconName;
}

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'external'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'arrow-down'
  | 'menu'
  | 'close'
  | 'shield'
  | 'code'
  | 'terminal'
  | 'database'
  | 'server'
  | 'cloud'
  | 'wrench'
  | 'brain'
  | 'map-pin'
  | 'send'
  | 'check'
  | 'alert'
  | 'spinner'
  | 'chevron-down'
  | 'layers'
  | 'lock'
  | 'bug'
  | 'flask'
  | 'rocket'
  | 'search'
  | 'git-branch'
  | 'cpu'
  | 'globe'
  | 'folder'
  | 'file-code'
  | 'zap'
  | 'eye'
  | 'award'
  | 'book'
  | 'briefcase'
  | 'graduation-cap'
  | 'download'
  | 'copy'
  | 'star'
  | 'sparkles'
  | 'fingerprint'
  | 'scan'
  | 'refresh'
  | 'users'
  | 'gauge'
  | 'layout'
  | 'shield-check'
  | 'package';
