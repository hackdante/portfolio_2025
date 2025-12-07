'use client";';
import {
  Environment,
  OrbitControls,
  Text,
  useTexture,
} from "@react-three/drei";

import { useRef } from "react";
import * as THREE from "three";
import {
  CameraRig,
  LoadGBLModel,
  Particles3dV1,
} from "@/components/portfolio/base";
import { useIsMobile } from "@/hooks";

const URL_KENSAI_MODEL = "/portfolio/models/kensai-icon-3d/model.glb";
const URL_FLOOR_TEXTURE = "/portfolio/models/hero-3d-scene/vector_grid.jpg";
const URL_KENSAI_LOGO = "/portfolio/models/kensai-logo/logo_v1.glb";

const degToRad = (degrees: number) => {
  return (degrees * Math.PI) / 180;
};

interface MainScenePropsUI {
  sceneReady: boolean;
}

export function MainScene({ sceneReady = false }: MainScenePropsUI) {
  const isMobile = useIsMobile();
  const dirLight = useRef<THREE.DirectionalLight>(null!);
  const pointLight = useRef<THREE.PointLight>(null!);

  const minElevation = degToRad(90);
  const maxElevation = degToRad(90);
  const minAzimuth = degToRad(0);
  const maxAzimuth = degToRad(0);

  const gridTexture = useTexture(URL_FLOOR_TEXTURE);

  gridTexture.wrapS = gridTexture.wrapT = THREE.RepeatWrapping;
  gridTexture.repeat.set(100, 100);

  gridTexture.anisotropy = 16;

  gridTexture.needsUpdate = true;

  return (
    <>
      <CameraRig
        active={sceneReady}
        startPosition={{
          camera: isMobile ? { x: 5, y: 1, z: 40 } : { x: 10, y: 0, z: 60 },
          target: { x: 0, y: 0, z: 0 },
        }}
        endPosition={{
          camera: isMobile ? { x: 2, y: 1, z: 17 } : { x: 2, y: 0, z: 15 },
          target: { x: 0, y: 0, z: 0 },
        }}
        duration={20}
        ease="power3.out"
      />
      <ambientLight intensity={0.5} />

      <directionalLight
        ref={dirLight}
        position={[5, 10, 5]}
        intensity={3.5}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-right={10}
      />

      <pointLight ref={pointLight} position={[0, 20, -2]} intensity={2} />

      <ambientLight intensity={0.35} />

      <OrbitControls
        enabled={!sceneReady}
        minPolarAngle={minElevation}
        maxPolarAngle={maxElevation}
        minAzimuthAngle={minAzimuth}
        maxAzimuthAngle={maxAzimuth}
        target={[3, 0, 0]}
      />

      <Environment preset="city" />
      <fog attach="fog" args={["#ffffff", 8, 27]} />

      <LoadGBLModel objPath={URL_KENSAI_MODEL} position={[-3, 0, 0]} />
      <LoadGBLModel
        objPath={URL_KENSAI_LOGO}
        position={[2, -0.7, 0]}
        scale={0.008}
      />
      <Text
        position={[-0.5, 1.3, 0]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Bienvenidos a
      </Text>

      <Particles3dV1
        count={isMobile ? 150 : 400}
        area={isMobile ? 50 : 100}
        fallSpeed={0.005}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.93, 0]}
        castShadow
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />

        <meshStandardMaterial
          map={gridTexture}
          color="#eeeeee"
          roughness={1}
          metalness={0}
        />
      </mesh>
    </>
  );
}
