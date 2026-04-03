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
  image: string | null;
}

export const PROJECTS: Project[] = [
  {
    id: "la-cuenta",
    name: "La Cuenta",
    tagline: "POS completo para bares y cantinas",
    type: "App Movil",
    sector: "Hospitalidad",
    status: "development",
    url: null,
    mockupsUrl: "https://prisma360solutions.com/mockups/la-cuenta/",
    stack: ["React Native", "Expo", "Supabase", "n8n"],
    image: null,
  },
  {
    id: "prisma-360",
    name: "PRISMA 360",
    tagline: "Plataforma de produccion de eventos con photobooth",
    type: "SaaS",
    sector: "Eventos",
    status: "live",
    url: "https://prisma360solutions.com",
    mockupsUrl: "https://prisma360solutions.com/mockups/prisma-360/",
    stack: ["Next.js", "React Native", "Supabase"],
    image: null,
  },
  {
    id: "sigilo",
    name: "Sigilo.mx",
    tagline: "Inteligencia politica y analisis de datos",
    type: "Plataforma",
    sector: "Gobierno",
    status: "live",
    url: "https://sigilo.mx",
    mockupsUrl: null,
    stack: ["Next.js", "Python", "PostgreSQL", "ML"],
    image: null,
  },
  {
    id: "bsr",
    name: "BSR Ferreteria",
    tagline: "E-commerce industrial con inventario en tiempo real",
    type: "App Movil + Web",
    sector: "Comercio",
    status: "development",
    url: null,
    mockupsUrl: null,
    stack: ["React Native", "Django", "PostgreSQL", "Stripe"],
    image: null,
  },
  {
    id: "munchik",
    name: "Munchik",
    tagline: "Sistema a la medida para restaurante de hot chicken",
    type: "Sistema a la medida",
    sector: "Hospitalidad",
    status: "design",
    url: null,
    mockupsUrl: null,
    stack: ["React Native", "Expo", "Supabase"],
    image: null,
  },
  {
    id: "faro",
    name: "Faro Ciudadano",
    tagline: "Transparencia civica con gamificacion",
    type: "Plataforma",
    sector: "Gobierno",
    status: "development",
    url: null,
    mockupsUrl: null,
    stack: ["Next.js", "Supabase", "Mapbox"],
    image: null,
  },
  {
    id: "cauce",
    name: "Cauce.mx",
    tagline: "Crowdfunding para proyectos de impacto",
    type: "Plataforma",
    sector: "Social",
    status: "development",
    url: null,
    mockupsUrl: null,
    stack: ["Next.js", "Supabase", "Stripe"],
    image: null,
  },
  {
    id: "sas-bot",
    name: "SAS Bot",
    tagline: "Automatizacion de auditorias y reportes",
    type: "Automatizacion",
    sector: "Gobierno",
    status: "live",
    url: null,
    mockupsUrl: null,
    stack: ["Node.js", "Playwright", "WhatsApp API"],
    image: null,
  },
];

export interface Service {
  title: string;
  description: string;
  examples: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Apps moviles",
    description:
      "iOS y Android simultaneo. POS, inventario, gestion de personal — lo que tu negocio necesite en la mano.",
    examples: ["POS para bares", "E-commerce", "Apps de campo"],
  },
  {
    title: "Sistemas web",
    description:
      "Plataformas a la medida que reemplazan Excel, WhatsApp y el cuaderno. Dashboards, reportes, automatizacion.",
    examples: ["CRM", "Gestion de proyectos", "Portales ciudadanos"],
  },
  {
    title: "Automatizacion",
    description:
      "Bots, integraciones y flujos que eliminan trabajo manual. WhatsApp, email, facturacion, reportes automaticos.",
    examples: ["Alertas de inventario", "Reportes diarios", "Facturacion"],
  },
  {
    title: "Inteligencia de datos",
    description:
      "Recoleccion, analisis y visualizacion. Desde horas pico de un bar hasta mapas de poder politico.",
    examples: ["Analytics", "Prediccion de demanda", "Mapas interactivos"],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Entender",
    description:
      "Nos sentamos con tu equipo. Entendemos como opera tu negocio, que funciona, que no, y donde duele.",
    duration: "1-2 semanas",
  },
  {
    number: "02",
    title: "Disenar",
    description:
      "Mockups interactivos de cada pantalla. Los ves, los pruebas, los ajustamos. No escribimos una linea de codigo hasta que estes convencido.",
    duration: "1-2 semanas",
  },
  {
    number: "03",
    title: "Construir",
    description:
      "Desarrollo agil con entregas semanales. Cada viernes ves avance real, no reportes. Si algo no te gusta, lo cambiamos el lunes.",
    duration: "4-8 semanas",
  },
  {
    number: "04",
    title: "Entregar",
    description:
      "Deploy, capacitacion, y soporte. Tu equipo sabe usar el sistema desde el dia uno. Nosotros seguimos disponibles.",
    duration: "1 semana",
  },
];
