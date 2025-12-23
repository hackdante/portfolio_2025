'use client'
import { Text } from "@react-three/drei";
import { BioCharacterController } from "@/components/portfolio/composite";
import { Vector3TypeUI } from "@/types/global";

const currentInitialPosition: Vector3TypeUI = [-30, 8, -14];

export function MainSceneContact() {
  return (
    <>
      <Text
        position={[-37, 15.6, -20]}
        fontSize={0.7}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Contácto: 3136211448
      </Text>
      <Text
        position={[-35, 14, -20]}
        fontSize={3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Contacto
      </Text>
      <BioCharacterController
        activePose={1}
        position={currentInitialPosition}
        scale={0.035}
      />
    </>
  );
}
