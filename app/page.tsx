import { MainLogo, SectionWrapper } from "@/shared/components/base";
import { ThemeSwitcher } from "@/shared/components/composite";
import LogoSVG from "@/public/images/KENSAI_LOGO.svg";
import { HOME_SEO_DATA } from "@/shared/constants";

export default function HomePageWeb() {
  return (
    <div className="pt-10 px-5">
      <SectionWrapper id="logo">
        <MainLogo size="lg" path={LogoSVG} opacity={0.75} />
      </SectionWrapper>
      <div className="my-5">
        <SectionWrapper id="theme-switch">
          <ThemeSwitcher />
        </SectionWrapper>

        <SectionWrapper id="hero-text">
          <h1>{HOME_SEO_DATA["hero"].title}</h1>
          <h2>{HOME_SEO_DATA["hero"].description}</h2>
        </SectionWrapper>
      </div>
    </div>
  );
}
