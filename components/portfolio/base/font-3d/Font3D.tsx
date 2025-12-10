"use client";
import { Text3D } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import { Mesh } from "three";

const URL_FONTS_BASE = "/fonts";

type PivoteUI = "center" | "top" | "bottom" | "left" | "right";

interface Font3DPropsUI {
  reference: string;
  text: string;
  font: string;
  size: number;
  position: [number, number, number];
  rotation?: [number, number, number];
  material?: React.ReactNode;
  extrude?: number;
  pivot?: PivoteUI;
}

export function Font3D({
  reference,
  text,
  font,
  size,
  position,
  rotation,
  material,
  extrude,
  pivot,
}: Font3DPropsUI) {
  const ref = useRef<Mesh>(null);

  useLayoutEffect(() => {
    const refCurrent = ref.current;

    if (refCurrent) {
      refCurrent.geometry.computeBoundingBox();

      const bbox = refCurrent.geometry.boundingBox;

      if (!bbox) return;

      const centerX = (bbox.min.x + bbox.max.x) / 2;
      const centerY = (bbox.min.y + bbox.max.y) / 2;

      let tx = 0;
      let ty = 0;

      switch (pivot) {
        case "bottom": {
          tx = -centerX;

          ty = -bbox.min.y;
          break;
        }
        case "top": {
          tx = -centerX;

          ty = -bbox.max.y;
          break;
        }
        case "left": {
          tx = -bbox.min.x;

          ty = -centerY;
          break;
        }
        case "right": {
          tx = -bbox.max.x;

          ty = -centerY;
          break;
        }
        case "center":
        default: {
          tx = -centerX;
          ty = -centerY;
          break;
        }
      }

      refCurrent.geometry.translate(tx, ty, 0);
    }
  }, [font, text, pivot]);

  return (
    <Text3D
      ref={reference ? ref : null}
      position={position}
      font={`${URL_FONTS_BASE}/${font}`}
      castShadow
      receiveShadow
      size={size}
      height={extrude ?? 0.04}
      rotation={rotation}
      bevelEnabled
      bevelSize={0.02}
      bevelThickness={0.03}
    >
      {text}
      {ref.current && <axesHelper args={[size * 1.5]} />}
      {material ?? <meshStandardMaterial color="black" />}
    </Text3D>
  );
}
