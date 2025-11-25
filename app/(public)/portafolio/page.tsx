import { Metadata } from "next";

export const metadata : Metadata = {
  title: "Portafolio | Proyectos de Software, Web Apps y UX/UI — KENSAI",
  description:
    "Explora el portafolio de KENSAI: aplicaciones web, telemedicina, plataformas SaaS, ERP, multimedia interactiva, experiencias 3D, sistemas de agendamiento y soluciones corporativas construidas con Vue, React y Next.js.",
  keywords: [
    "portafolio de software",
    "proyectos web",
    "SaaS",
    "aplicaciones empresariales",
    "desarrollo de software",
    "web apps",
    "plataformas digitales",
    "telemedicina",
    "ERP",
    "frontend avanzado",
    "UX/UI",
    "Three.js",
  ],
  authors: [{ name: "KENSAI" }],
  robots: "index, follow",
};

export default function PortfolioPage() {
  return (
    <>
      <h2 className="text-7xl text-center">Portafolio</h2>
    </>
  );
}
