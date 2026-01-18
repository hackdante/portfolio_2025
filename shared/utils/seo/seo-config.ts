import { GeneralSeoType, OpenGraphType } from "./interface";

/**
 * Global SEO Constants
 * @description Values used as fallback and base for all application routes.
 */
const SITE_NAME: string = "KENSAI";
const DEFAULT_TITLE: string = "KENSAI - Experiencia Web 3D Inmersiva";
const SITE_URL: string = "https://kensai.solutions";

/**
 * Base OpenGraph configuration
 */
export const OPEN_GRAPH_BASE: OpenGraphType = {
  type: "website",
  locale: "es_ES",
  url: SITE_URL,
  siteName: SITE_NAME,
  images: [
    {
      url: `${SITE_URL}/og-image.jpg`, 
      width: 1200,
      height: 630,
      alt: "KENSAI - Desarrollo de Software y Experiencias 3D",
    },
  ],
};

export const GENERAL_SEO_TAGS: GeneralSeoType = {
  siteName: SITE_NAME,
  defaultTitle: DEFAULT_TITLE,
  titleTemplate: `%s | ${SITE_NAME}`,
  description: "Portafolio interactivo 3D liderado por Leandro González. Soluciones inmersivas de software, UX/UI avanzado y desarrollo web moderno.",
  applicationName: SITE_NAME,
  authors: [{ name: "Leandro González", url: SITE_URL }],
  generator: "Next.js 16",
  keywords: ["3D Web", "Three.js", "Next.js 16", "React 19", "Software Development", "B2B Solutions"],
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
    description: "Explora el futuro del desarrollo web con KENSAI.",
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