import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",       
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

