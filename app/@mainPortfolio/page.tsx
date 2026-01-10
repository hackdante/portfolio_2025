"use client";

import { HiOutlineLightBulb } from "react-icons/hi2";
import { InteractiveCard } from "@/shared/components/composite";
import { BUSINESS_SOLUTIONS_CARD } from "@/shared/constants/web-page/home";

export default function MainPortfolioSlot() {
  return (
    <section className="relative w-full py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
 
        <div className="flex flex-col mb-20 items-center">
          <div className="flex items-center gap-3 mb-4">
            <HiOutlineLightBulb className="text-ui-primary" size={24} />
            <span className="text-ui-primary text-center font-black tracking-[0.4em] text-[16px] uppercase">
              Soluciones de Ingeniería
            </span>
          </div>
          <h2 className="text-5xl md:text-5xl xl:5xl font-normal text-white uppercase">
            Infraestructura 
            <span className="ml-5 text-transparent bg-clip-text bg-linear-to-r from-ui-primary to-blue-400">
               Interactiva
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_SOLUTIONS_CARD.map((card) => (
            <InteractiveCard key={card.id} {...card} />
          ))}
        </div>
      </div>

      {/* Decoración de Fondo para dar profundidad al Grid */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(60,139,245,0.02)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
}
