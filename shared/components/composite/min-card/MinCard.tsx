"use client";

import { CardText } from "@/shared/components/base";
import { HOME_INITIAL_CARDS } from "@/shared/constants";

export function MinCard() {
  return (
    <div className="mb-9 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {HOME_INITIAL_CARDS.map((card, index) => (
        <CardText
          key={`${card.title}-${index}`}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          label={card.label}
          icon={card.icon}
          blurIntensity={card.blurIntensity}
          callToAction={card.callToAction}
        />
      ))}
    </div>
  );
}