import { ButtonDefault } from "@/shared/components/base";
import { TechStack, ThemeSwitcher } from "@/shared/components/composite";
import { MainHeroUI } from "./interface";

export function MainHero({ data }: MainHeroUI) {
  return (
    <section
      className="relative h-screen w-full flex flex-col justify-center items-center bg-ui-background overflow-hidden px-6 transition-colors duration-500"
    >
      {/* Fondo dinámico mediante variables CSS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--hero-gradient-start)_0%,var(--hero-gradient-end)_100%)] -z-10 transition-all duration-700" />

      <div className="flex flex-col items-center max-w-6xl text-center">
        <span className="text-semantic-info text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 opacity-90">
          {data.subtitle}
        </span>

        <h1 className="text-ui-foreground text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8">
          {data.title}
        </h1>

        <p className="text-ui-foreground/50 text-xl md:text-2xl max-w-3xl font-light leading-relaxed mb-12">
          {data.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-12">
          <ButtonDefault variant="success">SUCCESS</ButtonDefault>
          <ButtonDefault variant="default">DEFAULT</ButtonDefault>
          <ButtonDefault variant="warning">WARNING</ButtonDefault>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <ThemeSwitcher />
        </div>
      </div>

      <TechStack size={50} />
    </section>
  );
}