"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { 
  SiNextdotjs, SiReact, SiThreedotjs, SiTypescript, 
  SiTailwindcss, SiNodedotjs, SiMongodb, SiDocker 
} from "react-icons/si";
import { DomainLinkUI, TechIconUI } from "./interface";

const TECH_STACK: TechIconUI[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Three.js", icon: SiThreedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: SiDocker },
];

const DOMAINS: DomainLinkUI[] = [
  {
    title: "Experiencia 3D",
    description: "Portafolio inmersivo con Three.js y R3F.",
    href: "/portafolio",
    label: "Explorar",
    variant: "3d"
  },
  {
    title: "Servicios Web",
    description: "Desarrollo de aplicaciones de alto rendimiento.",
    href: "/inicio",
    label: "Ver Servicios",
    variant: "web"
  },
  {
    title: "Gestión",
    description: "Plataforma de usuarios y administración.",
    href: "/dashboard/usuarios",
    label: "Acceder",
    variant: "admin"
  }
];

export const HomePageClient: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(".hero-logo", { y: 30, opacity: 0, duration: 1 })
        .from(".domain-card", { y: 20, opacity: 0, stagger: 0.2, duration: 0.8 }, "-=0.5")
        .from(".tech-icon", { scale: 0.5, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen flex flex-col items-center justify-center p-6 bg-linear-to-b from-white to-gray-100 dark:from-neutral-950 dark:to-neutral-900 transition-colors duration-500">
      
      {/* Logo Central */}
      <section className="hero-logo mb-12 text-center">
        <h1 className="text-6xl font-bold tracking-tighter dark:text-white">KENSAI</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mt-2 uppercase tracking-widest text-sm">Software Architecture & Experience</p>
      </section>

      {/* Grid de Dominios */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
        {DOMAINS.map((domain) => (
          <div 
            key={domain.href}
            className="domain-card group p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-blue-500 transition-all cursor-pointer shadow-xs hover:shadow-xl"
            onClick={() => router.push(domain.href)}
          >
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{domain.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">{domain.description}</p>
            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-1 inline-block transition-transform">
              {domain.label} →
            </span>
          </div>
        ))}
      </section>

      {/* Tech Stack Cloud */}
      <section className="flex flex-wrap justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
        {TECH_STACK.map((tech) => (
          <div key={tech.name} className="tech-icon flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all">
            <tech.icon size={32} className="text-neutral-800 dark:text-neutral-200" />
            <span className="text-[10px] font-mono dark:text-neutral-400">{tech.name}</span>
          </div>
        ))}
      </section>
    </main>
  );
};