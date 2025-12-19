import { Text } from "@react-three/drei";
import { BioCharacterController } from "@/components/portfolio/composite";
import { Vector3TypeUI } from "@/types/global";

const currentInitialPosition: Vector3TypeUI = [2.5, 30, -10];

export function MainSceneBio() {
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
      <BioCharacterController
        activePose={1}
        position={currentInitialPosition}
        scale={0.035}
      />
    </>
  );
}
