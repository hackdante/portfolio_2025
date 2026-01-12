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

  // Solución: Lazy Initialization para evitar setState en el efecto de montaje
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
      attributeFilter: ["data-theme"] 
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
      <div className={`${sizeClasses[size]} rounded-full animate-pulse bg-ui-foreground/5`} />
    );
  }

  const isLight = currentTheme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Cambiar a modo ${isLight ? "oscuro" : "claro"}`}
      className={`
        flex items-center justify-center rounded-full transition-all duration-500 group cursor-pointer
        bg-ui-surface-8 border border-ui-border-10 hover:border-ui-accent/40
        ${sizeClasses[size]}
      `}
    >
      {isLight ? (
        <FaMoon className="w-5 h-5 text-ui-foreground-muted transition-transform duration-500 group-hover:-rotate-12 group-hover:text-ui-accent" />
      ) : (
        <FaSun className="w-5 h-5 text-ui-foreground-muted transition-transform duration-500 group-hover:rotate-45 group-hover:text-ui-accent" />
      )}
    </button>
  );
};