"use client";

import { useEffect, useState } from "react";
import { ThemeModeType } from "@/shared/types";

const isValidTheme = (value: string | null): value is ThemeModeType => {
  return value === "light" || value === "dark";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeModeType>(() => {
    if (typeof window === "undefined") return "light";

    const localTheme = localStorage.getItem("theme");

    if (isValidTheme(localTheme)) {
      return localTheme;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");

    root.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
