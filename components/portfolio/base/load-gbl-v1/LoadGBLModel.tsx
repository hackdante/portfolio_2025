"use client";

import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import { useLayoutEffect, useMemo } from "react";

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
    clonedScene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;

        if (obj.material) {
          obj.material.depthWrite = true;
          obj.material.transparent = false; 
          obj.material.alphaTest = 0;        
          obj.material.needsUpdate = true;
        }
      }
    });
  }, [clonedScene]);

  return <primitive object={clonedScene} {...props} />;
}
