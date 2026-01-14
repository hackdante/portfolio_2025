"use client";

import { useSyncExternalStore, useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { ThemeSwitcherUI } from "./interface";

type KensaiTheme = "light" | "dark";

const isValidTheme = (value: string | null): value is KensaiTheme => {
  return value === "light" || value === "dark";
};

const subscribe = (callback: () => void) => {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};

export const ThemeSwitcher = ({ size = "md" }: ThemeSwitcherUI) => {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const [currentTheme, setCurrentTheme] = useState<KensaiTheme>(() => {
    if (typeof document !== "undefined") {
      const themeAttr = document.documentElement.getAttribute("data-theme");
      return isValidTheme(themeAttr) ? themeAttr : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (!isClient) return;

    const handleDOMChange = () => {
      const themeAttr = document.documentElement.getAttribute("data-theme");
      if (isValidTheme(themeAttr)) {
        setCurrentTheme(themeAttr);
      }
    };

    const observer = new MutationObserver(handleDOMChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [isClient]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    document.cookie = `kensai-theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
    setCurrentTheme(newTheme);
    window.dispatchEvent(new Event("kensai-theme-change"));
  };

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  if (!isClient) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full animate-pulse bg-ui-foreground/5`}
      />
    );
  }

  const isLight = currentTheme === "light";

  return (
    <div className="relative group inline-block">
      <button
        onClick={toggleTheme}
        aria-label={`Cambiar a modo ${isLight ? "oscuro" : "claro"}`}
        className={`
      relative flex items-center justify-center transition-all duration-300
      rounded-button cursor-pointer active:scale-95
      border-2 border-black-20 dark:border-2 dark:border-white/20
      shadow-md hover:shadow-xl hover:scale-105
      dark:shadow-[0_0_15px_rgba(204,255,0,0.1)] 
      dark:hover:shadow-[0_0_8px_rgba(204,255,0,0.3)]
      bg-ui-bg
      ${sizeClasses[size]}
    `}
      >
        {isLight ? (
          <FaMoon className="text-black/60 transition-transform duration-500 group-hover:-rotate-12 group-hover:text-primary" />
        ) : (
          <FaSun className="text-white transition-transform duration-500 group-hover:rotate-45 group-hover:text-accent" />
        )}
      </button>

      {/* Tooltip con viñeta */}
      <span
        className="
    absolute left-1/2 -translate-x-1/2 bottom-full mb-4 px-3 py-1.5
    text-xs font-bold text-white bg-secondary rounded-lg
    opacity-0 scale-90 pointer-events-none transition-all duration-200
    group-hover:opacity-100 group-hover:scale-100
    whitespace-nowrap z-50 shadow-lg
  "
      >
        {isLight ? "Modo Oscuro" : "Modo Claro"}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-secondary" />
      </span>
    </div>
  );
};
