"use client";

import { useLoader, type ThreeElements } from "@react-three/fiber";
import { OBJLoader, MTLLoader } from "three-stdlib";
import { useLayoutEffect, useMemo } from "react";
import { Mesh, Object3D } from "three";


type OBJModelProps = Omit<ThreeElements["primitive"], "object"> & {
  objPath: string;
  mtlPath: string;
};

export function LoadOBJModel({ objPath, mtlPath, ...props }: OBJModelProps) {

  const materials = useLoader(MTLLoader, mtlPath);
  
  useMemo(() => {
    materials.preload();
  }, [materials]);


  const obj = useLoader(OBJLoader, objPath, (loader) => {
    loader.setMaterials(materials);
  });


  const clonedObj = useMemo(() => obj.clone(), [obj]);


  useLayoutEffect(() => {
    clonedObj.traverse((child: Object3D) => {
      if (child instanceof Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      
        if (child.material) {
          child.material.needsUpdate = true;
        }
      }
    });
  }, [clonedObj]);

  // 5. Retornamos la primitiva pasando el resto de props (position, rotation, scale)
  return <primitive object={clonedObj} {...props} />;
}