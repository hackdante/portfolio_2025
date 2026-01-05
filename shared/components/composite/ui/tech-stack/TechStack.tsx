"use client";

import { FC, useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { TechStackUI } from "./interface";
import { CORE_STACK } from "@/shared/constants";
import { useIsMounted } from "@/shared/hooks";
import gsap from "gsap";

export const TechStack: FC<TechStackUI> = ({ size = 40, columns }) => {
  const isMounted = useIsMounted();
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const xPercent = useRef(0);
  const isPaused = useRef(false);

  const displayItems = useMemo(
    () =>
      columns
        ? CORE_STACK
        : [...CORE_STACK, ...CORE_STACK, ...CORE_STACK, ...CORE_STACK],
    [columns]
  );

  useGSAP(() => {
    if (!isMounted || !sliderRef.current || columns) return;

    const slider = sliderRef.current;
    const items: HTMLElement[] = gsap.utils.toArray(slider.children);

    const animate = () => {
      if (!isPaused.current) {
        xPercent.current -= 0.02;
      }

      if (xPercent.current <= -50) {
        xPercent.current = 0;
      }

      gsap.set(slider, { xPercent: xPercent.current });

      const containerRect = containerRef.current?.getBoundingClientRect();
      if (containerRect) {
        const centerX = containerRect.left + containerRect.width / 2;

        items.forEach((item) => {
          if (item.getAttribute("data-hovering") === "true") return;

          const itemRect = item.getBoundingClientRect();
          const itemCenter = itemRect.left + itemRect.width / 2;
          const dist = Math.abs(centerX - itemCenter);
          const normalized = Math.min(dist / (containerRect.width / 2), 1);

          gsap.set(item, {
            scale: 1 - normalized * 0.25,
            opacity: 1 - normalized * 0.7,
            overwrite: "auto",
          });
        });
      }
    };

    gsap.ticker.add(animate);
    return () => gsap.ticker.remove(animate);
  }, [isMounted, columns]);

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    isPaused.current = true;
    const target = e.currentTarget;
    target.setAttribute("data-hovering", "true");

    gsap.to(target, {
      scale: 1.4,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      overwrite: true,
    });

    const siblings = Array.from(sliderRef.current?.children || []);
    siblings.forEach((s) => {
      if (s !== target) gsap.to(s, { opacity: 0.1, duration: 0.4 });
    });
  };

  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.removeAttribute("data-hovering");

    isPaused.current = false;

    const items = Array.from(sliderRef.current?.children || []);
    gsap.to(items, {
      scale: 1,
      opacity: 0.8,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  if (!isMounted) return <div className="h-32" />;

  return (
    <div
      ref={containerRef}
      className="w-full relative overflow-hidden select-none"
    >
      <div className="py-16 border-y border-ui-text-primary/5">
        <div ref={sliderRef} className="flex gap-20 whitespace-nowrap w-max">
          {displayItems.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${i}`}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                className="flex flex-col items-center gap-4 cursor-pointer px-4"
              >
                <Icon size={size} className="text-ui-text-primary" />
                <span className="text-[10px] font-mono tracking-widest text-ui-text-primary/40 uppercase">
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
