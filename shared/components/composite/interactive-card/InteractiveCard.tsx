"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { InteractiveCardUI } from "./interface";
import { IconAnimate } from "@/shared/components/base/ui/icon-animate";

const ANIMATION_CONFIG = {
  duration: 0.4,
  yOffset: -15,
  boxShadowActive: "0px 20px 40px -10px rgba(255, 0, 127, 1)",
  boxShadowIdle: "0px 0px 15px -2px rgba(60, 139, 245, 0.3)",
  borderColorIdle: "rgba(60, 139, 245, 0.4)",
  cherry: "#FF007F",
} as const;

export const InteractiveCard = ({
  icon: Icon,
  title,
  tagline,
  description,
  benefit,
}: InteractiveCardUI) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.to(".interactive-card-main", {
        boxShadow: "0px 0px 15px -2px rgba(60, 139, 245, 0.4)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef }
  );

  const onMouseEnter = contextSafe((e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      y: ANIMATION_CONFIG.yOffset,
      borderColor: ANIMATION_CONFIG.cherry,
      boxShadow: ANIMATION_CONFIG.boxShadowActive,
      duration: ANIMATION_CONFIG.duration,
    });
  });

  const onMouseLeave = contextSafe((e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      y: 0,
      borderColor: ANIMATION_CONFIG.borderColorIdle,
      boxShadow: ANIMATION_CONFIG.boxShadowIdle,
      duration: ANIMATION_CONFIG.duration,
    });
  });

  return (
    <div ref={containerRef} className="w-full">
      <article
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="interactive-card-main relative w-full bg-[#111111] border-2 border-[#3C8BF5]/40 rounded-[2.5rem] p-6 flex flex-col items-center text-center justify-between transition-shadow duration-500 overflow-hidden"
      >
        <header className="w-full">
          <span className="text-[16px] font-medium text-[#bad8ff] tracking-[0.2em] uppercase">
            {tagline}
          </span>
          <h3 className="text-white text-xl font-bold tracking-tight uppercase mt-2 leading-tight">
            {title}
          </h3>
        </header>

        <div className="flex items-center justify-center pointer-events-none">
          <IconAnimate 
            icon={Icon} 
            size={100} 
          />
        </div>

        <div className="space-y-2 pointer-events-none">
          <p className="text-[#ecfdff] text-[16px] px-2">
            {description}
          </p>
          <p className="text-[#b8f5fb] text-sm tracking-tight font-semibold uppercase">
            &quot;{benefit}&quot;
          </p>
        </div>
      </article>
    </div>
  );
};