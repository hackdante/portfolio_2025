import { GeneralSeoUI, OpenGraphUI } from "./interface";

const SITE_NAME: string = "KENSAI";
const DEFAULT_TITLE: string = "KENSAI - Experiencia Web 3D Inmersiva";
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
      alt: "KENSAI - Desarrollo de Software y Experiencias 3D",
    },
  ],
};

export const GENERAL_SEO_TAGS: GeneralSeoUI = {
  siteName: SITE_NAME,
  defaultTitle: DEFAULT_TITLE,
  titleTemplate: `%s | ${SITE_NAME}`,
  description:
    "Portafolio interactivo 3D liderado por Leandro González. Soluciones inmersivas de software y UX/UI avanzado.",
  applicationName: SITE_NAME,
  authors: [{ name: "Leandro González", url: SITE_URL }],
  openGraph: {
    ...OPEN_GRAPH_BASE,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    images: [`${SITE_URL}/og-image.jpg`],
  },
};
