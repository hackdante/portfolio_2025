"use client";

import { useEffect, useMemo } from "react";
import { useFBX } from "@react-three/drei";
import { Mesh } from "three";
import { SkeletonUtils } from "three-stdlib";

interface LoadFBXModelUI {
  path: string;
  position?: [number, number, number];
  scale?: number;
  onLoad?: (object: any) => void;
}

export function LoadFBXModel({ 
  path, 
  position = [0, 0, 0], 
  scale = 1,
  onLoad
}: LoadFBXModelUI) {
  const fbx = useFBX(path);
  
  const clone = useMemo(() => {
    return SkeletonUtils.clone(fbx);
  }, [fbx]);

  useEffect(() => {
    if (onLoad) onLoad(clone);
    
    return () => {
      clone.traverse((child) => {
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
  }, [clone, onLoad]);

  return (
    <primitive 
      object={clone} 
      position={position} 
      scale={[scale, scale, scale]} 
    />
  );
}