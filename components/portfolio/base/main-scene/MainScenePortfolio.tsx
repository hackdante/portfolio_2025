import { Text } from "@react-three/drei";
import { LoadFBXModel } from "@/components/portfolio/base";
import { Vector3TypeUI } from "@/types/global";
import { BioCharacterController } from "../../composite";

const currentInitialPosition: Vector3TypeUI = [35, 18, -10];

export function MainScenePortfolio() {
  return (
    <>
          <Text
        position={[35, 24, -20]}
        fontSize={1.3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
       Contácto: 3136211448
      </Text>
      <Text
        position={[35, 20, -20]}
        fontSize={3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Portafolio
      </Text>

      <BioCharacterController
        activePose={1}
        position={currentInitialPosition}
        scale={0.025}
      />
    </>
  );
}
