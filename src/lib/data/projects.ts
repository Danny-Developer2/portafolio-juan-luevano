import type { Project } from './types';

/**
 * Proyectos seleccionados de https://github.com/Danny-Developer2
 * Descripciones verificadas contra README, estructura de archivos y manifiestos.
 * No se incluyen repositorios vacíos, duplicados ni con secretos expuestos.
 */
export const projects: Project[] = [
  {
    id: 'pyrecon',
    nombre: 'PyRecon — Reconocimiento de Red',
    descripcion:
      'Herramienta de reconocimiento de infraestructura de red en Python puro: detección de hosts activos, escaneo de puertos TCP, identificación de servicios y versiones, resolución DNS y exportación a JSON, CSV y HTML.',
    problema:
      'Necesitaba una herramienta propia de reconocimiento que no dependiera de binarios externos y que respetara el alcance autorizado y los límites de concurrencia.',
    features: [
      'Detección de hosts activos y escaneo de puertos TCP con asyncio',
      'Identificación de servicios y versiones mediante banner grabbing',
      'Resolución DNS e identificación de servicios expuestos',
      'Control de concurrencia, rate limit y exportación JSON/CSV/HTML'
    ],
    tech: ['Python', 'asyncio', 'socket', 'dnspython', 'Pydantic', 'Typer', 'Rich'],
    repo: 'https://github.com/Danny-Developer2/PyRecon',
    accent: 'mint',
    cover: { titulo: 'PyRecon', subtitulo: 'Reconocimiento de red' },
    categoria: 'Ciberseguridad',
    ano: '2026'
  },
  {
    id: 'pywebaudit',
    nombre: 'PyWebAudit — Seguridad Web',
    descripcion:
      'Auditoría de seguridad de aplicaciones web: cabeceras HTTP, cookies, HTTPS/HSTS, CORS, métodos HTTP, listado de directorios, archivos sensibles y tecnologías expuestas.',
    problema:
      'Automatizar la revisión de configuraciones inseguras en aplicaciones web sin ejecutar cargas destructivas.',
    features: [
      'Análisis de cabeceras de seguridad, cookies y políticas CORS',
      'Detección de ausencia de HTTPS, HSTS débil y redirecciones inseguras',
      'Enumeración de métodos HTTP y listado de directorios',
      'Cinco niveles de severidad con evidencia y recomendaciones'
    ],
    tech: ['Python', 'HTTPX', 'Pydantic', 'Typer', 'Rich', 'Jinja2'],
    repo: 'https://github.com/Danny-Developer2/PyWebAudit',
    accent: 'blue',
    cover: { titulo: 'PyWebAudit', subtitulo: 'Seguridad de aplicaciones web' },
    categoria: 'Ciberseguridad',
    ano: '2026'
  },
  {
    id: 'pytlsinspector',
    nombre: 'PyTLSInspector — SSL/TLS',
    descripcion:
      'Auditoría de configuración criptográfica: inspección de certificados X.509, protocolos TLS admitidos, conjuntos de cifrado, cadenas de confianza y verificación de nombre de host.',
    problema:
      'Evaluar la postura criptográfica de los servidores de forma reproducible y sin depender de herramientas externas.',
    features: [
      'Inspección de certificados: caducidad, autofirmado, firma y longitud de clave',
      'Detección de protocolos obsoletos (SSLv2/SSLv3/TLS 1.0/TLS 1.1)',
      'Enumeración de cifrados con verificación del conjunto negociado',
      'Análisis de cadenas de certificados y confianza'
    ],
    tech: ['Python', 'cryptography', 'ssl', 'Pydantic', 'Typer', 'Rich'],
    repo: 'https://github.com/Danny-Developer2/PyTLSInspector',
    accent: 'amber',
    cover: { titulo: 'PyTLSInspector', subtitulo: 'Auditoría SSL/TLS' },
    categoria: 'Ciberseguridad',
    ano: '2026'
  },
  {
    id: 'pydnsaudit',
    nombre: 'PyDNSAudit — Seguridad DNS',
    descripcion:
      'Auditoría de infraestructura DNS: enumeración de registros, evaluación de SPF, DMARC y DKIM, detección de subdominios y análisis de exposición.',
    problema:
      'Detectar errores de configuración DNS y exposición de información sin recurrir a transferencia de zona ni técnicas invasivas.',
    features: [
      'Enumeración de registros A, AAAA, MX, NS, TXT, CNAME y SOA',
      'Evaluación de SPF, DMARC y DKIM con recomendaciones',
      'Enumeración de subdominios con lista reducida de nombres habituales',
      'Detección de IP internas expuestas, entornos no productivos y DNS comodín'
    ],
    tech: ['Python', 'dnspython', 'Pydantic', 'Typer', 'Rich', 'Jinja2'],
    repo: 'https://github.com/Danny-Developer2/PyDNSAudit',
    accent: 'mint',
    cover: { titulo: 'PyDNSAudit', subtitulo: 'Seguridad DNS' },
    categoria: 'Ciberseguridad',
    ano: '2026'
  },
  {
    id: 'portafolio-angular',
    nombre: 'Portafolio Angular SSR',
    descripcion:
      'Portafolio personal construido con Angular 18 y renderizado del lado del servidor (SSR) mediante Angular Universal y Express. Incluye panel de administración protegido por control de acceso basado en roles.',
    problema:
      'Necesitaba un portafolio con SEO real (SSR), panel de administración propio y una arquitectura de rutas escalable.',
    features: [
      'Renderizado SSR con Angular Universal + Express',
      'Panel de administración con RoleGuard y rutas protegidas',
      'Secciones: inicio, sobre mí, proyectos, ciberseguridad y contacto',
      'Servicios desacoplados y enrutado lazy por sección'
    ],
    tech: ['Angular 18', 'TypeScript', 'Angular SSR', 'Express', 'Bootstrap 5'],
    repo: 'https://github.com/Danny-Developer2/Portafolio-Angular',
    accent: 'blue',
    cover: { titulo: 'Portafolio SSR', subtitulo: 'Angular 18 + Express' },
    categoria: 'Frontend',
    ano: '2024'
  },
  {
    id: 'portafolio3',
    nombre: 'Landing Next.js + Tailwind',
    descripcion:
      'Landing personal con Next.js 14, Tailwind CSS y animaciones con Framer Motion: partículas, transiciones, sliders y contadores animados.',
    problema:
      'Crear una landing moderna, con animaciones ricas y alto rendimiento, lista para desplegar en Netlify.',
    features: [
      'Animaciones con Framer Motion y partículas (tsParticles)',
      'Diseño con Tailwind CSS y tipografía optimizada (next/font)',
      'Secciones: inicio, proyectos, servicios, sobre mí y contacto',
      'Despliegue en Netlify con redirecciones SPA'
    ],
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    repo: 'https://github.com/Danny-Developer2/Portafolio3',
    accent: 'mint',
    cover: { titulo: 'Landing Next.js', subtitulo: 'React 18 + Tailwind' },
    categoria: 'Frontend',
    ano: '2024'
  },
  {
    id: 'backend-user-intermedio',
    nombre: 'API de Usuarios — Arquitectura en Capas',
    descripcion:
      'API REST en ASP.NET Core con arquitectura en capas: controladores, servicios, repositorios, Unit of Work, DTOs y AutoMapper. Autenticación JWT, validación con FluentValidation, caché en memoria y Swagger.',
    problema:
      'Eliminar la duplicación de lógica y la falta de separación de responsabilidades en APIs de gestión de usuarios, tickets y productos.',
    features: [
      'Arquitectura en capas con Unit of Work y Repository Pattern',
      'Autenticación JWT y control de roles',
      'FluentValidation + AutoMapper + documentación Swagger',
      'Cifrado de datos y gestión de sesiones con caché en memoria',
      'Contenedor Docker para despliegue'
    ],
    tech: [
      'ASP.NET Core',
      'C#',
      'Entity Framework Core',
      'SQLite',
      'JWT',
      'AutoMapper',
      'FluentValidation',
      'Swagger',
      'Docker'
    ],
    repo: 'https://github.com/Danny-Developer2/Backend-User-Intermedio',
    accent: 'amber',
    cover: { titulo: 'API en capas', subtitulo: 'ASP.NET Core + EF Core' },
    categoria: 'Backend',
    ano: '2025'
  },
  {
    id: 'prueba-casoftt',
    nombre: 'API de Catálogo — Vehículos y Marcas',
    descripcion:
      'API de catálogo (vehículos, marcas y fotos) en ASP.NET Core con paginación, ordenamiento, filtrado y carga de imágenes, consumida por un frontend en Angular.',
    problema:
      'Gestionar un catálogo con relaciones entre vehículos, marcas y fotos, y servir datos paginados y filtrados al frontend.',
    features: [
      'CRUD de vehículos, marcas y fotos con Entity Framework Core',
      'Paginación, ordenamiento y filtrado con cabeceras de paginación',
      'Repository Pattern + Unit of Work + AutoMapper',
      'Documentación Swagger y cliente Angular'
    ],
    tech: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQLite', 'AutoMapper', 'Swagger', 'Angular'],
    repo: 'https://github.com/Danny-Developer2/Prueba_T_Casoftt',
    accent: 'blue',
    cover: { titulo: 'Catálogo API', subtitulo: 'ASP.NET Core + Angular' },
    categoria: 'Backend',
    ano: '2024'
  },
  {
    id: 'backend-flask',
    nombre: 'API Flask con Autenticación JWT',
    descripcion:
      'API y aplicación web en Flask con arquitectura MVC: modelos SQLAlchemy, migraciones con Alembic, autenticación JWT por cookies con protección CSRF y documentación Swagger.',
    problema:
      'Levantar una API con persistencia real, migraciones versionadas y autenticación segura en el ecosistema Python.',
    features: [
      'Arquitectura MVC con blueprints y servicios',
      'SQLAlchemy + migraciones Alembic',
      'JWT en cookies con protección CSRF',
      'Swagger UI y plantillas HTML'
    ],
    tech: ['Python', 'Flask', 'SQLAlchemy', 'Alembic', 'JWT', 'Swagger', 'SQL Server'],
    repo: 'https://github.com/Danny-Developer2/Backend-Flask',
    accent: 'mint',
    cover: { titulo: 'API Flask', subtitulo: 'Python + SQLAlchemy' },
    categoria: 'Backend',
    ano: '2025'
  },
  {
    id: 'ldevs-react',
    nombre: 'Plataforma Ldevs — React',
    descripcion:
      'Aplicación web en React con autenticación, panel administrativo, rutas privadas y formularios de contacto. Incluye sección de ciberseguridad y consumo de APIs con Axios.',
    problema:
      'Construir una plataforma con áreas pública y privada, autenticación, gestión de contenido y contacto.',
    features: [
      'Autenticación con rutas privadas y protección por rol',
      'Dashboard administrativo y servicios por módulo',
      'Formularios de contacto conectados a una API',
      'Manejo centralizado de errores y notificaciones'
    ],
    tech: ['React 18', 'JavaScript', 'React Router 7', 'Axios', 'Bootstrap 5'],
    repo: 'https://github.com/Danny-Developer2/Ldevs-React',
    accent: 'amber',
    cover: { titulo: 'Plataforma Ldevs', subtitulo: 'React 18 + Router' },
    categoria: 'Frontend',
    ano: '2024'
  },
  {
    id: 'scripts',
    nombre: 'Automatización con Python',
    descripcion:
      'Conjunto de scripts de automatización en Python: extracción estructurada de datos de documentos PDF con PyMuPDF y expresiones regulares, y un generador de proyectos .NET con estructura, dependencias y configuración predefinidas.',
    problema:
      'Eliminar tareas manuales repetitivas: leer datos de documentos PDF y crear la estructura base de proyectos .NET.',
    features: [
      'Extracción de datos de PDF con PyMuPDF y expresiones regulares',
      'Generador de proyectos .NET (estructura, dependencias y configuración)',
      'Automatización de procesos internos'
    ],
    tech: ['Python', 'PyMuPDF', 'Expresiones regulares', '.NET CLI'],
    repo: 'https://github.com/Danny-Developer2/Scripts',
    accent: 'blue',
    cover: { titulo: 'Automatización', subtitulo: 'Python + PyMuPDF' },
    categoria: 'Automatización',
    ano: '2025'
  }
];
