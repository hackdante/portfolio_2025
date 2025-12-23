"use client";
import { Text3D } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import { Mesh } from "three";
import { Font3DPropsUI } from "./interface";

const URL_FONTS_BASE = "/fonts";

export function Font3D({
  innerRef,
  text,
  font,
  size,
  position,
  rotation,
  material,
  extrude,
  pivot,
  children,
}: Font3DPropsUI) {
  const localRef = useRef<Mesh>(null);
  const activeRef = innerRef || localRef;

  useLayoutEffect(() => {
    const mesh = activeRef.current;
    if (!mesh) return;

    mesh.geometry.computeBoundingBox();
    const bbox = mesh.geometry.boundingBox;
    if (!bbox) return;

    const centerX = (bbox.min.x + bbox.max.x) / 2;
    const centerY = (bbox.min.y + bbox.max.y) / 2;

    let tx = 0, ty = 0;
    switch (pivot) {
      case "bottom": tx = -centerX; ty = -bbox.min.y; break;
      case "top": tx = -centerX; ty = -bbox.max.y; break;
      case "left": tx = -bbox.min.x; ty = -centerY; break;
      case "right": tx = -bbox.max.x; ty = -centerY; break;
      default: tx = -centerX; ty = -centerY; break;
    }

    mesh.geometry.translate(tx, ty, 0);
  }, [font, text, pivot, activeRef]);

  return (
    <Text3D
      ref={activeRef}
      position={position}
      font={`${URL_FONTS_BASE}/${font}`}
      castShadow
      receiveShadow
      size={size}
      height={extrude ?? 0.04}
      rotation={rotation}
      bevelEnabled
      bevelSize={0.01}
      bevelThickness={0.02}
      letterSpacing={0.02}
    >
      {text}
      {material ?? <meshStandardMaterial color="black" />}
      {children}
    </Text3D>
  );
}