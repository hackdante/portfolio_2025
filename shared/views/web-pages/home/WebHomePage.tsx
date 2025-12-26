"use client";

import { ButtonDefault, CardText } from "@/shared/components/base";
import { TechStack } from "@/shared/components/composite";
import { MainHero } from "@/shared/components/patterns";
import { HOME_FEATURES } from "@/shared/constants";

export default function WebHomePage() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--hero-gradient-start)_0%,var(--hero-gradient-end)_100%)] -z-10 pointer-events-none" />

      <MainHero />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center pb-16">
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          <ButtonDefault variant="default">Portafolio 3D</ButtonDefault>
          <ButtonDefault variant="default">Información</ButtonDefault>
          <ButtonDefault variant="disable">Plataforma</ButtonDefault>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-6 w-full">
          {HOME_FEATURES.map((feat, index) => (
            <CardText
              key={`feature-${index}`}
              title={feat.title}
              description={feat.description}
              icon={feat.icon}
            />
          ))}
        </div>

        <div className="w-full">
          <TechStack size={45} />
        </div>
      </div>
    </>
  );
}
