"use client";
import { Text } from "@react-three/drei";
import { Vector3TypeUI } from "@/types/global";
import { useState } from "react";
import { GLBCharacterLoader } from "@/shared/components/base/3d/loaders/gbl-loader/GLBCharacterLoader";

const URL_KENSAI_CHARACTER = "/portfolio/models/anim/bio/LEO_ACTIONS_ANIM.glb";
const currentInitialPosition: Vector3TypeUI = [-40, 1, -10];

export function MainSceneContact() {
  const animation = "000_Awake";

  const [activeAnim, setActiveAnim] = useState<string>("");

  function handleAnimationsLoaded() {
    setActiveAnim(animation);
  }
  return (
    <>
      <Text
        position={[-37, 15, -15]}
        fontSize={0.7}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Contácto: 3136211448
      </Text>
      <Text
        position={[-35, 13.3, -15]}
        fontSize={3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Contacto
      </Text>
      <GLBCharacterLoader
        objPath={URL_KENSAI_CHARACTER}
        position={currentInitialPosition}
        scale={7}
        currentAnimation={activeAnim}
        onAnimationsLoaded={handleAnimationsLoaded}
      />
    </>
  );
}
