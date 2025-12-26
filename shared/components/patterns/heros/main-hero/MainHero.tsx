import { LogoContainer, ThemeSwitcher } from "@/shared/components/composite";

export function MainHero() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-7xl mx-auto w-full pt-20">
      <div className="mb-6">
        <LogoContainer />
      </div>
      <div className="flex flex-col items-center gap-12 mb-16">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
