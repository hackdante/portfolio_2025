import { HomeSeoTagsUI, WebPageDataUI } from "./interface";

export const HOME_DATA: WebPageDataUI = {
  metadata: {
    title: "KENSAI | Desarrollo de Software, Web Apps y Soluciones Digitales",
    description:
      "KENSAI es un estudio de desarrollo de software liderado por Leandro González. Creamos aplicaciones web, SaaS, plataformas empresariales, UX/UI, frontend avanzado y experiencias 3D con Vue, React, Next.js y TypeScript.",
    keywords: [
      "desarrollo de software",
      "software a medida",
      "web apps",
      "SaaS",
      "UX/UI",
      "desarrollo web",
      "frontend",
      "backend",
      "Vue 3",
      "React",
      "Next.js",
      "TypeScript",
      "sistemas empresariales",
      "arquitectura de software",
      "experiencias 3D",
      "Three.js",
      "GSAP",
      "telemedicina",
      "ERP",
      "productos digitales",
    ],
    authors: [{ name: "KENSAI | Leandro González" }],
    creator: "KENSAI",
    publisher: "KENSAI",
    robots: "index, follow",
  },
  hero: {
    title: "KENSAI",
    subtitle: "Digital Architect & Creative Engineer",
    tagline:
      "Sistemas escalables con diseño de vanguardia y precisión técnica.",
    primaryAction: "Ver Proyectos",
    secondaryAction: "Core Platform",
  },
};

export const HOME_SEO_TAGS: HomeSeoTagsUI = {
  metadataBase: new URL("https://kensai.solutions"),
  title: "KENSAI | Rentabilidad Interactiva para Mobiliario y Remodelación",
  description:
    "Soluciones de Spatial Computing para acelerar ventas en el sector mobiliario. Configuradores 3D de alta fidelidad y visualización AR sin fricción técnica.",
  keywords: [
    "Visualización 3D Mobiliario",
    "Realidad Aumentada para Ventas",
    "Configurador de Cocinas Integrales",
    "Cierre de Ventas High-Ticket",
    "Spatial Web Solutions",
    "Kensai Engineering",
    "Software de Ventas Interactivo",
  ],
  authors: [{ name: "Kensai", url: "https://kensai.solutions" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
  openGraph: {
    title: "KENSAI: Tecnología que Cierra Ventas de Mobiliario",
    description: "Elimina la duda del comprador con visualización 3D en tiempo real. Implementación en 10 días para fabricantes de cocinas y mobiliario.",
    url: "https://kensai.solutions",
    siteName: "Kensai Interactive Studio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Demo de Configurador 3D KENSAI para Mobiliario",
      },
    ],
    locale: "es_CO", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kensai | Rentabilidad mediante 3D",
    description: "Aceleramos tu ciclo de venta con Spatial Web de alto impacto.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};