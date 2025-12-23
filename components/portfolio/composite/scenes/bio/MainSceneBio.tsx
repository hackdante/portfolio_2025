"use client";
import { LoadOBJModel } from "@/components/portfolio/base";
import { Text } from "@react-three/drei";
// import { LoadFBXModel } from "@/components/portfolio/base";

//const URL_KENSAI_ROM = "/portfolio/models/roms/rom_fbx.fbx";
const URL_KENSAI_ROM = "/portfolio/models/roms/room.obj";
const URL_KENSAI_MAT = "/portfolio/models/roms/room.mtl";


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

      <LoadOBJModel  objPath={URL_KENSAI_ROM} mtlPath={URL_KENSAI_MAT} position={[15, 33, 8]} scale={0.017} rotation={[0,90,0]} />

      {/* <LoadFBXModel path={URL_KENSAI_ROM} scale={0.005} position={[2.5, 30, -15]}  /> */}
    </>
  );
}
