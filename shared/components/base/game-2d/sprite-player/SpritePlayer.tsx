"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SpritePlayerUI } from "./interface";

export function SpritePlayer(props: SpritePlayerUI) {
  const { state, direction, positionX, positionY, sheet, animations } = props;
  const spriteRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const hasSheet = !!(sheet && sheet.width && sheet.cols);
  const config = animations?.[state];
  const canAnimate = !!(hasSheet && config && config.frames?.length > 0);

  const frameWidth = hasSheet ? sheet.width / sheet.cols : 50;
  const frameHeight = hasSheet ? sheet.height / sheet.rows : 90;

  useGSAP(() => {
    // 1. Limpieza total de timelines previos
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    if (!spriteRef.current || !canAnimate || !config) return;

    const { frames, fps, loop } = config;
    const playhead = { index: 0 };
    
    // 2. Cálculo de tiempo absoluto
    // Esto asegura que si la animación debe durar 1 seg, dure 1 seg en 60Hz y 144Hz
    const animationDuration = frames.length / (fps || 12);

    tlRef.current = gsap.timeline({ 
      repeat: loop ? -1 : 0,
      // Forzamos a que el timeline use segundos reales, no frames
      smoothChildTiming: true 
    });

    tlRef.current.to(playhead, {
      index: frames.length - 1,
      duration: animationDuration,
      ease: `steps(${frames.length - 1})`,
      onUpdate: () => {
        // Usamos Math.floor para evitar saltos entre sub-frames en monitores de alta tasa
        const idx = Math.floor(playhead.index);
        const frameId = frames[idx];
        
        const xPos = (frameId % sheet.cols) * frameWidth;
        const yPos = Math.floor(frameId / sheet.cols) * frameHeight;

        if (spriteRef.current) {
          spriteRef.current.style.backgroundPosition = `-${xPos}px -${yPos}px`;
        }
      },
    });

    return () => {
      tlRef.current?.kill();
    };
  }, [state, config, sheet, canAnimate, frameWidth, frameHeight]);

  // 3. Sistema de Coordenadas Normalizado
  // 500 es nuestro WORLD_HEIGHT. Restamos frameHeight para que Y=0 sea el suelo real.
  const containerStyle: React.CSSProperties = {
    width: `${frameWidth}px`,
    height: `${frameHeight}px`,
    left: 0,
    top: 0,
    position: "absolute",
    // positionY es la altura desde el suelo. 500 - frameHeight - positionY lo sitúa correctamente
    transform: `translate3d(${positionX - frameWidth / 2}px, ${500 - frameHeight - positionY}px, 0) scaleX(${direction === "RIGHT" ? 1 : -1})`,
    willChange: "transform",
  };

  if (!canAnimate) {
    Object.assign(containerStyle, {
      backgroundColor: "#22d3ee",
      border: "2px solid #ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
  }

  return (
    <div className="absolute z-10 overflow-hidden" style={containerStyle}>
      {canAnimate ? (
        <div
          ref={spriteRef}
          className="w-full h-full bg-no-repeat"
          style={{
            backgroundImage: `url(${sheet.url})`,
            backgroundSize: `${sheet.width}px ${sheet.height}px`,
            imageRendering: "pixelated", // Mantiene el estilo retro sin blur
          }}
        />
      ) : (
        <span className="text-[10px] text-black font-bold uppercase px-1 text-center">
          {state || "No State"}
        </span>
      )}
    </div>
  );
}