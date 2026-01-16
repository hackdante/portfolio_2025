"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { PlayerController } from "@/shared/components/composite";
import {
  gameSceneToken,
  gameSceneOffsetToken,
  gameSceneAssetsToken,
} from "./gameSceneToken";

export function GameScene() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaleFactor = useMemo(() => {
    if (!windowWidth) return 1;
    // Restamos un padding total de 32px (16px por lado) para que no toque los bordes
    const availableWidth = windowWidth - 32;
    return Math.min(availableWidth / gameSceneToken.width, 1);
  }, [windowWidth]);

  return (
    <div className="flex w-full flex-col items-center justify-start overflow-hidden p-4 xxs:mr-10">
      <div className="flex flex-col items-center justify-center gap-3 py-6">
        <p className="text-ui-text/70 text-sm font-medium tracking-wide uppercase">
          Usa las flechas para moverte en el teclado
        </p>

        <div className="flex items-end gap-1">
          <kbd className="flex h-10 w-10 items-center justify-center rounded-lg border-b-4 border-ui-border bg-white font-sans text-xl font-bold text-secondary shadow-sm transition-all active:mt-1 active:border-b-0">
            ←
          </kbd>

          <kbd className="flex h-10 w-10 items-center justify-center rounded-lg border-b-4 border-ui-border bg-white font-sans text-xl font-bold text-secondary shadow-sm transition-all active:mt-1 active:border-b-0">
            ↑
          </kbd>

          <kbd className="flex h-10 w-10 items-center justify-center rounded-lg border-b-4 border-ui-border bg-white font-sans text-xl font-bold text-secondary shadow-sm transition-all active:mt-1 active:border-b-0">
            →
          </kbd>
        </div>
      </div>
      <div
        style={{
          width: `${gameSceneToken.width * scaleFactor}px`,
          height: `${gameSceneToken.height * scaleFactor}px`,
        }}
        className="relative flex items-start justify-center transition-all duration-300"
      >
        <div
          id={gameSceneToken.id}
          className="relative transition-transform duration-300 ease-out"
          style={{
            width: `${gameSceneToken.width}px`,
            height: `${gameSceneToken.height}px`,
            transform: `scale(${scaleFactor})`,
            transformOrigin: "top left",
            backgroundColor: gameSceneToken.backgroundColor,
            position: "absolute",
            left: "0",
            top: "0",
          }}
        >
          <div
            className="absolute z-10 overflow-hidden bg-slate-950"
            style={{
              top: gameSceneOffsetToken.top,
              left: gameSceneOffsetToken.left,
              width: gameSceneOffsetToken.width,
              height: gameSceneOffsetToken.height,
              maskImage: `url(${gameSceneAssetsToken.screenMask})`,
              WebkitMaskImage: `url(${gameSceneAssetsToken.screenMask})`,
              maskSize: "100% 100%",
            }}
          >
            <PlayerController
              sceneWidth={parseInt(gameSceneOffsetToken.width)}
              sceneHeight={parseInt(gameSceneOffsetToken.height)}
              initialX={100}
              initialY={100}
              moveSpeed={1.7}
              jumpForce={17}
            />
          </div>

          <div className="absolute inset-0 z-20 pointer-events-none">
            <Image
              src={gameSceneAssetsToken.screenFrame}
              alt="Physical Screen Frame"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
