"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { PivotDebugger, Font3D } from "@/components/portfolio/base";
import { Font3DCompositePropsUI } from "./interface";

export function Font3DComposite({
  text,
  font,
  size,
  position,
  rotation,
  pivot,
  material,
  debug = false,
}: Font3DCompositePropsUI) {
  const meshRef = useRef<Mesh>(null);

  return (
    <Font3D
      innerRef={meshRef}
      text={text}
      font={font}
      size={size}
      position={position}
      rotation={rotation}
      pivot={pivot}
      material={material}
    >
      {debug && <PivotDebugger targetRef={meshRef} size={size} />}
    </Font3D>
  );
}
