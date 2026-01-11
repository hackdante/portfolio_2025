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
        boxShadow: "0px 0px 15px -2px rgba(60, 139, 245, 0.4)",
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
      borderColor: animations.cherry,
      boxShadow: animations.boxShadowActive,
      duration: animations.duration,
    });
    if (onHoverStart) onHoverStart(e);
  });

  const handleMouseLeave = contextSafe((e: ReactMouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      borderColor: animations.borderColorIdle,
      boxShadow: animations.boxShadowIdle,
      duration: animations.duration,
    });
    if (onHoverEnd) onHoverEnd(e);
  });

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#111111] border-2 border-[#3C8BF5]/40 rounded-[2.5rem] p-6 flex flex-col items-center text-center justify-between transition-shadow duration-500 overflow-hidden"
    >
      <header className="w-full">
        <span className="text-[16px] font-medium text-[#bad8ff] tracking-[0.2em] uppercase">
          {tagline}
        </span>
        <h3 className="text-white text-xl font-bold tracking-tight uppercase mt-2 leading-tight">
          {title}
        </h3>
      </header>

      <div className="flex items-center justify-center pointer-events-none my-4">
        {icon}
      </div>

      <div className="space-y-2 pointer-events-none">
        <p className="text-[#ecfdff] text-[16px] px-2">{description}</p>
        <p className="text-[#b8f5fb] text-sm tracking-tight font-semibold uppercase">
          &quot;{benefit}&quot;
        </p>
      </div>
    </article>
  );
}