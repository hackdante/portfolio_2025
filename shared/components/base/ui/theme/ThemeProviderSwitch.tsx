"use client";

import { JSX } from "react";
import { ThemeProvider } from "next-themes";
import { ThemeProviderPropsUI } from "./interfaces";

export const ThemeProviderSwitch = ({
  children,
  attribute = "data-theme",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "kensai-theme",
  disableTransitionOnChange = true,
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
    >
      {children}
    </ThemeProvider>
  );
};
