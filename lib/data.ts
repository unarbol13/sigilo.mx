export type ProjectStatus = "live" | "development" | "design";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  type: string;
  sector: string;
  status: ProjectStatus;
  url: string | null;
  mockupsUrl: string | null;
  stack: string[];
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
    url: "https://prisma360solutions.com",
    mockupsUrl: "https://prisma360solutions.com/mockups/prisma-360/",
    stack: ["Next.js", "React Native", "Supabase"],
  },
  {
    id: "sigilo",
    name: "Sigilo.mx",
    tagline:
      "Sistema de inteligencia política y análisis de datos. Procesamiento de información pública, monitoreo de actores y generación de reportes estratégicos.",
    type: "Plataforma",
    sector: "Gobierno",
    status: "live",
    url: "https://sigilo.mx/landing",
    mockupsUrl: null,
    stack: ["Next.js", "Python", "PostgreSQL", "ML"],
  },
  {
    id: "faro",
    name: "Faro Ciudadano",
    tagline:
      "Plataforma de transparencia ciudadana con mecánicas de gamificación social. Auditorías participativas, visualización de datos municipales y rendición de cuentas.",
    type: "Civic Tech",
    sector: "Gobierno",
    status: "development",
    url: null,
    mockupsUrl: null,
    stack: ["Next.js", "Supabase", "Mapbox"],
  },
  {
    id: "aurora",
    name: "Aurora",
    tagline:
      "Plataforma de acompañamiento terapéutico y civic tech enfocada en infancias víctimas de orfandad por violencia o desaparición forzada.",
    type: "Impacto social",
    sector: "Social",
    status: "development",
    url: null,
    mockupsUrl: null,
    stack: ["Next.js", "Supabase", "IA"],
  },
  {
    id: "sas-bot",
    name: "SAS Bot",
    tagline:
      "Motor de automatización para procesos de auditoría. Extracción, validación y cruce de información de fuentes públicas.",
    type: "Automatización",
    sector: "Gobierno",
    status: "live",
    url: null,
    mockupsUrl: null,
    stack: ["Node.js", "Playwright", "WhatsApp API"],
  },
  {
    id: "cauce",
    name: "Cauce.mx",
    tagline:
      "Plataforma de financiamiento colectivo. Creación de campañas, procesamiento de aportaciones y seguimiento de objetivos.",
    type: "Plataforma",
    sector: "Social",
    status: "development",
    url: null,
    mockupsUrl: null,
    stack: ["Next.js", "Supabase", "Stripe"],
  },
  {
    id: "bsr",
    name: "BSR Ferretería",
    tagline:
      "App móvil para ferretería industrial. Catálogo híbrido con PDF por marca y búsqueda por código, escáner de código de barras.",
    type: "App Móvil",
    sector: "Comercio",
    status: "development",
    url: null,
    mockupsUrl: null,
    stack: ["React Native", "Django", "PostgreSQL"],
  },
  {
    id: "la-cuenta",
    name: "La Cuenta",
    tagline:
      "App móvil POS para gestión integral de bares y cantinas. Comandas en tiempo real, inventario con recetas, control de personal.",
    type: "App Móvil",
    sector: "Hospitalidad",
    status: "development",
    url: null,
    mockupsUrl: "https://prisma360solutions.com/mockups/la-cuenta/",
    stack: ["React Native", "Expo", "Supabase"],
  },
  {
    id: "prisma-rediseno",
    name: "PRISMA 360 — Rediseño Modular",
    tagline:
      "Rediseño completo de PRISMA 360 en 3 módulos: Photobooth, Video Studio, Planner CRM. 29 pantallas, ~64 phone frames.",
    type: "UX/UI Design",
    sector: "Eventos",
    status: "design",
    url: null,
    mockupsUrl: null,
    stack: ["Figma", "Design System"],
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
    client: "Bares y cantinas",
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
