import { Text } from "@react-three/drei";

export function MainSceneBio() {
  return (
    <>
      <Text
        position={[0, 37, -16]}
        fontSize={1}
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
    </>
  );
}
