"use client";

import { useEffect } from "react";

export function ThemeSyncLayer() {
  useEffect(() => {
    const updateThemeCookie = (theme: "light" | "dark") => {
      document.cookie = `kensai-theme=${theme}; path=/; max-age=31536000; SameSite=Lax`;
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const hasManualPreference = document.cookie.includes("kensai-theme");

      if (!hasManualPreference) {
        const newTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        updateThemeCookie(newTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    handleChange(mediaQuery);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return null;
}
