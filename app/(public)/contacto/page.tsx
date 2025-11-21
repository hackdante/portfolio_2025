import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Rukkosoft — Servicios de Desarrollo de Software",
  description:
    "Contacta a Rukkosoft para proyectos de software a medida, desarrollo web, aplicaciones SaaS, UX/UI, frontend, backend, animación 3D, plataformas empresariales y soluciones digitales personalizadas.",
  keywords: [
    "contacto empresa de software",
    "contratar desarrollador",
    "software a medida",
    "desarrollo web",
    "plataformas SaaS",
    "soluciones digitales",
    "servicios de programación",
    "Rukkosoft contacto",
  ],
  authors: [{ name: "Rukkosoft" }],
  robots: "index, follow",
};
export default function ContactPage() {
  return (
    <>
      <h2 className="text-7xl">Escríbenos</h2>
    </>
  );
}
