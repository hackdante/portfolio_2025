"use client";

import { useSyncExternalStore, useMemo } from "react";
import { ScreenSizeUI } from "./interface";

export function useBreakpoint(): ScreenSizeUI {
  const subscribe = (callback: () => void) => {
    window.addEventListener("resize", callback);
    window.addEventListener("orientationchange", callback);
    return () => {
      window.removeEventListener("resize", callback);
      window.removeEventListener("orientationchange", callback);
    };
  };

  const getSnapshot = (): number => window.innerWidth;

  const getServerSnapshot = () => 0;

  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const screenData = useMemo((): ScreenSizeUI => {
    if (typeof window === "undefined") {
      return {
        width: 0,
        height: 0,
        breakpoint: "xs",
        isMobile: true,
        isPortrait: true,
      };
    }

    const h = window.innerHeight;
    const isPortrait = window.innerHeight > window.innerWidth;

    let bp: ScreenSizeUI["breakpoint"] = "xs";
    if (width >= 1536) bp = "2xl";
    else if (width >= 1280) bp = "xl";
    else if (width >= 1024) bp = "lg";
    else if (width >= 768) bp = "md";
    else if (width >= 640) bp = "sm";

    return {
      width,
      height: h,
      breakpoint: bp,
      isMobile: width < 768,
      isPortrait,
    };
  }, [width]);

  return screenData;
}
