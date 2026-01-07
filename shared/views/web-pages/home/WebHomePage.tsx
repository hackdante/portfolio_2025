"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import {
  RiGamepadLine,
  RiGridFill,
  RiFolderChart2Line,
} from "react-icons/ri";
import { ButtonDefault, CardText } from "@/shared/components/base";
import { TechStack } from "@/shared/components/composite";
import { MainHero } from "@/shared/components/patterns";
import { HOME_FEATURES } from "@/shared/constants";
import { PROJECTS_PORTFOLIO } from "@/shared/constants/game-2d/entities";
import { PortfolioViewModeType } from "./interface";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

const GameSceneDynamic = dynamic(
  () => import("@/shared/components/patterns").then((mod) => mod.GameScene),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[500px] w-full bg-neutral-900 text-white rounded-3xl">
        Cargando...
      </div>
    ),
  }
);

export default function WebHomePage() {
  const [viewMode, setViewMode] = useState<PortfolioViewModeType>("grid");
  const portfolioRef = useRef<HTMLDivElement>(null);
  const switchRef = useRef<HTMLDivElement>(null);

  const handleScrollToPortfolio = () => {
    if (portfolioRef.current) {
      gsap.to(window, {
        scrollTo: { y: portfolioRef.current, offsetY: 20 },
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

  const renderedProjects = useMemo(() => {
    return PROJECTS_PORTFOLIO.map((project) => (
      <article
        key={project.uid}
        className="group bg-ui-background dark:bg-neutral-900/40 rounded-2xl overflow-hidden border border-ui-border hover:border-ui-primary transition-all duration-300 flex flex-col h-full shadow-sm"
      >
        <div className="relative w-full aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <Image
            src={project.imag}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            priority={project.uid <= 4}
          />
        </div>
        <div className="p-4 flex flex-col flex-1 text-center items-center">
          <h3 className="text-sm font-black text-ui-foreground uppercase tracking-tight line-clamp-1 mb-1">
            {project.title}
          </h3>
          <p className="text-[10px] text-ui-foreground opacity-70 line-clamp-2 mb-3 leading-tight">
            {project.description}
          </p>
          <div className="mt-auto w-full space-y-3">
            <div className="flex flex-wrap justify-center gap-1">
              {project.stack
                .split("|")
                .slice(0, 2)
                .map((tech, i) => (
                  <span
                    key={i}
                    className="text-[8px] px-1.5 py-0.5 bg-neutral-200/50 dark:bg-neutral-800 rounded font-bold"
                  >
                    {tech.trim()}
                  </span>
                ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-[9px] font-black tracking-widest border border-ui-border hover:bg-ui-primary hover:text-white py-1.5 rounded-lg transition-all uppercase"
            >
              Explore
            </a>
          </div>
        </div>
      </article>
    ));
  }, []);

  useEffect(() => {
    if (switchRef.current) {
      gsap.fromTo(
        switchRef.current.children,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, stagger: 0.1 }
      );
    }
  }, [viewMode]);

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--hero-gradient-start)_0%,var(--hero-gradient-end)_100%)] -z-10 pointer-events-none" />
      <MainHero />
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center pb-12">
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link href="/kensai-3d">
            <ButtonDefault variant="success">Kensai 3D</ButtonDefault>
          </Link>
          <ButtonDefault variant="primary" onClick={handleScrollToPortfolio}>
            Proyectos
          </ButtonDefault>
          <ButtonDefault variant="disable">Docs</ButtonDefault>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 w-full">
          {HOME_FEATURES.map((feat, index) => (
            <CardText key={`feat-${index}`} {...feat} />
          ))}
        </div>
        <section
          ref={portfolioRef}
          className="w-full pt-8 flex flex-col items-center"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 text-ui-primary mb-2">
              <RiFolderChart2Line size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-ui-foreground">
              Portafolio
            </h2>
            <p className="text-sm opacity-60 max-w-lg mx-auto mt-2">
              Ingeniería y diseño interactivo.
            </p>
          </div>
          <div
            ref={switchRef}
            className="flex  dark:bg-neutral-800/50 p-1.5 rounded-2xl mb-12 border border-ui-border shadow-inner"
          >
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-black transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-white dark:bg-neutral-700 text-ui-primary shadow-md"
                  : "text-ui-foreground opacity-40 hover:opacity-100"
              }`}
            >
              <RiGridFill size={20} /> CATÁLOGO
            </button>
            <button
              onClick={() => setViewMode("game")}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-black transition-all duration-300 ${
                viewMode === "game"
                  ? "bg-white dark:bg-neutral-700 text-ui-primary shadow-md"
                  : "text-ui-foreground opacity-40 hover:opacity-100"
              }`}
            >
              <RiGamepadLine size={20} /> INTERACTIVO
            </button>
          </div>
          <div className="w-full">
            {viewMode === "game" ? (
              <div className="w-full rounded-3xl overflow-hidden border border-ui-border bg-black h-[500px] relative">
                <GameSceneDynamic />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mx-auto">
                {renderedProjects}
              </div>
            )}
          </div>
        </section>
        <section className="w-full mt-20 pt-12 border-t border-ui-border/50 flex flex-col items-center">
          <div className="text-center mb-8 max-w-2xl">
            <h3 className="text-xl font-black uppercase text-ui-foreground mb-2">
              Stack Técnico
            </h3>
            <p className="text-xs opacity-60 leading-relaxed italic">
              Ecosistema React 19, Next.js y Three.js para interfaces
              inmersivas.
            </p>
          </div>

          <TechStack size={48} />
        </section>
      </div>
    </>
  );
}
