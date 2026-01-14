import {
  FooterDefault,
  MainLogo,
  SectionWrapper,
  TitlesPage,
} from "@/shared/components/base";

import { GameScene, MainHero } from "@/shared/components/patterns";
import {
  BusinessGridCard,
  MinCard,
  TechStack,
  ThemeSwitcher,
} from "@/shared/components/composite";
import { HomeViewUI } from "./interface";
import { ScrollAnimator } from "@/components/base";

const MAIN_LOGO_URL = "/images/KENSAI_LOGO.svg";

export const HomeView = ({ seoData }: HomeViewUI) => {
  return (
    <>
      <ScrollAnimator />

      <div className="fixed bottom-0 left-0 z-50 w-[300px] h-[600px]">
        <MainHero />
      </div>

      <SectionWrapper id="main-logo">
        <div className="pt-10 px-4">
          <MainLogo size="lg" path={MAIN_LOGO_URL} opacity={0.8} />
        </div>
        <div className="m-6">
          <ThemeSwitcher size="md" />
        </div>
      </SectionWrapper>

      <SectionWrapper id="hero-title">
        <TitlesPage
          titleA={seoData["hero"].title}
          titleB={seoData["hero"].subtitle}
          description={seoData["hero"].description}
          headText={seoData["hero"].header}
          icon={seoData["hero"].icon}
          data-gsap="fade-in"
        />
      </SectionWrapper>
      <SectionWrapper id="main-cards">
        <MinCard />
      </SectionWrapper>

      <SectionWrapper id="portfolio-title" bgColor="#050505" bgType="default">
        <div className="pt-8">
          <TitlesPage
            isDark
            titleA={seoData["portfolio"].title}
            titleB={seoData["portfolio"].subtitle}
            description={seoData["portfolio"].description}
            headText={seoData["portfolio"].header}
            icon={seoData["portfolio"].icon}
            data-gsap="reveal"
          />
        </div>
        <div className="pb-10">
          <BusinessGridCard />
        </div>
      </SectionWrapper>

      <SectionWrapper id="game-title" bgType="accent">
        <div className="py-8">
          <TitlesPage
            titleA={seoData["gamification"].title}
            titleB={seoData["gamification"].subtitle}
            description={seoData["gamification"].description}
            headText={seoData["gamification"].header}
            icon={seoData["gamification"].icon}
            data-gsap="reveal"
          />
        </div>
        <GameScene />
      </SectionWrapper>

      <SectionWrapper id="stack-title" bgColor="bg-primary/20" bgType="default">
        <div className="py-8">
          <TitlesPage
            titleA={seoData["stack"].title}
            titleB={seoData["stack"].subtitle}
            description={seoData["stack"].description}
            headText={seoData["stack"].header}
            icon={seoData["stack"].icon}
            data-gsap="fade-in"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="stack" bgColor="bg-primary/20" bgType="default">
        <TechStack size={48} />
      </SectionWrapper>

      <SectionWrapper id="authority">
        <div className="py-10">
          <TitlesPage
            titleA={seoData["authority"].title}
            titleB={seoData["authority"].subtitle}
            description={seoData["authority"].description}
            headText={seoData["authority"].header}
            icon={seoData["authority"].icon}
            data-gsap="reveal"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper id="main-footer" bgType="light">
        <FooterDefault />
      </SectionWrapper>
    </>
  );
};
