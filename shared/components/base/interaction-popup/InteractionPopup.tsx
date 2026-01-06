"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { InteractionPopupUI } from "@/shared/types";

export function InteractionPopup({ data, isVisible, position }: InteractionPopupUI) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.killTweensOf(containerRef.current);

    if (isVisible && data) {
      gsap.set(containerRef.current, { display: "block" });
      gsap.to(containerRef.current, { 
        scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "back.out(1.2)", overwrite: true 
      });
    } else {
      gsap.to(containerRef.current, { 
        scale: 0.8, opacity: 0, y: 15, duration: 0.2, ease: "power2.in", overwrite: true,
        onComplete: () => { if (containerRef.current) containerRef.current.style.display = "none"; }
      });
    }
  }, { dependencies: [isVisible, data?.uid] });

  return (
    <div
      ref={containerRef}
      className="absolute z-19 w-52 p-0 bg-slate-950/95 backdrop-blur-sm border border-indigo-500/30 rounded-lg text-white shadow-2xl opacity-0 hidden"
      style={{
        left: `${position.x}px`,
        bottom: `${position.y}px`,
        marginBottom: "155px",
        transform: "translateX(-50%)",
      }}
    >
      {data && (
        <div className="flex flex-col">
          <div className="relative w-full h-14 overflow-hidden rounded-t-lg border-b border-white/5">
            <Image src={data.imag} alt={data.title} fill className="object-cover brightness-75" sizes="200px" priority />
          </div>

          <div className="p-2.5 flex flex-col gap-1.5">
            <div>
              <h3 className="text-[10px] font-bold text-indigo-300 truncate">{data.title}</h3>
              <p className="text-[8px] text-slate-400 line-clamp-2 leading-tight mt-0.5">{data.description}</p>
            </div>

            <div className="flex flex-wrap gap-1">
              {data.stack.split(",").slice(0, 2).map((tech) => (
                <span key={tech} className="text-[6px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-1 rounded uppercase">
                  {tech.trim()}
                </span>
              ))}
            </div>

            <a href={data.url} target="_blank" rel="noopener noreferrer" className="w-full py-1 bg-indigo-600 hover:bg-indigo-500 rounded text-center transition-all active:scale-95 text-[8px] font-bold uppercase tracking-wider">
              Ver Proyecto
            </a>
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 border-r border-b border-indigo-500/30 rotate-45" />
        </div>
      )}
    </div>
  );
}