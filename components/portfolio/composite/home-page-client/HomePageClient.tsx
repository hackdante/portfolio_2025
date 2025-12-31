"use client";

import { useSyncExternalStore } from "react";

import { AudioController, StaticPageLoader } from "@/components/base";
import { ClientScreenSizeUI } from "@/types";
import { Hero3D } from "@/components/portfolio/composite";

let currentSize: ClientScreenSizeUI = null;

if (typeof window !== "undefined") {
  currentSize = {
    screenX: window.innerWidth,
    screenY: window.innerHeight,
  };
}

function subscribe(callback: () => void) {
  const onResize = () => {
    if (
      currentSize?.screenX !== window.innerWidth ||
      currentSize?.screenY !== window.innerHeight
    ) {
      currentSize = {
        screenX: window.innerWidth,
        screenY: window.innerHeight,
      };
      callback();
    }
  };

  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}

function getSnapshot() {
  return currentSize;
}

function getServerSnapshot() {
  return null;
}

export function HomePageClient() {
  const AUDIO_LOOP_SRC = "/portfolio/music/kensai_intro.mp3";
  const SCENE_VOLUME = 0.1;

  const screenSize = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

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
