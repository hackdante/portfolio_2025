"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollAnimatorUI } from "./interface";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollAnimator({ selector = "[data-gsap]" }: ScrollAnimatorUI) {
  useGSAP(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
      const animationType = el.getAttribute("data-gsap");

      if (animationType === "fade-in") {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
        });
      }

      if (animationType === "reveal") {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          clipPath: "inset(0 0 100% 0)",
          opacity: 0,
          duration: 1.2,
          ease: "expo.out",
        });
      }
    });
  });

  return null;
}
