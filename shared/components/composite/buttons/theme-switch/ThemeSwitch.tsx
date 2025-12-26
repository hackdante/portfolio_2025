'use client';

import { useSyncExternalStore, useMemo } from "react";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const emptySubscribe = () => () => {};

export const ThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const currentTheme = useMemo(() => {
    return theme === 'system' ? resolvedTheme : theme;
  }, [theme, resolvedTheme]);

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  if (!isClient) {
    return (
      <div className="w-10 h-10 rounded-full animate-pulse bg-ui-foreground/5" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-ui-foreground/5 hover:bg-ui-foreground/10 border border-ui-foreground/10 transition-all duration-300 group"
    >
      {currentTheme === 'light' ? (
        <HiMoon className="w-5 h-5 text-ui-text-primary transition-transform duration-500 group-hover:-rotate-12" />
      ) : (
        <HiSun className="w-5 h-5 text-ui-text-primary transition-transform duration-500 group-hover:rotate-45" />
      )}
    </button>
  );
};