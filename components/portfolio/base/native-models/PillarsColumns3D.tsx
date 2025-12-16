"use client";

import { RoundedBox } from "@react-three/drei";
import { Vector3TypeUI } from "@/types/global";

interface PillarColumns3DUI {
  positionXYZ?: Vector3TypeUI;
  colorBox: string;
}

export function PillarColumns3D({
  positionXYZ = [0, 0, 0],
  colorBox ="#000000"
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
      <meshStandardMaterial color={colorBox} roughness={1} metalness={0.7} />
    </RoundedBox>
  );
}
