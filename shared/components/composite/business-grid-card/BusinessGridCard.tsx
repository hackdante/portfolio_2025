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

  const hasImages = Boolean(
    PATH_IMAGES_CONFIG.pathA && PATH_IMAGES_CONFIG.pathB
  );

  return (
    <section className="w-full max-w-6xl mx-auto overflow-hidden">
      <div className="grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-4 flex justify-center min-h-[500px]">
          {hasImages ? (
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
          ) : (
            <div className="w-full h-full border border-dashed border-white/10 rounded-3xl flex items-center justify-center text-white/20 italic">
              Esperando nuevos renders...
            </div>
          )}
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="flex flex-wrap gap-3 mb-7">
            {BUSINESS_SOLUTIONS_CARD.map((service, index) => (
              <button
                key={`tab-${service.id}`}
                onMouseEnter={() => goToSlide(index)}
                className={`px-5 py-2 rounded-lg border text-[10px] font-black tracking-widest uppercase transition-all duration-500 ${
                  activeTab === index
                    ? "bg-[#3C8BF5] border-[#3C8BF5] text-white shadow-[0_0_20px_rgba(60,139,245,0.4)]"
                    : "border-white/10 bg-white/5 text-white/40 hover:border-white/20"
                }`}
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
