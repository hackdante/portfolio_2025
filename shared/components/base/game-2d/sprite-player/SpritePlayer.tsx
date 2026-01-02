"use client";

import { useRef } from "react";
import { SpritePlayerUI } from "./interface";

export function SpritePlayer(props: SpritePlayerUI) {
  const { state, direction, positionX, positionY } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="absolute will-change-transform z-50 flex flex-col items-center justify-end"
      style={{
        width: "50px",
        height: "90px",
        left: 0,
        top: 0,
        position: "absolute",
        transform: `translate3d(${positionX}px, ${
          500 - 93 - positionY
        }px, 0) scaleX(${direction === "RIGHT" ? 1 : -1})`,
        backgroundColor: "#22d3ee",
        border: "2px solid #ffffff",
        zIndex: 50,
      }}
    >
      <span className="text-[10px] text-black font-bold mb-1">{state}</span>
    </div>
  );
}