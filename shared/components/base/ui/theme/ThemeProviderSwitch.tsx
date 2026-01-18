"use client";

import { JSX, useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { ThemeProviderPropsUI } from "./interface";

export const ThemeProviderSwitch = ({
  attribute = "data-theme",
  defaultTheme = "dark",
  enableSystem = true,
  storageKey = "kensai-theme",
  disableTransitionOnChange = false,
  themes,
  ...props
}: ThemeProviderPropsUI): JSX.Element => {
  return (
    <ThemeProvider
      {...props}
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      storageKey={storageKey}
      disableTransitionOnChange={disableTransitionOnChange}
      themes={themes}
      forcedTheme={undefined}
    >
      <ThemeSync layer={storageKey} />
    </ThemeProvider>
  );
};

/**
 * Componente interno para manejar efectos secundarios sin re-renderizar el provider
 */
const ThemeSync = ({ layer }: { layer: string }): null => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Sincronización proactiva si fuera necesaria tras hidratación
    const saved = localStorage.getItem(layer);
    if (saved && saved !== theme) {
      setTheme(saved);
    }
  }, [theme, setTheme, layer]);

  return null;
};