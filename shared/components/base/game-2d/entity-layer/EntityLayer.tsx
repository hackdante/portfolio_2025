"use client";

import { useEffect, useRef } from "react";
import { EntityLayerUI } from "./interface";
import { EntityInstanceUI } from "@/shared/types";

export function EntityLayer(props: EntityLayerUI) {
  const {
    entities,
    maskUrl,
    imageUrl,
    width,
    height,
    playerX,
    playerY,
    onTriggerEnter,
    onTriggerLeave,
    debug,
    zIndex = 0,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = maskUrl;
    img.onload = () => {
      maskImageRef.current = img;
    };
  }, [maskUrl]);

  useEffect(() => {
    if (!maskImageRef.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d", {
      willReadFrequently: true,
    });
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(maskImageRef.current, 0, 0, width, height);

    entities.forEach((entity) => {
      if (!entity.isActive) return;

      const relX = Math.floor(playerX - entity.x);
      const wallY = Math.floor(height - (playerY - entity.y) - 35);
      const feetY = Math.floor(height - (playerY - entity.y) + 2);

      if (relX >= 0 && relX < width) {
        const wallPixel = ctx.getImageData(
          relX,
          Math.max(0, Math.min(height - 1, wallY)),
          1,
          1
        ).data;
        const feetPixel = ctx.getImageData(
          relX,
          Math.max(0, Math.min(height - 1, feetY)),
          1,
          1
        ).data;

        const isWallHit = wallPixel[0] > 200;
        const isFeetHit = feetPixel[0] > 200;

        if (isWallHit || isFeetHit) {
          const mutableEntity = {
            ...entity,
            isFloor: isFeetHit && !isWallHit && playerY >= entity.y + 20,
          } as EntityInstanceUI;
          onTriggerEnter?.(mutableEntity);
        } else {
          onTriggerLeave?.(entity);
        }
      } else {
        onTriggerLeave?.(entity);
      }
    });
  }, [
    playerX,
    playerY,
    entities,
    width,
    height,
    onTriggerEnter,
    onTriggerLeave,
    maskUrl,
  ]);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="hidden"
      />
      {entities.map((entity) => (
        <div
          key={entity.id}
          className="absolute"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            left: `${entity.x}px`,
            bottom: `${entity.y}px`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
            zIndex: 1,
            border: debug ? "2px solid cyan" : "none",
          }}
        />
      ))}
    </div>
  );
}
