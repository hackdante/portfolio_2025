"use client";

import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import { useLayoutEffect, useMemo } from "react";
import { Object3D, Mesh } from "three"; 

type ModelProps = Omit<ThreeElements["primitive"], "object"> & {
  objPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
};

export function LoadGBLModel({ objPath, ...props }: ModelProps) {
  const { scene } = useGLTF(objPath);

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  useLayoutEffect(() => {
    clonedScene.traverse((obj: Object3D) => {
      if (obj instanceof Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [clonedScene]);

  return <primitive object={clonedScene} {...props} />;
}
