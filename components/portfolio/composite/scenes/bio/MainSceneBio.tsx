"use client";
import { GLBCharacterLoader } from "@/shared/components/base/3d/loaders/gbl-loader/GLBCharacterLoader";

import { Text } from "@react-three/drei";
import { useState } from "react";

const URL_KENSAI_CHARACTER = "/portfolio/models/anim/bio/LEO_ACTIONS_ANIM.glb";

export function MainSceneBio() {
  const animation = "Bow";

  const [activeAnim, setActiveAnim] = useState<string>("");
  
  function handleAnimationsLoaded() {
    setActiveAnim(animation);
  }

  return (
    <>
      <Text
        position={[-2.4, 36.7, -15]}
        fontSize={0.7}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Contácto: 3136211448
      </Text>
      <Text
        position={[0, 35, -15]}
        fontSize={3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Biografía
      </Text>

      <GLBCharacterLoader
        objPath={URL_KENSAI_CHARACTER}
        position={[0, 32, -10]}
        scale={3}
        currentAnimation={activeAnim}
        onAnimationsLoaded={handleAnimationsLoaded}
      />
    </>
  );
}
