"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { MdMouse } from "react-icons/md";
import { InteractionPopupUI } from "./interface";
import { INTERACTION_POPUP_TOKENS } from "./interactionPopupToken";

export function InteractionPopup({
  data,
  isVisible,
  position,
  zIndex = 20,
}: InteractionPopupUI) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.killTweensOf(containerRef.current);

      if (isVisible && data) {
        gsap.set(containerRef.current, { display: "block" });
        gsap.to(containerRef.current, {
          ...INTERACTION_POPUP_TOKENS.ANIMATION.IN,
          overwrite: true,
        });

        gsap.to(iconRef.current, {
          y: -4,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      } else {
        gsap.to(containerRef.current, {
          ...INTERACTION_POPUP_TOKENS.ANIMATION.OUT,
          overwrite: true,
          onComplete: () => {
            if (containerRef.current)
              containerRef.current.style.display = "none";
          },
        });
      }
    },
    { dependencies: [isVisible, data?.uid] }
  );

  if (!data) return null;

  return (
    <div
      ref={containerRef}
      className="absolute pointer-events-auto overflow-visible opacity-0 hidden group"
      style={{
        width: `${INTERACTION_POPUP_TOKENS.SIZE}px`,
        height: `${INTERACTION_POPUP_TOKENS.SIZE}px`,
        left: `${position.x}px`,
        bottom: `${position.y}px`,
        marginBottom: `${INTERACTION_POPUP_TOKENS.OFFSET_Y}px`,
        transform: "translateX(-50%)",
        zIndex,
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl border border-ui-border bg-ui-background shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] transition-colors duration-300">
        <Image
          src={data.imag}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
          sizes="250px"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent opacity-90" />

        <div className="absolute inset-0 translate-y-[85%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] bg-ui-background/80 backdrop-blur-md flex flex-col justify-between border-t border-ui-border">
          <div
            ref={iconRef}
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-18 h-8 bg-ui-background border-t border-l border-r border-ui-border rounded-t-full flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300"
            style={{ zIndex: -2 }}
          >
            <MdMouse size={20} className="text-ui-primary text-xs mt-1" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-base font-normal text-ui-primary uppercase tracking-tight leading-none pt-2 pl-2 pr-2 mb-4">
              {data.title}
            </h3>
            <p className="text-[15px] text-ui-foreground/90 leading-tight px-2">
              {data.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 pb-1 p-2">
            <div className="flex flex-wrap gap-1.5">
              {data.stack.split(",").map((tech) => (
                <span
                  key={tech.trim()}
                  className="text-[12px] font-bold text-ui-primary bg-ui-primary/10 border border-ui-primary/20 px-1 py-0.5 rounded-sm uppercase"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>

            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-ui-primary hover:bg-ui-primary-hover text-white rounded-lg text-center transition-all duration-300 scale-90 group-hover:scale-100 active:scale-95 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-ui-primary/20"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-ui-background border-r border-b border-ui-border rotate-45 transition-colors duration-300"
        style={{ zIndex: -1 }}
      />
    </div>
  );
}
