"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { LogoUI } from "./interface";

const MAIN_LOGO_IMAGE = "/images/KENSAI_LOGO.svg";

const subscribe = () => () => {};

export function MainLogo({
  width = 802.17,
  height = 162.12,
  path = MAIN_LOGO_IMAGE,
}: LogoUI) {
  const { resolvedTheme } = useTheme();

  const isClient = useSyncExternalStore(
    subscribe,
    () => true, 
    () => false 
  );

  const logoColor = isClient && resolvedTheme === "dark" 
    ? "var(--color-white-100)" 
    : "rgba(0, 0, 0, 0.85)";

  return (
    <div
      role="img"
      aria-label="KENSAI | Soluciones integrales"
      className={`transition-opacity duration-700 ${isClient ? "opacity-100" : "opacity-0"}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: logoColor,
        maskImage: `url(${path})`,
        WebkitMaskImage: `url(${path})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}