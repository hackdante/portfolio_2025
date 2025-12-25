"use client";

import React from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import { useTheme } from "@/shared/hooks";
import { ThemeToggleUI } from "./interface";


export const ThemeToggle: React.FC<ThemeToggleUI> = ({ className, id }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      id={id}
      onClick={toggleTheme}
      className={`
        relative inline-flex h-10 w-10 items-center justify-center rounded-full 
        border border-neutral-200 bg-white text-neutral-800 transition-all 
        hover:bg-neutral-50 active:scale-95
        dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800
        ${className ?? ""}
      `}
      aria-label="Cambiar tema visual"
    >
      <div className="relative h-5 w-5">
        {/* Icono Sol: Visible solo en modo light */}
        <HiSun 
          className={`
            absolute inset-0 h-full w-full transition-all duration-300
            ${theme === "dark" ? "-rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"}
          `} 
        />
        {/* Icono Luna: Visible solo en modo dark */}
        <HiMoon 
          className={`
            absolute inset-0 h-full w-full transition-all duration-300
            ${theme === "dark" ? "rotate-0 opacity-100 scale-100" : "rotate-90 opacity-0 scale-0"}
          `} 
        />
      </div>
    </button>
  );
};