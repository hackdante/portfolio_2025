"use client";

import { useRef, MouseEvent as ReactMouseEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExtendCardUI } from "./interface";
import { extendCardToken } from "./extendCardToken";

export function ExtendCard({
  title,
  tagline,
  description,
  benefit,
  icon,
  onHoverStart,
  onHoverEnd,
}: ExtendCardUI) {
  const cardRef = useRef<HTMLElement>(null);
  const { animations } = extendCardToken;

  useGSAP(
    () => {
      gsap.to(cardRef.current, {
        "--card-glow-opacity": 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: cardRef }
  );

  const { contextSafe } = useGSAP({ scope: cardRef });

  const handleMouseEnter = contextSafe((e: ReactMouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      y: animations.yOffset,
      borderColor: "#3C8BF5",
      boxShadow: "0px 10px 40px -10px rgba(60, 139, 245, 0.6)",
      duration: animations.duration,
    });
    if (onHoverStart) onHoverStart(e);
  });

  const handleMouseLeave = contextSafe((e: ReactMouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      borderColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      duration: animations.duration,
    });
    if (onHoverEnd) onHoverEnd(e);
  });

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative w-full p-8 flex flex-col items-center text-center justify-between 
        transition-all duration-500 overflow-hidden rounded-[2.5rem] border-2
        bg-[#0D0D0D] border-white/10
      `}
      style={
        {
          "--card-glow-opacity": 0.2,
        } as React.CSSProperties
      }
    >
      <header className="w-full z-10">
        <span className="text-[13px] font-bold text-[#3C8BF5] tracking-[0.25em] uppercase">
          {tagline}
        </span>
        <h3 className="text-white text-xl md:text-2xl font-black tracking-tight uppercase mt-3 leading-tight">
          {title}
        </h3>
      </header>

      <div className="flex items-center justify-center pointer-events-none my-8 transform transition-transform duration-700 z-10">
        <div className="filter drop-shadow-[0_0_8px_rgba(60,139,245,0.5)]">
          {icon}
        </div>
      </div>

      <div className="space-y-4 pointer-events-none z-10">
        <p className="text-white/70 text-[15px] leading-relaxed px-2 font-medium">
          {description}
        </p>
        <p className="text-[#B8F5FB] text-[13px] tracking-widest font-bold uppercase italic">
          &quot;{benefit}&quot;
        </p>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(60,139,245,0.15),transparent_70%)] opacity-(--card-glow-opacity)" />

      <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </article>
  );
}
