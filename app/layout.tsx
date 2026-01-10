import type { Metadata } from "next";
import { SectionWrapper, ThemeProviderSwitch } from "@/shared/components/base";
import { HOME_SEO_DATA } from "@/shared/constants";
import { RootLayoutUI } from "@/types";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kensai Experience",
  description: "High-end digital experiences built with Next.js",
};

export default function RootLayout({
  mainFooter,
  mainHero,
  mainPortfolio,
  mainGamification,
  mainStack,
  children,
}: RootLayoutUI) {
  return (
    <html lang="es" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="antialiased selection:bg-ui-primary selection:text-white overflow-x-hidden min-h-dvh flex flex-col bg-ui-background text-ui-foreground">
        <ThemeProviderSwitch
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          storageKey="kensai-theme"
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen flex flex-col bg-ui-background text-ui-foreground transition-colors duration-500 ease-in-out">
            <main className="flex-1 flex flex-col">
              {children}
              <SectionWrapper id="hero">{mainHero}</SectionWrapper>

              <SectionWrapper id="portfolio-seo">
                <h2> {HOME_SEO_DATA["portfolio"].title}</h2>
                <p> {HOME_SEO_DATA["portfolio"].description}</p>
              </SectionWrapper>

              <SectionWrapper id="portfolio">{mainPortfolio}</SectionWrapper>

              <SectionWrapper id="gamification">
                {mainGamification}
              </SectionWrapper>

              <SectionWrapper id="portfolio-seo">
                <h2> {HOME_SEO_DATA["stack"].title}</h2>
                <p> {HOME_SEO_DATA["stack"].description}</p>
              </SectionWrapper>

              <SectionWrapper id="stack">{mainStack}</SectionWrapper>

              <SectionWrapper id="portfolio-seo">
                <h3> {HOME_SEO_DATA["authority"].title}</h3>
                <p> {HOME_SEO_DATA["authority"].description}</p>
              </SectionWrapper>

              <footer className="w-full mt-auto border-t border-ui-border">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                  {mainFooter}
                </div>
              </footer>
            </main>
          </div>
        </ThemeProviderSwitch>
      </body>
    </html>
  );
}
