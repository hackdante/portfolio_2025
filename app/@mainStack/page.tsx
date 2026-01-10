"use client";

import { TechStack } from "@/shared/components/composite";
import { CardText } from "@/shared/components/base";
import { HOME_FEATURES } from "@/shared/constants";

export default function MainStackSlot() {
  return (
    <section className="w-full bg-ui-background/50 backdrop-blur-sm py-20 border-t border-ui-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 w-full">
          {HOME_FEATURES.map((feat, index) => (
            <CardText key={`feat-${index}`} {...feat} />
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="text-center mb-12 max-w-2xl">
            <h3 className="text-xl font-black uppercase text-ui-foreground mb-4">
              Stack de Ingeniería
            </h3>
            <TechStack size={48} />
          </div>
        </div>
      </div>
    </section>
  );
}