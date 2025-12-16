"use client";

import { Hero3D } from "../hero-3d/Hero3D";
import { useLayoutEffect, useState } from "react";
import { AudioController, StaticPageLoader } from "@/components/base";

type ClientScreenSize = { screenX: number; screenY: number } | null;

export function HomePageClient() {
  const AUDIO_LOOP_SRC = "/portfolio/music/kensai_intro.mp3";
  const SCENE_VOLUME = 0.1;

  const [screenSize, setScreenSize] = useState<ClientScreenSize>(null);

  const detectScreenSize = () => {
    if (typeof window !== "undefined") {
      setScreenSize({
        screenX: window.innerWidth,
        screenY: window.innerHeight,
      });
    }
  };

  useLayoutEffect(() => {
    detectScreenSize();

    window.addEventListener("resize", detectScreenSize);

    return () => {
      window.removeEventListener("resize", detectScreenSize);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        {screenSize === null ? (
          <StaticPageLoader />
        ) : (
          <Hero3D currentScreen={screenSize} />
        )}
      </div>
      <AudioController src={AUDIO_LOOP_SRC} volume={SCENE_VOLUME} />
    </>
  );
}
