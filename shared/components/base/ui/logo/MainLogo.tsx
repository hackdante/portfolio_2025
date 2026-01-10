"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/shared/hooks/life-cicle/mounted/useIsMounted";
import { MainLogoUI } from "./interface";

const LOGO_WIDTHS = {
  sm: 120,
  md: 240,
  lg: 480,
  xl: 820,
} as const;

export function MainLogo({
  size = "md",
  path,
  altText = "Kensai Soluciones Integrales",
  opacity = 1
}: MainLogoUI) {
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();
  const targetWidth = LOGO_WIDTHS[size];

  if (!isMounted) {
    return (
      <div style={{ width: "100%", maxWidth: targetWidth, height: "40px" }} />
    );
  }

  const isDark = resolvedTheme === "dark";
  const currentOpacity: number = isDark ? 1 : opacity;

  if (!path) {
    return (
      <div
        className={`flex items-center justify-center border-2 border-dashed rounded-lg transition-colors
          ${
            isDark ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"
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
    );
  }

  return (
    <div
      className="flex items-center justify-center overflow-hidden"
      style={{ width: "100%", maxWidth: targetWidth, opacity: currentOpacity }}
    >
      <Image
        src={path}
        alt={altText}
        width={targetWidth}
        height={targetWidth / 3}
        sizes={`${targetWidth}px`}
        priority
        className={`object-contain h-auto transition-all duration-500 ease-in-out
          ${isDark ? "invert brightness-200" : "invert-0"}`}
        style={{
          width: "100%",
          maxWidth: targetWidth,
          height: "auto",
        }}
        draggable={false}
      />
    </div>
  );
}