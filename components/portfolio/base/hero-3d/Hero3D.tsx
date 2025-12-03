"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import { LoadGBLModel } from "@/components/portfolio/base";

const URL_KENSAI_MODEL = "/portfolio/models/kensai_icon_3d/model.glb";
const URL_FLOOR_TEXTURE = "/portfolio/models/hero-3d-scene/vector_grid.jpg";

function Scene() {
  const dirLight = useRef<THREE.DirectionalLight>(null!);
  const pointLight = useRef<THREE.PointLight>(null!);

  const gridTexture = useLoader(THREE.TextureLoader, URL_FLOOR_TEXTURE);

  gridTexture.wrapS = gridTexture.wrapT = THREE.RepeatWrapping;
  gridTexture.repeat.set(40, 40);

  gridTexture.anisotropy = 16;

  gridTexture.needsUpdate = true;

  // Helpers visuales:
  useHelper(dirLight, THREE.DirectionalLightHelper, 0.5);
  useHelper(pointLight, THREE.PointLightHelper, 0.3);

  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight
        ref={dirLight}
        position={[5, 5, 5]}
        intensity={15}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <pointLight ref={pointLight} position={[-4, 2, -2]} intensity={2} />

      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />

      <Environment preset="studio" />

      <fog attach="fog" args={["#ffffff", 10, 20]} />

      <LoadGBLModel objPath={URL_KENSAI_MODEL} />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.93, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          resolution={1024}
          mixBlur={3}
          mixStrength={5}
          roughness={0.1}
          blur={[300, 100]}
          metalness={0.2}
          mirror={0.5}
          depthScale={0.2}
          minDepthThreshold={0.8}
          maxDepthThreshold={1}
          color="#ffffff"
          map={gridTexture}
        />
      </mesh>
    </>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-screen">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 1.5, 2], fov: 45 }}
        shadows
      >
        <Scene />
      </Canvas>
    </div>
  );
}
