"use client";

import { Text, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { RepeatWrapping } from "three";

import {
  InstancedModel,
  LoadGBLModel,
  Particles3dV1,
  Font3D,
} from "@/components/portfolio/base";

import { useIsMobile } from "@/hooks";
import { sakuraTreeAPI } from "@/apis/local/main-scene";

const URL_KENSAI_MODEL = "/portfolio/models/kensai-icon-3d/model.glb";
const URL_FLOOR_TEXTURE = "/portfolio/models/hero-3d-scene/vector_grid.jpg";
const URL_KENSAI_LOGO = "/portfolio/models/kensai-logo/logo_v1.glb";
const URL_SAKURA_TREE = "/portfolio/models/sakura-tree/sakura_tree.glb";
const URL_PAGODA = "/portfolio/models/pagoda/pagoda.glb";
const URL_GATE_MODEL = "/portfolio/models/gate/gate.glb";

const degToRad = (d: number) => (d * Math.PI) / 180;

export function MainScene() {
  const isMobile = useIsMobile();

  const gridTexture = useTexture(URL_FLOOR_TEXTURE);
  useMemo(() => {
    gridTexture.wrapS = gridTexture.wrapT = RepeatWrapping;
    gridTexture.repeat.set(60, 60);
    gridTexture.anisotropy = 8;
    gridTexture.needsUpdate = true;
  }, [gridTexture]);

  return (
    <>
      <fog attach="fog" args={["#ffffff", 8, 35]} />

      <InstancedModel src={URL_SAKURA_TREE} meshes={sakuraTreeAPI} />

      <LoadGBLModel
        scale={1}
        objPath={URL_GATE_MODEL}
        position={[0, -0.96, 20]}
        castShadow
        receiveShadow
      />

      <LoadGBLModel
        scale={0.8}
        objPath={URL_KENSAI_MODEL}
        position={isMobile ? [0, -0.18, -2] : [0, -0.186, 0]}
        castShadow
        receiveShadow
      />

      <Text
        position={isMobile ? [0, 8.8, -2] : [-0.5, 7.2, 0]}
        fontSize={isMobile ? 0.35 : 0.3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Bienvenidos a
      </Text>

      <LoadGBLModel
        objPath={URL_KENSAI_LOGO}
        scale={isMobile ? 0.005 : 0.0035}
        position={isMobile ? [0.3, 7.5, -2] : [0, 6.2, 0]}
        rotation={[0.3, 0, 0]}
        castShadow
        receiveShadow
      />

      <LoadGBLModel
        objPath={URL_PAGODA}
        scale={0.3}
        position={[0, -1.4, -14]}
        castShadow
        receiveShadow
      />

      <Particles3dV1
        count={isMobile ? 150 : 350}
        area={isMobile ? 50 : 100}
        fallSpeed={0.004}
      />

      <Font3D
        reference="portfolio-title"
        font="helvetiker_regular.typeface.json"
        position={isMobile ? [-0.7, 3.3, 0] : [1.5, -0.8, 0]}
        rotation={
          isMobile
            ? [degToRad(0), degToRad(0), degToRad(0)]
            : [degToRad(0), degToRad(-30), degToRad(0)]
        }
        size={isMobile ? 0.25 : 0.27}
        extrude={0.01}
        text="Portafolio"
        material={
          <meshPhysicalMaterial
            color="#222222"
            roughness={1}
            metalness={0.7}
            clearcoat={1}
          />
        }
        pivot="bottom"
      />

      <Font3D
        reference="contacto-title"
        font="helvetiker_regular.typeface.json"
        position={isMobile ? [-0.7, 4, 0] : [-1.5, -0.8, 0.5]}
        rotation={
          isMobile
            ? [degToRad(0), degToRad(0), degToRad(0)]
            : [0, degToRad(30), 0]
        }
        size={isMobile ? 0.25 : 0.27}
        extrude={0.01}
        text="Biografia"
        material={
          <meshPhysicalMaterial
            color="#222222"
            roughness={1}
            metalness={0.7}
            clearcoat={1}
          />
        }
        pivot="bottom"
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.93, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />

        <meshPhysicalMaterial
          map={gridTexture}
          roughness={0.1}
          metalness={0}
          clearcoat={0.1}
          clearcoatRoughness={1}
          envMapIntensity={0.15}
        />
      </mesh>
    </>
  );
}
