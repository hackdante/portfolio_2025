"use client";

import { CardTextUI } from "./interface";
import { 
  CARD_CONTAINER_CLASSES, 
  CARD_GLOW_CLASSES, 
  CARD_BLUR_MAP, 
  CARD_ICON_CONTAINER,
  CARD_BUTTON_CLASSES 
} from "./CardTextToken";

export function CardText({
  title = "Premium Design",
  subtitle = "Acabado de Cristal",
  description = "Este contenedor utiliza un desenfoque de fondo y una sombra de gran radio para un aspecto moderno y orgánico.",
  label = "Explorar",
  icon: Icon,
  blurIntensity = "md",
  callToAction,
}: CardTextUI) {
  const blurClass = CARD_BLUR_MAP[blurIntensity];

  return (
    <article className={`${CARD_CONTAINER_CLASSES} ${blurClass}`}>
      <div className={CARD_GLOW_CLASSES} aria-hidden="true" />
      
      <div className="relative p-6 flex flex-col h-full">
        <div className={CARD_ICON_CONTAINER}>
          {Icon ? (
            <Icon className="w-6 h-6" aria-hidden="true" />
          ) : (
            <span className="text-xl font-bold" aria-hidden="true">?</span>
          )}
        </div>

        <header className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ui-primary">
            {title}
          </span>
          <h3 className="text-xl font-semibold text-foreground leading-tight">
            {subtitle}
          </h3>
        </header>

        <p className="mt-3 text-sm leading-relaxed text-ui-surface-60 grow">
          {description}
        </p>

        <footer className="mt-6">
          <button 
            onClick={callToAction}
            className={CARD_BUTTON_CLASSES}
          >
            {label}
          </button>
        </footer>
      </div>
    </article>
  );
}