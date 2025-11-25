import { Counter } from "@/components/base";
import { Metadata } from "next";

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


export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Proyectos subidos</span>
      <Counter />
    
    </div>
  );
}
