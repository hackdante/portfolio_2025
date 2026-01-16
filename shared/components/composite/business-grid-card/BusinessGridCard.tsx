"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExtendCard, IconAnimate } from "@/shared/components/base";
import { BUSINESS_SOLUTIONS_CARD } from "@/shared/constants/web-page/home";
import {
  GRID_ANIMATION_CONFIG,
  GRID_LAYOUT_TOKENS,
} from "./businessGridCardToken";

export function BusinessGridCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".business-card-item", {
        y: GRID_ANIMATION_CONFIG.yOffset,
        opacity: 0,
        duration: GRID_ANIMATION_CONFIG.duration,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className={GRID_LAYOUT_TOKENS.CONTAINER}>
      <div className={GRID_LAYOUT_TOKENS.GRID}>
        {BUSINESS_SOLUTIONS_CARD.map((service) => (
          <div
            key={service.id}
            className={`
              business-card-item 
              w-full 
              md:w-[calc(50%-1.5rem)] 
              lg:w-[calc(33%-1.5rem)] 
              min-w-[280px] 
              grow-0 
              shrink-0
            `}
          >
            <ExtendCard
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              benefit={service.benefit}
              icon={<IconAnimate icon={service.icon} size={128} />}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
