"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { AnimationMixer, Group, Mesh } from "three";
import { LoadFBXModel } from "@/components/portfolio/base";

interface BioCharacterControllerUI {
  activePose: 1 | 2 | 3;
  position?: [number, number, number];
  scale?: number;
}

const URL_KENSAI_MODEL_ANIM = "/portfolio/models/anim/bio";

export function BioCharacterController({
  activePose,
  position = [0, 0, 0],
  scale = 0.05
}: BioCharacterControllerUI) {
  const mixerRef = useRef<AnimationMixer | null>(null);

  const poses = {
    1: `${URL_KENSAI_MODEL_ANIM}/poser_01.fbx`,
    2: `${URL_KENSAI_MODEL_ANIM}/poser_02.fbx`,
    3: `${URL_KENSAI_MODEL_ANIM}/poser_03.fbx`,
  };

  const handleLoad = (clonedFbx: Group) => {
    if (mixerRef.current) {
      mixerRef.current.stopAllAction();
      mixerRef.current.uncacheRoot(mixerRef.current.getRoot());
    }
    clonedFbx.traverse((child) => {
      if (child instanceof Mesh) {
        child.frustumCulled = false;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    clonedFbx.updateMatrixWorld(true);

    const newMixer = new AnimationMixer(clonedFbx);
    if (clonedFbx.animations && clonedFbx.animations.length > 0) {
      const action = newMixer.clipAction(clonedFbx.animations[0]);
      action.reset().play();
    }
    mixerRef.current = newMixer;
  };

  useEffect(() => {
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }
    };
  }, [activePose]);

  useFrame((_state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return (
    <group position={position}>
      <LoadFBXModel 
        key={`pose-v4-${activePose}`}
        path={poses[activePose]} 
        scale={scale} 
        onLoad={handleLoad} 
      />
    </group>
  );
}