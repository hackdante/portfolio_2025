"use client";

import { FC, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { TechStackUI } from "./interface";
import { CORE_STACK } from "@/shared/constants";
import { useIsMounted } from "@/shared/hooks";
import { horizontalLoop } from "@/shared/utils";
import gsap from "gsap";

export const TechStack: FC<TechStackUI> = ({
  theme = "dark",
  variant = "default",
  size = 40,
  columns,
}) => {
  const isMounted = useIsMounted();
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isMounted || !sliderRef.current || columns) return;

    const slider = sliderRef.current;
    const items = gsap.utils.toArray(slider.children) as HTMLElement[];
    
 
    const loop = horizontalLoop(items, {
      repeat: -1,
      speed: 0.7,
      paddingRight: 80,
    });

  
    const updateScales = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const centerX = containerRect.left + containerRect.width / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        
     
        const distanceFromCenter = Math.abs(centerX - itemCenter);
        const normalizedDistance = Math.min(distanceFromCenter / (containerRect.width / 2), 1);
        
        const scale = 1 - (normalizedDistance * 0.2); 
        const opacity = 1 - (normalizedDistance * 0.8);

        gsap.set(item, { 
          scale: scale,
          opacity: opacity,
          overwrite: "auto"
        });
      });
    };

    gsap.ticker.add(updateScales);

    return () => {
      loop.kill();
      gsap.ticker.remove(updateScales);
    };
  }, { scope: containerRef, dependencies: [isMounted, columns] });

  const getVariantClass = () => {
    if (variant === "default") return "text-ui-foreground hover:text-ui-foreground";
    return `text-semantic-${variant}`;
  };

  const displayItems = columns ? CORE_STACK : [...CORE_STACK, ...CORE_STACK, ...CORE_STACK];

  return (
    <div 
      data-theme={isMounted ? theme : undefined} 
      className="w-full relative mt-16 overflow-hidden select-none" 
      ref={containerRef}
    >
      <div className="py-24">
        <div
          ref={sliderRef}
          className={`flex items-center gap-20 w-max ${columns ? "md:grid md:justify-center" : ""}`}
        >
          {displayItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="group flex flex-col items-center gap-5 shrink-0 cursor-pointer"
              >
                <div className="relative">
                  <Icon size={size} className={getVariantClass()} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-ui-foreground/40">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};