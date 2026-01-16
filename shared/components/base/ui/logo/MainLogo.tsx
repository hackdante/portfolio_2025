"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useIsMounted } from "@/shared/hooks/life-cicle/mounted/useIsMounted";
import { LogoWidthUI, MainLogoUI } from "./interface";

const LOGO_WIDTHS: LogoWidthUI = {
  xs: 100,
  sm: 120,
  md: 240,
  lg: 480,
  xl: 620,
  "2xl": 720,
};

type KensaiTheme = "dark" | "light";

const isValidTheme = (value: string | null): value is KensaiTheme => {
  return value === "light" || value === "dark";
};

export function MainLogo({
  size = "md",
  path,
  altText = "Kensai Soluciones Integrales",
  opacity = 1,
}: MainLogoUI) {
  const isMounted = useIsMounted();
  const targetWidth = LOGO_WIDTHS[size];

  const [currentTheme, setCurrentTheme] = useState<KensaiTheme>(() => {
    if (typeof document !== "undefined") {
      const themeAttr = document.documentElement.getAttribute("data-theme");
      return isValidTheme(themeAttr) ? themeAttr : "dark";
    }
    return "dark";
  });

  const updateTheme = useCallback(() => {
    const themeAttr = document.documentElement.getAttribute("data-theme");
    if (isValidTheme(themeAttr)) {
      setCurrentTheme((prev) => (prev !== themeAttr ? themeAttr : prev));
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [isMounted, updateTheme]);

  if (!isMounted) {
    return (
      <div style={{ width: "100%", maxWidth: targetWidth, height: "40px" }} />
    );
  }

  const isDark = currentTheme === "dark";
  const currentOpacity: number = isDark ? 1 : opacity;

  return (
    <div
      className="flex items-center justify-center overflow-hidden"
      style={{ width: "100%", maxWidth: targetWidth }}
    >
      {path ? (
        <Image
          src={path}
          alt={altText}
          width={targetWidth}
          height={targetWidth / 3}
          priority
          className={`object-contain h-auto transition-all duration-700 ease-in-out
            ${isDark ? "invert brightness-200" : "invert-0"}`}
          style={{
            width: "auto",
            maxWidth: targetWidth,
            height: "auto",
            opacity: currentOpacity,
          }}
          draggable={false}
        />
      ) : (
        <div
          className={`flex items-center justify-center border-2 border-dashed rounded-lg transition-all duration-700
            ${
              isDark
                ? "border-white/10 bg-white/5"
                : "border-black/10 bg-black/5"
            }`}
          style={{ width: "100%", maxWidth: targetWidth, aspectRatio: "3/1" }}
        >
          <span
            className={`text-sm font-medium ${
              isDark ? "text-white/40" : "text-black/40"
            }`}
          >
            Su logo aquí
          </span>
        </div>
      )}
    </div>
  );
}
