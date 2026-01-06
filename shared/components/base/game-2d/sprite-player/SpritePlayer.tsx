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
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    if (!spriteRef.current || !canAnimate || !config) return;

    const firstFrameId = config.frames[0];
    const startX = (firstFrameId % sheet.cols) * frameWidth;
    const startY = Math.floor(firstFrameId / sheet.cols) * frameHeight;

    gsap.set(spriteRef.current, {
      backgroundPosition: `-${startX}px -${startY}px`,
    });

    const { frames, fps, loop } = config;
    const playhead = { index: 0 };
    
    tlRef.current = gsap.timeline({ repeat: loop ? -1 : 0 });

    tlRef.current.to(playhead, {
      index: frames.length - 1,
      duration: frames.length / (fps || 1),
      ease: `steps(${frames.length - 1})`,
      onUpdate: () => {
        const frameId = frames[Math.round(playhead.index)];
        const xPos = (frameId % sheet.cols) * frameWidth;
        const yPos = Math.floor(frameId / sheet.cols) * frameHeight;

        gsap.set(spriteRef.current, {
          backgroundPosition: `-${xPos}px -${yPos}px`,
        });
      },
    });

    return () => {
      tlRef.current?.kill();
    };
  }, [state, config, sheet, canAnimate, frameWidth, frameHeight]);

  const containerStyle: React.CSSProperties = {
    width: `${frameWidth}px`,
    height: `${frameHeight}px`,
    left: 0,
    top: 0,
    position: "absolute",
    transform: `translate3d(${positionX - frameWidth / 2}px, ${500 - frameHeight - positionY}px, 0) scaleX(${direction === "RIGHT" ? 1 : -1})`,
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
    <div className="absolute animate-gpu z-8 overflow-hidden" style={containerStyle}>
      {canAnimate ? (
        <div
          ref={spriteRef}
          className="w-full h-full bg-no-repeat"
          style={{
            backgroundImage: `url(${sheet.url})`,
            backgroundSize: `${sheet.width}px ${sheet.height}px`,
            imageRendering: "pixelated",
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