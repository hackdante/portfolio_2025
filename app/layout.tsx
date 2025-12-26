import type { Metadata } from "next";
import { ThemeProviderSwitch } from "@/shared/components/base";
import { RootLayoutUI } from "@/types";

import "./globals.css";


export const metadata: Metadata = {
  title: "Kensai Experience",
  description:
    "High-end digital experiences built with Next.js and Material Design",
};


export default function RootLayout({ children }: RootLayoutUI) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body 
        suppressHydrationWarning
        className="antialiased selection:bg-ui-primary selection:text-white overflow-x-hidden"
      >
        <ThemeProviderSwitch
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          storageKey="kensai-theme"
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen flex flex-col bg-ui-background text-ui-foreground transition-colors duration-500 ease-in-out">
            <main className="grow">
              {children}
            </main>
          </div>
        </ThemeProviderSwitch>
      </body>
    </html>
  );
}