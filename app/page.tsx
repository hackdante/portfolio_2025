import Link from "next/link";

import type { Metadata } from "next";
import { redirect } from "next/navigation";

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

export default function HomePage() {
  redirect('/dashboard/inicio')
  return (
    <>
      <main className="flex flex-col items-center"></main>
    </>
  );
}
