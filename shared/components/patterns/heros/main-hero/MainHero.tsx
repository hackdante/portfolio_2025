import { LogoContainer, ThemeSwitcher } from "@/shared/components/composite";
import { MainScene3d } from "../../3d";


export function MainHero() {
  return (
    <div className="flex flex-col items-center justify-center px-6 max-w-7xl mx-auto w-full relative min-h-[500px]">
      <div className="absolute  inset-y-0  w-[98%] h-[98%] z-10">
        <MainScene3d />
      </div>
      <div className="z-10 flex flex-col items-center">
        <div className="mb-6">
          <LogoContainer />
        </div>
        <div className="flex flex-col items-center gap-12 z-12">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
