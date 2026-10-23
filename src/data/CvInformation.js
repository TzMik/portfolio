// ============================================================
//  Datos del CV (DUMMY) — edita libremente estos arrays.
//  Se renderizan en src/pages/about/index.astro
// ============================================================

/**
 * Experiencia profesional.
 * Orden recomendado: del más reciente al más antiguo.
 * @typedef {Object} ExperienceItem
 * @property {string}   role        Cargo
 * @property {string}   company     Empresa
 * @property {string}   location    Ubicación / modalidad (ej: "Remoto")
 * @property {string}   start       Año o fecha de inicio (ej: "2022")
 * @property {string}   [end]       Año o fecha de fin (omitir si es el actual)
 * @property {boolean}  [current]   true para el puesto actual (resalta el punto)
 * @property {string}   description Descripción breve
 * @property {string[]} [stack]     Tecnologías destacadas
 */
export const experience = [
  {
    role: "Lead Developer",
    company: "Super Organics (Florida, USA)",
    location: "Remoto",
    start: "Abr 2026",
    current: true,
    description:
      "Desarrollo de soluciones de software a medida para agilizar la operación. Desarrollo de un CRM y un ERP a medida. Comunicación 100% en inglés.",
    stack: ["PHP", "Laravel", "MySQL", "Docker", "Cloudways", "Hermes", "Claude Code", "ERPNext", "Vue.js", "Python", "Next.js", "GitHub Actions", "React Native", "Slack", "Monday.com"],
  },
  {
    role: "Software Engineer",
    company: "Freelance",
    location: "Remoto",
    start: "Sep 2025",
    current: true,
    description:
      "Desarrollo a medida y asesoría técnica para PyMES. Diseño de soluciones digitales para resolvar problemas concretos. Clientes destacados: Avipecuaria Específica, Vaporza, Grupo Cise.",
    stack: ["Asesoría", "Liderazgo", "Ventas", "Atro.js", "Next.js", "Supabase", "PHP", "Laravel", "Google Cloud Platform", "AWS", "Docker", "Python", "Hostinger", "Vercel", "MariaDB", "PostgreSQL", "TailwindCSS"],
  },
  {
    role: "Co-founder & CTO",
    company: "Fonsecantero (Guadalajara, Jalisco, México)",
    location: "Remoto",
    start: "Abr 2023",
    end: "Sep 2025",
    description:
      "Holding empresarila de soluciones de software, donde destacó el desarrollo de software a medida para clientes y el desarrollo de soluciones propias (SaaS).",
    stack: ["Gestión de proyectos", "Levantamiento de requerimientos", "Liderazgo", "Dirección", "Ventas", "Atención a clientes", "PHP", "Laravel", "MariaDB", "JavaScript", "MySQL", "TikTok Shop", "Stripe", "PayPal", "Mercado Pago", "Flask", "CSS", "Google Cloud Platform"],
  },
  {
    role: "Junior Backend Developer / Full-stack Developer / Tech Lead",
    company: "Fidanto (Zapopan, Jalisco, México)",
    location: "Híbrido",
    start: "Sep 2019",
    end: "May 2023",
    description:
      "Rastreador de ofertas de empleo que operaba en más de 50 países y que llegó a tener más de 20 millones de ofertas de empleo.",
    stack: ["Liderazgo", "PHP", "MariaDB", "JavaScript", "CSS", "Google Cloud Platform", "BootstrapCSS", "Servidores LAMPP", "Sphinx Search Engine", "XML"],
  },
  {
    role: "Intern",
    company: "Xagu Studios (Donostia - San Sebastián, Guipúzcoa, España)",
    location: "Presencial",
    start: "Oct 2018",
    end: "Dic 2018",
    description:
      "Videojuego para dispositivos móviles (iOS y Android) de tipo Manager desarrollado con Unity.",
    stack: ["Unity", "C#", "SQL Server", "Visual Basic"],
  },
];

/**
 * Formación académica y certificaciones.
 * @typedef {Object} EducationItem
 * @property {string} degree      Título o certificación
 * @property {string} school      Centro / institución
 * @property {string} [location]  Ubicación
 * @property {string} start       Año de inicio
 * @property {string} [end]       Año de fin
 * @property {string} [description] Detalle opcional
 */
export const education = [
  {
    degree: "MBA",
    school: "GADE Business School",
    location: "Remoto (España)",
    start: "Ene 2019",
    end: "Dic 2019",
    description: "Máster en Dirección y Administración de empresas.",
  },
  {
    degree: "Grado en Ingeniería Informática",
    school: "Universidad Pública del País Vasco (EHU)",
    location: "Donstia - San Sebastián, Guipúzcoa, España",
    start: "Sep 2014",
    end: "Jul 2019",
  },
];

/**
 * Idiomas. `percent` es el nivel estimado (0-100) para la barra.
 * @typedef {Object} LanguageItem
 * @property {string} name    Idioma
 * @property {string} level   Nivel mostrado (ej: "Nativo", "C1 · Avanzado")
 * @property {number} percent 0-100
 */
export const languages = [
  { name: "Español", level: "Nativo", percent: 100 },
  { name: "Euskera", level: "C1 · Avanzado", percent: 85 },
  { name: "English", level: "B2 · Intermedio", percent: 65 },
];

/**
 * Tecnologías / habilidades agrupadas por categoría.
 * @typedef {Object} SkillGroup
 * @property {string}   category Nombre del grupo
 * @property {string}   icon     Icono Font Awesome (ej: "fas fa-server")
 * @property {string[]} items    Lista de tecnologías
 */
export const skills = [
  {
    category: "Backend",
    icon: "fas fa-server",
    items: ["PHP", "Laravel", "Python", "Flask", "Node.js", "Express.js"],
  },
  {
    category: "Frontend",
    icon: "fas fa-laptop-code",
    items: ["JavaScript", "TypeScript", "Vue.js", "React", "Astro", "Blade", "Livewire", "Inertia.js", "React Native"],
  },
  {
    category: "Bases de datos",
    icon: "fas fa-database",
    items: ["MySQL", "MariaDB", "PostgreSQL", "Redis", "SQL Server"],
  },
  {
    category: "DevOps & Cloud",
    icon: "fas fa-cloud",
    items: ["Docker", "AWS", "GCP", "Git", "GitHub Actions", "Apache", "LAMPP", "Sphinx Search Engine"],
  },
  {
    category: "Otros",
    icon: "fas fa-puzzle-piece",
    items: ["Liderazgo tecnológico", "Levantamiento de requerimientos técnicos", "Gestión de proyectos", "Asesoría tecnológica", "Trabajo en equipo"],
  },
];
