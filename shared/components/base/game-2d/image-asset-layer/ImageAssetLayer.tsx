"use client";

import { useState, useEffect, CSSProperties, useMemo } from "react";
import { ImageAssetLayerUI } from "./interface";

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
  const [scrollOffset, setScrollOffset] = useState(0);

  const parallaxOffset = useMemo(() => {
    return cameraX * (1 - parallaxFactor);
  }, [cameraX, parallaxFactor]);


  const containerStyle: CSSProperties = useMemo(() => ({
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
  }), [width, height, x, y, zIndex, opacity, parallaxOffset]);

  // 3. Memoizamos el estilo del fondo (depende del scroll constante)
  const backgroundStyle: CSSProperties = useMemo(() => ({
    width: "100%",
    height: "100%",
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: repeat,
    backgroundSize: tileSize ? `${tileSize}px auto` : "contain",
    backgroundPosition: `${-scrollOffset}px bottom`,
    imageRendering: "pixelated",
  }), [imageUrl, repeat, tileSize, scrollOffset]);

  // ... (Efectos de carga y animación se mantienen igual)
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
    if (autoScrollSpeed === 0) return;
    let frameId: number;
    const animate = () => {
      setScrollOffset((prev) => (prev + autoScrollSpeed) % 20000);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [autoScrollSpeed]);

  if (hasError || !imageUrl) {
    return (
      <div style={{ ...containerStyle, backgroundColor: "#22c55e", border: "2px solid #15803d", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span className="text-[8px] text-white font-bold opacity-50 uppercase">Missing Asset</span>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle} />
    </div>
  );
}