"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { PlayerController } from "@/shared/components/composite";
import {
  gameSceneToken,
  gameSceneOffsetToken,
  gameSceneAssetsToken,
} from "./gameSceneToken";
import { GameMaskStyleUI } from "./interface";


export function GameScene() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 600;
  
  const layout = useMemo(() => {
    const baseWidth = gameSceneToken.width;
    const baseHeight = gameSceneToken.height; 
    
    const internalWidth = parseInt(gameSceneOffsetToken.width);
    const internalHeight = isMobile ? 450 : parseInt(gameSceneOffsetToken.height);
    const availableWidth = Math.min(windowWidth - 40, baseWidth); 
    const currentScale = availableWidth / baseWidth;

    return {
      scale: currentScale,
      containerWidth: baseWidth,
      containerHeight: baseHeight,
      gameWidth: internalWidth,
      gameHeight: internalHeight,
      totalHeight: isMobile ? baseHeight + 115 : baseHeight 
    };
  }, [windowWidth, isMobile]);


  const maskWrapperStyle: GameMaskStyleUI = {
    maskImage: `url(${gameSceneAssetsToken.screenMask})`,
    WebkitMaskImage: `url(${gameSceneAssetsToken.screenMask})`,
    maskMode: "luminance",
    WebkitMaskMode: "luminance",
    maskSize: "100% 100%",
    WebkitMaskSize: "100% 100%",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
  };

  return (
    <div className="flex items-center justify-center w-full min-h-[450px] p-4">

      <div
        id={gameSceneToken.id}
        className="relative overflow-visible transition-transform duration-300 ease-out"
        style={{
          width: `${layout.containerWidth}px`,
          height: `${layout.totalHeight}px`,
          transform: `scale(${layout.scale})`,
          transformOrigin: "center center",
          backgroundColor: gameSceneToken.backgroundColor,
        }}
      >

        <div className="absolute inset-0 z-10" style={maskWrapperStyle}>
          <div
            className="absolute overflow-hidden bg-slate-950"
            style={{
              top: gameSceneOffsetToken.top,
              left: gameSceneOffsetToken.left,
              width: `${layout.gameWidth}px`,
              height: `${layout.gameHeight}px`,
            }}
          >
            <PlayerController
              sceneWidth={layout.gameWidth}
              sceneHeight={layout.gameHeight}
              initialX={100}
              initialY={100}
              moveSpeed={1.7}
              jumpForce={17}
            />
          </div>
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none">
          <Image
            src={gameSceneAssetsToken.screenFrame}
            alt="Physical Screen Frame"
            fill
            priority
            sizes={`${gameSceneToken.width}px`}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}