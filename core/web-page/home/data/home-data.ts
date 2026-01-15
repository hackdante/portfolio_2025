import { HomeSeoTagsUI, WebPageDataUI } from "./interface";

export const HOME_DATA: WebPageDataUI = {
  metadata: {
    title: "KENSAI | Desarrollo de Software, Web Apps y Soluciones Digitales",
    description:
      "KENSAI es un estudio de desarrollo de software liderado por Leandro González. Creamos aplicaciones web, SaaS, plataformas empresariales, UX/UI, frontend avanzado y experiencias 3D con Vue, React, Next.js y TypeScript.",
    keywords: [
      "desarrollo de software", "software a medida", "web apps", "SaaS",
      "UX/UI", "desarrollo web", "frontend", "backend", "Vue 3", "React",
      "Next.js", "TypeScript", "sistemas empresariales", "arquitectura de software",
      "experiencias 3D", "Three.js", "GSAP", "telemedicina", "ERP", "productos digitales",
    ],
    authors: [{ name: "KENSAI | Leandro González" }],
    creator: "KENSAI",
    publisher: "KENSAI",
    robots: "index, follow",
  },
  hero: {
    title: "KENSAI",
    subtitle: "Digital Architect & Creative Engineer",
    tagline: "Sistemas escalables con diseño de vanguardia y precisión técnica.",
    primaryAction: "Ver Proyectos",
    secondaryAction: "Core Platform"
  }
};

export const HOME_SEO_TAGS: HomeSeoTagsUI = {
  metadataBase: new URL("https://kensai.engineering"),
  title: "Kensai Experience | High-Fidelity Software Engineering",
  description: "Ecosistema digital inmersivo desarrollado con Next.js 16, React 19 y Three.js. Soluciones de software de alta fidelidad y experiencias 3D avanzadas.",
  keywords: [
    "Software Architecture",
    "Next.js 16",
    "React 19",
    "Three.js",
    "GSAP",
    "Creative Development",
    "Kensai"
  ],
  authors: [{ name: "Kensai", url: "https://kensai.engineering" }],
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },
  openGraph: {
    title: "Kensai Experience",
    description: "Ingeniería de software y experiencias web inmersivas.",
    url: "https://kensai.engineering",
    siteName: "Kensai Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Kensai Experience Preview"
      }
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kensai Experience",
    description: "High-Fidelity Digital Ecosystem",
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

