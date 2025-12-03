"use client";

import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import { useEffect } from "react";

type ModelProps = Omit<ThreeElements["primitive"], "object"> & {
  objPath: string;
};

export function LoadGBLModel({ objPath, ...props }: ModelProps) {
  const { scene } = useGLTF(objPath);

  useEffect(() => {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;

        if (obj.material) {
          // 1. Asegurar que el material no esté marcado como estático (para reflejos dinámicos)
          obj.material.isMeshStandardMaterial = true; // Forzar tipo común // 2. Solucionar el problema de renderizado del reflejo

          obj.material.depthTest = true;
          obj.material.transparent = true; // A menudo ayuda con los reflejos
          obj.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}
