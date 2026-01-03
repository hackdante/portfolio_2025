"use client";

import { useState, useEffect, CSSProperties, useMemo } from "react";
import { ImageAssetAnimationLayerUI } from "./interface";

export function ImageAssetAnimationLayer(props: ImageAssetAnimationLayerUI) {
  const {
    imageUrl,
    width,
    height,
    x = 0,
    y = 0,
    zIndex = 1,
    opacity = 1,
    parallaxFactor = 1,
    cameraX = 0,
    totalFrames,
    fps,
    frameWidth,
    frameHeight,
    rows,
    cols,
  } = props;

  const [currentFrame, setCurrentFrame] = useState(0);
  const [hasError, setHasError] = useState(false);


  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.src = imageUrl;

    const handleLoad = () => setHasError(false);
    const handleError = () => setHasError(true);

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [imageUrl]);

 
  useEffect(() => {
    if (totalFrames <= 1) return;
    const interval = 1000 / fps;
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % totalFrames);
    }, interval);
    return () => clearInterval(timer);
  }, [totalFrames, fps]);

 
  const parallaxOffset = useMemo(
    () => cameraX * (1 - parallaxFactor),
    [cameraX, parallaxFactor]
  );


  const gridPosition = useMemo(() => {
    return {
      col: currentFrame % cols,
      row: Math.floor(currentFrame / cols),
    };
  }, [currentFrame, cols]);


  const containerStyle: CSSProperties = useMemo(
    () => ({
      position: "absolute",
      width: typeof width === "number" ? `${width}px` : width,
      height: `${height}px`,
      left: `${x}px`,
      bottom: `${y}px`,
      zIndex,
      opacity,
      transform: `translate3d(${parallaxOffset}px, 0, 0)`,
      willChange: "transform",
      overflow: "hidden",
      pointerEvents: "none",
    }),
    [width, height, x, y, zIndex, opacity, parallaxOffset]
  );


  const spriteStyle: CSSProperties = useMemo(
    () => ({
      width: `${frameWidth}px`,
      height: `${frameHeight}px`,
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: `-${gridPosition.col * frameWidth}px -${gridPosition.row * frameHeight}px`,
      backgroundSize: `${cols * frameWidth}px ${rows * frameHeight}px`,
      imageRendering: "pixelated",
    }),
    [imageUrl, gridPosition, frameWidth, frameHeight, cols, rows]
  );


  const isInvalid = !imageUrl || hasError;

  if (isInvalid) {
    return (
      <div
        style={{
          ...containerStyle,
          backgroundColor: "#34d399", 
          border: "1px solid #059669",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="text-[10px] text-white font-mono font-bold uppercase opacity-60">
          Anim Dummy
        </span>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={spriteStyle} />
    </div>
  );
}