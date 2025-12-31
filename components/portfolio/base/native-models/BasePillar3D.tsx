"use client";

import { Vector3TypeUI } from "@/types";

interface BasePillar3DUI {
  positionXYZ?: Vector3TypeUI;
}

export function BasePillar3D({ positionXYZ = [0, 0, 0] }: BasePillar3DUI) {
  return (
    <mesh castShadow receiveShadow position={positionXYZ}>
      <cylinderGeometry args={[0.6, 0.6, 0.3, 8]} />
      <meshStandardMaterial />
    </mesh>
  );
}
