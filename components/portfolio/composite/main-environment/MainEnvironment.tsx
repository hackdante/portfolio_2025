'use client'

import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight } from "three";

export function MainEnvironment() {

  const dirLight = useRef<DirectionalLight>(null);

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight
        ref={dirLight}
        position={[5, 12, 8]}
        intensity={4}
        castShadow
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />

      <pointLight position={[0, 10, 0]} intensity={1.2} />

      <Environment preset="forest" environmentIntensity={0.5} />

      <fog attach="fog" args={["#ffffff", 15, 35]} />
    </>
  );
}
