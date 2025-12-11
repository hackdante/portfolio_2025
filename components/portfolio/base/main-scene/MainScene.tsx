"use client";

import { Environment, Text, useTexture, useFont } from "@react-three/drei";
import { useRef, Suspense, useMemo } from "react";
import * as THREE from "three";
import {
  CameraRig,
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

interface MainScenePropsUI {
  sceneReady: boolean;
}

export function MainScene({ sceneReady }: MainScenePropsUI) {
  const isMobile = useIsMobile();
  const dirLight = useRef<THREE.DirectionalLight>(null);

  const gridTexture = useTexture(URL_FLOOR_TEXTURE);
  useMemo(() => {
    gridTexture.wrapS = gridTexture.wrapT = THREE.RepeatWrapping;
    gridTexture.repeat.set(60, 60);
    gridTexture.anisotropy = 8;
    gridTexture.needsUpdate = true;
  }, [gridTexture]);

  return (
    <Suspense fallback={null}>
      <CameraRig
        active={sceneReady}
        startPosition={{
          camera: isMobile ? { x: 0, y: 1, z: 40 } : { x: 0, y: 1, z: 60 },
          target: { x: 0, y: 0, z: 0 },
        }}
        endPosition={{
          camera: isMobile ? { x: 0, y: 0, z: 16 } : { x: 0, y: 0, z: 15 },
          target: isMobile ? { x: 0, y: 3.5, z: 0 } : { x: 0, y: 2, z: 0 },
        }}
        duration={10}
        ease="circ.out"
      />

      <ambientLight intensity={0.45} />

      <directionalLight
        position={[3, 8, -5]}
        intensity={10}
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-bias={-0.0005}
      />

      <pointLight position={[0, 18, 0]} intensity={1.2} />

      <Environment preset="city" />

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
        position={isMobile ? [0, -0.18, -2] : [3, -0.186, 5]}
        castShadow
        receiveShadow
      />

      <LoadGBLModel
        objPath={URL_KENSAI_LOGO}
        scale={isMobile ? 0.005 : 0.009}
        position={isMobile ? [0.4, 7.5, -2] : [1, -0.75, 0]}
        castShadow
        receiveShadow
      />

      <LoadGBLModel
        objPath={URL_PAGODA}
        scale={0.3}
        position={[0, -1.4, -16]}
        castShadow
        receiveShadow
      />

      <Text
        position={isMobile ? [0, 8, 0] : [-2, 1.4, 0]}
        fontSize={isMobile ? 0.35 : 0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Bienvenidos a
      </Text>

      <Particles3dV1
        count={isMobile ? 150 : 350}
        area={isMobile ? 50 : 100}
        fallSpeed={0.004}
      />

      <Font3D
        reference="portfolio-title"
        font="helvetiker_regular.typeface.json"
        position={isMobile ? [-0.8, 4, 0] : [-4, 3, 0]}
        rotation={[degToRad(0), degToRad(0), degToRad(0)]}
        size={isMobile ? 0.25 : 0.3}
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
        position={isMobile ? [-0.8, 3, 0] : [0, 3, 0]}
        rotation={[degToRad(0), degToRad(0), degToRad(0)]}
        size={isMobile ? 0.25 : 0.3}
        extrude={0.02}
        text="Contacto"
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
        position={isMobile ? [-0.8, 2, 0] : [4, 3, 0]}
        rotation={[degToRad(0), degToRad(0), degToRad(0)]}
        size={isMobile ? 0.25 : 0.3}
        extrude={0.02}
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
    </Suspense>
  );
}
