"use client";

import { CardText } from "@/shared/components/base";
import { HOME_INITIAL_CARDS, HOME_WHATSAPP_ACTION } from "@/shared/constants";

import { useWhatsApp } from "@/shared/hooks";

export function MinCard() {
  const { handleWhatsAppClick } = useWhatsApp(HOME_WHATSAPP_ACTION["home"]);
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-8 xxs:mr-5">
      {HOME_INITIAL_CARDS.map((card, index) => (
        <div
          key={index}
          className="   
              md:w-[calc(50%-1.5rem)] 
              lg:w-[calc(33%-1.5rem)] 
              min-w-[280px] "
        >
          <CardText {...card} callToAction={handleWhatsAppClick} />
        </div>
      ))}
    </div>
  );
}
