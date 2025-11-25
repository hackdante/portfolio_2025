import type { Metadata } from "next";

export const metadata : Metadata = {
  title: "Sobre Nosotros | KENSAI — Empresa de Desarrollo de Software",
  description:
    "KENSAI es una empresa de desarrollo de software especializada en soluciones web, UX/UI, frontend avanzado, plataformas SaaS, productos digitales y experiencias interactivas. Dirigida por Leandro González, con más de 6 años de experiencia.",
  keywords: [
    "empresa de software",
    "desarrollo de software",
    "soluciones digitales",
    "desarrollo web",
    "UX/UI",
    "arquitectura de software",
    "plataformas empresariales",
    "equipos ágiles",
    "experiencias 3D",
    "transformación digital"
  ],
  authors: [{ name: "KENSAI" }],
  robots: "index, follow",
};

export default function AboutPage() {
  return (
    <>
      <h2 className="text-7xl text-center">Nosotros</h2>
    </>
  );
}
