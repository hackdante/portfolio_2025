import { GeneralSeoUI, OpenGraphUI } from "./interface";

const SITE_NAME: string = "KENSAI";

const DEFAULT_TITLE: string = "KENSAI | Spatial Computing para Ventas y Onboarding B2B";
const SITE_URL: string = "https://kensai.solutions";

export const OPEN_GRAPH_BASE: OpenGraphUI = {
  type: "website",
  locale: "es_ES",
  url: SITE_URL,
  siteName: SITE_NAME,
  images: [
    {
      url: `${SITE_URL}/og-image.jpg`, 
      width: 1200,
      height: 630,
      alt: "KENSAI - Experiencias Inmersivas 3D para Negocios",
    },
  ],
};

export const GENERAL_SEO_TAGS: GeneralSeoUI = {
  siteName: SITE_NAME,
  defaultTitle: DEFAULT_TITLE,
  titleTemplate: `%s | ${SITE_NAME}`,

  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: "Aceleramos sus ventas y procesos de capacitación con Spatial Computing. Soluciones de visualización 3D para preventa inmobiliaria y entrenamiento industrial interactivo sin fricción.",
  applicationName: SITE_NAME,
  authors: [{ name: "Leandro González", url: SITE_URL }],
  generator: "Next.js 16",

  keywords: [
    "Spatial Computing B2B",
    "Apartamento Modelo 3D", 
    "Capacitación Industrial Interactiva",
    "Visualización 3D Inmobiliaria",
    "Onboarding Digital Industrial",
    "Web 3D para Ventas",
    "Realidad Aumentada Web",
    "Simuladores de Maquinaria 3D"
  ],
  referrer: "origin-when-cross-origin",
  creator: "KENSAI",
  publisher: "KENSAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    ...OPEN_GRAPH_BASE,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: "Reduzca costos operativos y venda más rápido con el poder del Spatial Computing.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};