import { Text } from "@react-three/drei";
import { Vector3TypeUI } from "@/types";
import { GLBCharacterLoader } from "@/shared/components/base/3d/loaders/gbl-loader/GLBCharacterLoader";
import { useState } from "react";

const URL_KENSAI_CHARACTER = "/portfolio/models/anim/bio/LEO_ACTIONS_ANIM.glb";
const currentInitialPosition: Vector3TypeUI = [2.5, 30, -10];

export function MainSceneBio() {
  const animation = "Jog_sign";

  const [activeAnim, setActiveAnim] = useState<string>("");

  function handleAnimationsLoaded() {
    setActiveAnim(animation);
  }

  return (
    <>
      <Text
        position={[-2.4, 36.7, -20]}
        fontSize={0.7}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Contácto: 3136211448
      </Text>
      <Text
        position={[0, 35, -20]}
        fontSize={3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Biografía
      </Text>

      <GLBCharacterLoader
        objPath={URL_KENSAI_CHARACTER}
        position={currentInitialPosition}
        scale={1.5}
        currentAnimation={activeAnim}
        onAnimationsLoaded={handleAnimationsLoaded}
      />
    </>
  );
}
