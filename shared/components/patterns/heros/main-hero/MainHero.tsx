import { LogoContainer, ThemeSwitcher } from "@/shared/components/composite";
import Character3D from "@/shared/components/composite/3d/character/Character3D";

export function MainHero() {
  return (

    <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-7xl mx-auto w-full pt-20 relative min-h-[600px]">
      
 
      <div className="z-10 flex flex-col items-center">
        <div className="mb-6">
          <LogoContainer />
        </div>
        <div className="flex flex-col items-center gap-12">
          <ThemeSwitcher />
        </div>
      </div>

   
 <div className="absolute right-0 inset-y-0 w-[35%]  pointer-events-none">
        <Character3D />
      </div>

    </div>
  );
}