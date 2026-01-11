import type { Metadata } from "next";
import {
  SectionWrapper,
  ThemeProviderSwitch,
  TitlesPage,
} from "@/shared/components/base";
import { HOME_SEO_DATA } from "@/shared/constants";
import { RootLayoutUI } from "@/types";

import "./globals.css";

export const metadata: Metadata = {
  title: "Kensai Experience | Spatial Computing",
  description: "High-end digital experiences built with Next.js and React 19",
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
      <body className="antialiased selection:bg-ui-accent selection:text-ui-on-accent overflow-x-hidden min-h-dvh flex flex-col bg-ui-background text-ui-foreground transition-colors duration-500 ease-(--ease-standard)">
        <ThemeProviderSwitch
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={true}
          storageKey="kensai-theme"
          disableTransitionOnChange={false}
        >
          <div className="relative flex flex-col flex-1 w-full overflow-x-hidden">
            <main className="flex-1 flex flex-col w-full">
              {children}

              <SectionWrapper id="hero-title" bgType="light">
                <TitlesPage
                  titleA={HOME_SEO_DATA["hero"].title}
                  titleB={HOME_SEO_DATA["hero"].subtitle}
                  description={HOME_SEO_DATA["hero"].description}
                  headText={HOME_SEO_DATA["hero"].header}
                  icon={HOME_SEO_DATA["hero"].icon}
                />
              </SectionWrapper>

              <SectionWrapper id="hero">{mainHero}</SectionWrapper>
              <SectionWrapper
                id="portfolio-title"
                bgColor="#050505"
                bgType="default"
              >
                <TitlesPage
                  isDark
                  titleA={HOME_SEO_DATA["portfolio"].title}
                  titleB={HOME_SEO_DATA["portfolio"].subtitle}
                  description={HOME_SEO_DATA["portfolio"].description}
                  headText={HOME_SEO_DATA["portfolio"].header}
                  icon={HOME_SEO_DATA["portfolio"].icon}
                />
              </SectionWrapper>

              <SectionWrapper id="portfolio">{mainPortfolio}</SectionWrapper>

              <SectionWrapper id="gamification">
                {mainGamification}
              </SectionWrapper>

              <SectionWrapper id="stack-title">
                <TitlesPage
                  titleA={HOME_SEO_DATA["stack"].title}
                  titleB={HOME_SEO_DATA["stack"].subtitle}
                  description={HOME_SEO_DATA["stack"].description}
                  headText={HOME_SEO_DATA["stack"].header}
                  icon={HOME_SEO_DATA["stack"].icon}
                />
              </SectionWrapper>

              <SectionWrapper id="stack">{mainStack}</SectionWrapper>

              <SectionWrapper>
                <TitlesPage
                  titleA={HOME_SEO_DATA["authority"].title}
                  titleB={HOME_SEO_DATA["authority"].subtitle}
                  description={HOME_SEO_DATA["authority"].description}
                  headText={HOME_SEO_DATA["authority"].header}
                  icon={HOME_SEO_DATA["authority"].icon}
                />
              </SectionWrapper>

              <footer className="w-full mt-auto border-ui-border bg-ui-background/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
