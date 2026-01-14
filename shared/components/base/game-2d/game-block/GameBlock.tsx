"use client";

import { useRef, useImperativeHandle, forwardRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GameBlockInternalUI } from "./interface";
import { GAME_BLOCK_TOKENS } from "./gameBlockToken";

export const GameBlock = forwardRef<
  { playHit: () => void; element: HTMLDivElement | null },
  GameBlockInternalUI
>(function GameBlock(props, ref) {
  const { id, title, thumbnail, positionX, positionY, type, isActive } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  useImperativeHandle(ref, () => ({
    playHit: contextSafe(() => {
      if (!contentRef.current) return;

      gsap.to(contentRef.current, {
        y: -GAME_BLOCK_TOKENS.HIT_BOUNCE_DISTANCE,
        duration: GAME_BLOCK_TOKENS.HIT_ANIMATION_DURATION / 2,
        yoyo: true,
        repeat: 1,
        ease: "power2.out",
      });
    }),
    element: containerRef.current,
  }));

  return (
    <div
      ref={containerRef}
      data-block-id={id}
      data-block-type={type}
      className="absolute select-none overflow-hidden rounded-lg border-2 border-ui-border bg-background"
      style={{
        left: positionX,
        bottom: positionY,
        width: GAME_BLOCK_TOKENS.DEFAULT_WIDTH,
        height: GAME_BLOCK_TOKENS.DEFAULT_HEIGHT,
      }}
    >
      <div
        ref={contentRef}
        className="relative flex h-full w-full flex-col items-center justify-center p-2"
      >
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="pointer-events-none object-cover"
            sizes={`${GAME_BLOCK_TOKENS.DEFAULT_WIDTH}px`}
            priority={false}
          />
        )}

        <div
          className={`absolute inset-0 opacity-20 transition-colors duration-300 ${
            isActive ? "bg-semantic-success" : "bg-transparent"
          }`}
        />

        <span className="sr-only">{title}</span>
      </div>
    </div>
  );
});

GameBlock.displayName = "GameBlock";
