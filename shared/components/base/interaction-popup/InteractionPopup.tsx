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

    if (isVisible && data) {
      gsap.set(containerRef.current, { display: "block" });
      
      gsap.to(containerRef.current, { 
        scale: 1, 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        ease: "back.out(1.2)",
        overwrite: true
      });
    } else {
      gsap.to(containerRef.current, { 
        scale: 0.7, 
        opacity: 0, 
        y: 20, 
        duration: 0.3, 
        ease: "power2.in",
        overwrite: true,
        onComplete: () => {
          if (containerRef.current) containerRef.current.style.display = "none";
        }
      });
    }
  }, { dependencies: [isVisible, data] });

  return (
    <div
      ref={containerRef}
      className="absolute z-9999 w-72 p-0 bg-slate-950/90 backdrop-blur-md border border-indigo-500/50 rounded-2xl text-white shadow-[0_0_30px_rgba(79,70,229,0.2)] opacity-0 hidden overflow-visible"
      style={{
        left: `${position.x}px`,
        bottom: `${position.y}px`,
        marginBottom: "140px",
        transform: "translateX(-50%)",
      }}
    >
      {data && (
        <div className="flex flex-col">
          <div className="relative w-full h-36 overflow-hidden rounded-t-2xl border-b border-indigo-500/30">
            <Image 
              src={data.imag} 
              alt={data.title} 
              fill
              className="object-cover"
              sizes="288px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 to-transparent" />
          </div>

          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-cyan-400">
              {data.title}
            </h3>
            <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-3">
              {data.description}
            </p>
          
            <div className="flex flex-wrap gap-1 mt-2">
              {data.stack.split(",").map((tech) => (
                <span key={tech} className="text-[9px] font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-500/20 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950 border-r border-b border-indigo-500/50 rotate-45 shadow-lg" />
        </div>
      )}
    </div>
  );
}