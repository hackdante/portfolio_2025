"use client";

import { useMemo, useLayoutEffect } from "react";
import { useFBX } from "@react-three/drei";
import { Mesh } from "three";
import { SkeletonUtils } from "three-stdlib";
import { LoadFBXModelUI } from "./interface";

export function LoadFBXModel({
  path,
  position = [0, 0, 0],
  scale = 1,
  castShadow = true,
  receiveShadow = true,
  onLoad,
}: LoadFBXModelUI) {
  const fbx = useFBX(path);

  const clone = useMemo(() => {
    const object = SkeletonUtils.clone(fbx);

    object.traverse((child) => {
      if (child instanceof Mesh) {
        child.castShadow = castShadow;
        child.receiveShadow = receiveShadow;
      }
    });

    return object;
  }, [fbx, castShadow, receiveShadow]);

  useLayoutEffect(() => {
    if (onLoad) {
      onLoad(clone);
    }

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
