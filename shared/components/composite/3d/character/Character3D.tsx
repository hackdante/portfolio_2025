"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useFBX,
  useAnimations,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { degToRad } from "@/utils";
import { Group } from "three";

interface SinglePoseModelPropsUI {
  index: number;
}

const POSES = [0, 1, 4];
const BASE_URL = "/portfolio/models/anim/bio/poser_0";

POSES.forEach((i) => {
  useFBX.preload(`${BASE_URL}${i}.fbx`);
});

function SinglePoseModel({ index }: SinglePoseModelPropsUI) {
  const modelRef = useRef<Group>(null);
  const fbx = useFBX(`${BASE_URL}${index}.fbx`);
  const { actions, names } = useAnimations(fbx.animations, modelRef);

  useEffect(() => {
    if (!names.length) return;

    const action = actions[names[0]];
    action?.reset().fadeIn(0.35).play();

    return () => {
      action?.fadeOut(0.25);
    };
  }, [actions, names]);

  return (
    <group ref={modelRef}>
      <primitive object={fbx} />
    </group>
  );
}

export default function Character3D() {
  return (
    <div className="relative bg-transparent w-full h-[800px]">
      <Canvas
        shadows
        camera={{
          position: [1, 2, 15],
          rotation: [
            degToRad(0),
            degToRad(0),
            degToRad(0),
          ],
          fov: 35,
        }}
      >
        <ambientLight intensity={1.7} />

        <directionalLight
          position={[5, 10, 9]}
          intensity={1.5}
          castShadow
        />

        <spotLight
          position={[-5, 10, 5]}
          intensity={1.5}
        />

        <Suspense
          fallback={
            <Html center>
              <div
                className="text-ui-primary text-xl font-bold animate-pulse"
                role="status"
              >
                CARGANDO AVATAR...
              </div>
            </Html>
          }
        >
          <group position={[1, -1.2, 0]} scale={0.03}>
            <SinglePoseModel index={1} />
          </group>

          <Environment preset="city" />

          <ContactShadows
            opacity={0.5}
            scale={20}
            blur={2}
            far={4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
