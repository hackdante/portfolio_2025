"use client";

import { Text } from "@react-three/drei";
import { Vector3TypeUI } from "@/types";
import { GLBCharacterLoader } from "@/shared/components/base/3d/loaders/gbl-loader/GLBCharacterLoader";
import { useState } from "react";

const URL_KENSAI_CHARACTER = "/portfolio/models/anim/bio/LEO_ACTIONS_ANIM.glb";
const currentInitialPosition: Vector3TypeUI = [39, 16, -8];

export function MainScenePortfolio() {
  const animation = "Walking";

  const [activeAnim, setActiveAnim] = useState<string>("");

  function handleAnimationsLoaded() {
    setActiveAnim(animation);
  }
  return (
    <>
      <Text
        position={[32, 21.5, -10]}
        fontSize={0.7}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Contácto: 3136211448
      </Text>
      <Text
        position={[35, 20, -10]}
        fontSize={3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Portafolio
      </Text>

      <GLBCharacterLoader
        objPath={URL_KENSAI_CHARACTER}
        position={currentInitialPosition}
        scale={4}
        currentAnimation={activeAnim}
        onAnimationsLoaded={handleAnimationsLoaded}
      />
    </>
  );
}
