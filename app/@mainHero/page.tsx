"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ButtonDefault } from "@/shared/components/base";
import { MainHero } from "@/shared/components/patterns";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function MainHeroSlot() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScrollToPortfolio = () => {
    const target = document.getElementById("portfolio-section");
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 20 },
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section ref={sectionRef} className="mx-auto w-full">
  
      <MainHero />
   
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Link href="/kensai-3d">
            <ButtonDefault variant="success">Kensai 3D</ButtonDefault>
          </Link>
          <ButtonDefault variant="primary" onClick={handleScrollToPortfolio}>
            Proyectos
          </ButtonDefault>
          <ButtonDefault variant="disable">Docs</ButtonDefault>
        </div>
     
    </section>
  );
}
