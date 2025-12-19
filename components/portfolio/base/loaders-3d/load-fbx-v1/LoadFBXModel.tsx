"use client";

import { useEffect } from "react";
import { useFBX } from "@react-three/drei";
import { Mesh } from "three";

interface LoadFBXModelUI {
  path: string;
  position?: [number, number, number];
  scale?: number;
}

export function LoadFBXModel({ 
  path, 
  position = [0, 0, 0], 
  scale = 1 
}: LoadFBXModelUI) {
  const fbx = useFBX(path);

  useEffect(() => {
    return () => {
      fbx.traverse((child) => {
        if (child instanceof Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else if (child.material) {
            child.material.dispose();
          }
        }
      });
    };
  }, [fbx]);

  return (
    <primitive 
      object={fbx} 
      position={position} 
      scale={[scale, scale, scale]} 
    />
  );
}