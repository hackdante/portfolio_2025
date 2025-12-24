import React from "react";

import { DefaultButton } from "@/shared/componets/base";
import { TechStack } from "@/shared/componets/composite";
import { MainHeroUI } from "./interface";

export const MainHero: React.FC<MainHeroUI> = ({ data }) => {
  return (
    <section
      data-theme="dark"
      className="relative h-screen w-full flex flex-col justify-center items-center bg-ui-background overflow-hidden px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#121212_0%,#000000_100%)] -z-10" />

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

        <div className="flex flex-col sm:flex-row gap-6">
          <DefaultButton
            label={data.primaryAction}
            variant="default"
            size="xl"
            theme="dark"
          />
          <DefaultButton
            label={data.secondaryAction}
            variant="active"
            size="xl"
            theme="dark"
          />
        </div>
      </div>
      <TechStack size={50} />
    </section>
  );
};
