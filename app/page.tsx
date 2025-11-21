import { Navbar } from "@/components/base";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rukkosoft | Desarrollo de Software, Web Apps y Soluciones Digitales",
  description:
    "Rukkosoft es un estudio de desarrollo de software liderado por Leandro González. Creamos aplicaciones web, SaaS, plataformas empresariales, UX/UI, frontend avanzado y experiencias 3D con Vue, React, Next.js y TypeScript.",
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
  authors: [{ name: "Rukkosoft | Leandro González" }],
  creator: "Rukkosoft",
  publisher: "Rukkosoft",
  robots: "index, follow",
};

export default function HomePage() {
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center">
      <span>BIENVENIDOS</span>
    </main>
    </>
  );
}
