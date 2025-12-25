'use client';

import { useSyncExternalStore, useMemo } from "react";
import { useTheme } from "next-themes";
import { ButtonDefault } from "@/shared/components/base";

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


  if (!isClient) {
    return <div className="flex gap-4 p-4 h-[72px] w-[200px] animate-pulse bg-ui-foreground/5 rounded-full" />;
  }

  return (
    <div className="flex gap-4 p-4 bg-ui-foreground/5 rounded-full backdrop-blur-md border border-ui-foreground/10">
      <ButtonDefault 
        variant={currentTheme === 'light' ? 'info' : 'default'} 
        onClick={() => setTheme("light")}
      >
        ☀️ Claro
      </ButtonDefault>

      <ButtonDefault 
        variant={currentTheme === 'dark' ? 'info' : 'default'} 
        onClick={() => setTheme("dark")}
      >
        🌙 Oscuro
      </ButtonDefault>
    </div>
  );
};