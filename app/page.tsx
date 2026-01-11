import { MainLogo, SectionWrapper } from "@/shared/components/base";
import { ThemeSwitcher } from "@/shared/components/composite";
import LogoSVG from "@/public/images/KENSAI_LOGO.svg";

export default function HomePageWeb() {
  return (
    <>
      <SectionWrapper id="logo" bgType="dark">
        <div className="mt-8">
          <MainLogo size="lg" path={LogoSVG} opacity={0.75} />
        </div>
      </SectionWrapper>

      <SectionWrapper id="theme-switch" bgType="light">
        <div className="mt-4 mb-2">
          <ThemeSwitcher />
        </div>
      </SectionWrapper>
    </>
  );
}
