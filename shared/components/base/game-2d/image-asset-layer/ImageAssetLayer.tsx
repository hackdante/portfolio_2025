"use client";

import { useState, useEffect, CSSProperties, useMemo, useRef } from "react";
import { ImageAssetLayerUI } from "./interface";
import gsap from "gsap";

export function ImageAssetLayer(props: ImageAssetLayerUI) {
  const {
    imageUrl,
    width,
    height,
    x = 0,
    y = 0,
    repeat = "repeat-x",
    tileSize,
    zIndex = 1,
    opacity = 1,
    parallaxFactor = 1,
    cameraX = 0,
    autoScrollSpeed = 0,
  } = props;

  const [hasError, setHasError] = useState(false);

  const layerRef = useRef<HTMLDivElement>(null);
  const scrollPos = useRef(0);

  const parallaxOffset = useMemo(() => {
    return cameraX * (1 - parallaxFactor);
  }, [cameraX, parallaxFactor]);

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

  const backgroundStyle: CSSProperties = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      backgroundImage: `url(${imageUrl})`,
      backgroundRepeat: repeat,
      backgroundSize: tileSize ? `${tileSize}px auto` : "contain",
      backgroundPosition: `0px bottom`,
      imageRendering: "pixelated",
    }),
    [imageUrl, repeat, tileSize]
  );

  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setHasError(false);
    img.onerror = () => setHasError(true);
  }, [imageUrl]);

  useEffect(() => {
    if (autoScrollSpeed === 0 || hasError) return;

    const tick = (_time: number, deltaTime: number) => {
      if (!layerRef.current) return;

      const ratio = deltaTime / (1000 / 60);

      scrollPos.current += autoScrollSpeed * ratio;
      layerRef.current.style.backgroundPosition = `${-scrollPos.current}px bottom`;
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
    };
  }, [autoScrollSpeed, hasError]);

  if (hasError || !imageUrl) {
    return (
      <div
        style={{
          ...containerStyle,
          backgroundColor: "#22c55e",
          border: "1px solid #16a34a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="text-[9px] text-white font-mono font-bold opacity-40 uppercase tracking-tighter">
          [Asset Missing]
        </span>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div ref={layerRef} style={backgroundStyle} />
    </div>
  );
}
