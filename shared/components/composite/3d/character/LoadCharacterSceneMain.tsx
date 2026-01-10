'use client'

import { ContactShadows, OrbitControls } from "@react-three/drei";

export function LoadCharacterSceneMain() {
  return (
    <>
      <ambientLight />
      <directionalLight position={[-5, 8, 8]} />

      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2 - 0.17} 
        maxPolarAngle={Math.PI / 2 + 0.17} 
        makeDefault 
      />
      <ContactShadows
 opacity={0.6}
        scale={15}
        blur={1}
        far={100}
        resolution={256}
        color="#000000"
        position={[0, -2.01, 0]}
      />
    </>
  );
}
