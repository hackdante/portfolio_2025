"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  ExtendCard,
  ImageTransition,
  IconAnimate,
} from "@/shared/components/base";
import { BUSINESS_SOLUTIONS_CARD } from "@/shared/constants/web-page/home";
import { PathImagesConfigUI } from "./interface";

const PATH_IMAGES_CONFIG: PathImagesConfigUI = {
  sizeW: 478,
  sizeH: 585,
  duration: 1,
  pathA: "/images/main-samurai/Kensai_001.png",
  pathB: "/images/main-samurai/Kensai_002.png",
  pathC: "/images/main-samurai/Kensai_003.png",
};

export function BusinessGridCard() {
  const [activeGif, setActiveGif] = useState<boolean>(false);
  const [resetGif, setResetGif] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: sliderRef });


  const goToSlide = contextSafe((index: number) => {
    setActiveTab(index);
    const cardWidth = 300;
    const gap = 32;
    const maxScroll = (BUSINESS_SOLUTIONS_CARD.length - 2) * (cardWidth + gap);
    const targetX = Math.min(index * (cardWidth + gap), maxScroll);

    gsap.to(".slider-track", {
      x: -targetX,
      duration: 0.8,
      ease: "power4.out",
    });
  });

  return (
    <section className="w-full max-w-6xl mx-auto overflow-hidden px-4">
      <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="col-span-12 lg:col-span-4 flex justify-center min-h-[550px] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(60,139,245,0.05),transparent_70%)] pointer-events-none" />

          <ImageTransition
            width={PATH_IMAGES_CONFIG.sizeW}
            height={PATH_IMAGES_CONFIG.sizeH}
            activate={activeGif}
            time={PATH_IMAGES_CONFIG.duration}
            firstImgPath={PATH_IMAGES_CONFIG.pathA}
            secondImgPath={PATH_IMAGES_CONFIG.pathB}
            threeImgPath={PATH_IMAGES_CONFIG.pathC}
            reset={resetGif}
          />
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
            {BUSINESS_SOLUTIONS_CARD.map((service, index) => (
              <button
                key={`tab-${service.id}`}
                onMouseEnter={() => goToSlide(index)}
                className={`
        px-6 py-2.5 rounded-xl border text-[11px] font-black tracking-[0.15em] uppercase 
        transition-all duration-500 transform
        ${
          activeTab === index
            ? "bg-[#3C8BF5] border-[#3C8BF5] text-white shadow-[0_0_25px_rgba(60,139,245,0.5)] scale-105"
            : "border-white/10 bg-[#121212] text-white/40 hover:border-white/30 hover:text-white"
        }
      `}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div
            className="relative w-full"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            <div ref={sliderRef} className="px-2">
              <div className="slider-track flex gap-8 items-start">
                {BUSINESS_SOLUTIONS_CARD.map((service) => (
                  <div
                    key={service.id}
                    className="w-[300px] shrink-0"
                    onMouseEnter={() => {
                      setResetGif(false);
                      setActiveGif(true);
                    }}
                    onMouseLeave={() => setResetGif(true)}
                  >
                    <ExtendCard
                      title={service.title}
                      tagline={service.tagline}
                      description={service.description}
                      benefit={service.benefit}
                      icon={<IconAnimate icon={service.icon} size={64} />}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
