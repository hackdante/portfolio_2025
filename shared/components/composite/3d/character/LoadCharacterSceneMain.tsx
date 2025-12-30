import { OrbitControls } from "@react-three/drei";

export function LoadCharacterSceneMain() {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
      />
      <ambientLight />
      <directionalLight position={[-5, 8, 8]} />
    </>
  );
}
