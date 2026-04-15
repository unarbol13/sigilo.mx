export type ProjectStatus = "live" | "development" | "design" | "concept" | "sold";
export type ProjectFocus = "civictech" | "business";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: string;
  sector: string;
  status: ProjectStatus;
  focus: ProjectFocus;
  url: string | null;
  mockupsUrl: string | null;
  stack: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "prisma-360",
    name: "PRISMA 360",
    tagline:
      "Plataforma integral para profesionales y proveedores de eventos. Photobooth con efectos de video, gestión de eventos, directorio de proveedores y catálogo de servicios.",
    type: "SaaS",
    sector: "Eventos",
    status: "live",
    focus: "business",
    url: "https://prisma360solutions.com",
    mockupsUrl: "https://prisma360solutions.com/mockups/prisma-360/",
    stack: ["Next.js", "React Native", "Supabase"],
    highlights: ["Photobooth con efectos en tiempo real", "App iOS y Android nativa", "Directorio de proveedores con búsqueda"],
  },
  {
    id: "faro",
    name: "Faro Ciudadano",
    tagline:
      "Plataforma de transparencia ciudadana con mecánicas de gamificación social. Auditorías participativas, visualización de datos municipales y rendición de cuentas.",
    type: "Civic Tech",
    sector: "Gobierno",
    status: "concept",
    focus: "civictech",
    url: "https://municipios.prisma360solutions.com",
    mockupsUrl: null,
    stack: ["Next.js", "Supabase", "Mapbox"],
    highlights: ["Gamificación ciudadana", "Auditorías participativas", "Mapas interactivos"],
  },
  {
    id: "lumos",
    name: "Lumos",
    tagline:
      "App de acompañamiento psicosocial para las familias de personas desaparecidas en México. Dirección clínica de tanatóloga titulada bajo el marco de pérdida ambigua de Pauline Boss.",
    type: "Impacto social",
    sector: "Social",
    status: "development",
    focus: "civictech",
    url: "https://sigilo.mx/lumos/",
    mockupsUrl: null,
    stack: ["Next.js", "Supabase"],
    highlights: ["Contenido clínico curado por DCC", "Diferenciado para infancias y adolescencias", "Arquitectura ética con separación de datos"],
  },
  {
    id: "aurora",
    name: "Aurora",
    tagline:
      "App para colectivas de búsqueda de personas desaparecidas en México. Mapas offline, documentación de hallazgos y coordinación de brigadas, con capa de acompañamiento clínico para buscadoras. Proyecto hermano de Lumos, técnicamente independiente.",
    type: "Impacto social",
    sector: "Social",
    status: "concept",
    focus: "civictech",
    url: null,
    mockupsUrl: null,
    stack: ["Next.js", "Supabase"],
    highlights: ["Mapas offline para campo", "Cifrado y camuflaje por defecto", "Aislamiento total entre colectivas"],
  },
  {
    id: "sas-bot",
    name: "SAS Bot",
    tagline:
      "Motor de automatización para procesos de auditoría. Extracción, validación y cruce de información de fuentes públicas.",
    type: "Automatización",
    sector: "Gobierno",
    status: "live",
    focus: "civictech",
    url: null,
    mockupsUrl: null,
    stack: ["Node.js", "Playwright", "WhatsApp API"],
    highlights: ["Scraping automatizado de fuentes públicas", "Alertas vía WhatsApp", "Cruce de datos multi-fuente"],
  },
  {
    id: "cauce",
    name: "Cauce.mx",
    tagline:
      "Plataforma de financiamiento colectivo. Creación de campañas, procesamiento de aportaciones y seguimiento de objetivos.",
    type: "Plataforma",
    sector: "Social",
    status: "development",
    focus: "civictech",
    url: "https://cauce-mx.vercel.app",
    mockupsUrl: null,
    stack: ["Next.js", "Supabase", "Stripe"],
    highlights: ["Pagos con Stripe", "Seguimiento de metas en tiempo real"],
  },
  {
    id: "bsr",
    name: "BSR Ferretería",
    tagline:
      "App móvil para ferretería industrial. Catálogo híbrido con PDF por marca y búsqueda por código, escáner de código de barras.",
    type: "App Móvil",
    sector: "Comercio",
    status: "development",
    focus: "business",
    url: null,
    mockupsUrl: null,
    stack: ["React Native", "Django", "PostgreSQL"],
    highlights: ["Escáner de código de barras", "Catálogo PDF por marca", "Búsqueda por código de parte"],
  },
  {
    id: "la-cuenta",
    name: "La Cuenta",
    tagline:
      "App móvil POS para gestión integral de bares y cantinas. Comandas en tiempo real, inventario con recetas, control de personal.",
    type: "App Móvil",
    sector: "Hospitalidad",
    status: "sold",
    focus: "business",
    url: null,
    mockupsUrl: "https://prisma360solutions.com/mockups/la-cuenta/",
    stack: ["React Native", "Expo", "Supabase"],
    highlights: ["Comandas en tiempo real", "Inventario con recetas y merma", "Control de turnos y propinas"],
  },
  {
    id: "prisma-rediseno",
    name: "PRISMA 360 — Rediseño Modular",
    tagline:
      "Rediseño completo de PRISMA 360 en 3 módulos: Photobooth, Video Studio, Planner CRM. 29 pantallas, ~64 phone frames.",
    type: "UX/UI Design",
    sector: "Eventos",
    status: "design",
    focus: "business",
    url: null,
    mockupsUrl: "https://prisma360solutions.com/mockups/prisma-360/",
    stack: ["Figma", "Design System"],
    highlights: ["29 pantallas diseñadas", "3 módulos independientes", "Design system propio"],
  },
  {
    id: "flotapro",
    name: "FlotaPro",
    tagline:
      "Sistema de gestión de llantas y flotillas. Ventas, cotizaciones, inventario y control operativo.",
    type: "Sistema de gestión",
    sector: "Automotriz",
    focus: "business",
    status: "sold",
    url: null,
    mockupsUrl: "https://sigilo.mx/propuesta/publica",
    stack: ["Next.js", "Supabase", "React Native"],
    highlights: ["8 módulos de gestión", "Control de flotillas", "Cotizador integrado"],
  },
];

export interface CaseStudy {
  id: string;
  sector: string;
  client: string;
  description: string;
  modules: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "automotriz",
    sector: "Sector automotriz",
    client: "Llantas y flotillas",
    description:
      "Sistema de gestión integral — ventas, inventario y operación.",
    modules: "8 módulos · 11 usuarios · 4 fases",
  },
  {
    id: "restaurantero",
    sector: "Sector restaurantero",
    client: "Bares y restaurantes",
    description: "La Cuenta — POS y gestión integral para bares.",
    modules: "Comandas · Inventario · Personal",
  },
  {
    id: "ferretero",
    sector: "Sector ferretero",
    client: "Mantenimiento y distribución",
    description: "BSR Ferretería — App de catálogo y gestión comercial.",
    modules: "Catálogo · Escáner · Pedidos",
  },
];

export interface Service {
  title: string;
  description: string;
  examples: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Software a la medida",
    description:
      "Aplicaciones web y móviles diseñadas desde cero para resolver problemas específicos de tu operación.",
    examples: ["Apps móviles", "Plataformas web", "Sistemas internos"],
  },
  {
    title: "CRM & sistemas de gestión",
    description:
      "Herramientas personalizadas para controlar clientes, ventas, servicios y seguimiento.",
    examples: ["CRM", "ERP", "Control de inventario"],
  },
  {
    title: "Inteligencia de datos",
    description:
      "Recolección, procesamiento y visualización de datos para la toma de decisiones.",
    examples: ["Analytics", "Dashboards", "Reportes automáticos"],
  },
  {
    title: "Automatización de procesos",
    description:
      "Bots, integraciones y flujos automatizados que eliminan trabajo manual repetitivo.",
    examples: ["WhatsApp bots", "Facturación", "Alertas"],
  },
  {
    title: "Civic Tech & impacto social",
    description:
      "Plataformas de participación ciudadana, transparencia y rendición de cuentas.",
    examples: ["Portales ciudadanos", "Open data", "Auditorías"],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Entender",
    description:
      "Nos sentamos con tu equipo. Entendemos cómo opera tu negocio, qué funciona, qué no, y dónde duele.",
    duration: "1-2 semanas",
  },
  {
    number: "02",
    title: "Diseñar",
    description:
      "Mockups interactivos de cada pantalla. Los ves, los pruebas, los ajustamos. No escribimos una línea de código hasta que estés convencido.",
    duration: "1-2 semanas",
  },
  {
    number: "03",
    title: "Construir",
    description:
      "Desarrollo ágil con entregas semanales. Cada viernes ves avance real, no reportes. Si algo no te gusta, lo cambiamos el lunes.",
    duration: "4-8 semanas",
  },
  {
    number: "04",
    title: "Entregar",
    description:
      "Deploy, capacitación y soporte. Tu equipo sabe usar el sistema desde el día uno. Nosotros seguimos disponibles.",
    duration: "1 semana",
  },
];
