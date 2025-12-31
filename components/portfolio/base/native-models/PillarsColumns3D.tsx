"use client";

import { RefObject } from "react";
import { MeshPhysicalMaterial } from "three";
import { RoundedBox } from "@react-three/drei";

interface PillarColumns3DUI {
  positionXYZ: [number, number, number];
  materialRef: RefObject<MeshPhysicalMaterial | null>;
  initialColor: string;
}

export function PillarColumns3D({
  positionXYZ = [0, 0, 0],
  materialRef,
  initialColor,
}: PillarColumns3DUI) {
  return (
    <RoundedBox
      args={[0.9, 2.4, 0.35]}
      radius={0.12}
      smoothness={6}
      castShadow
      receiveShadow
      position={positionXYZ}
    >
      <meshPhysicalMaterial
        ref={materialRef}
        color={initialColor}
        roughness={1}
        metalness={0.7}
        clearcoat={1}
      />
    </RoundedBox>
  );
}