"use client";

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three-stdlib";
import { MTLLoader } from "three-stdlib";

interface OBJModelProps {
  objPath: string;
  mtlPath: string;
}

export function LoadOBJModel({ objPath, mtlPath }: OBJModelProps) {
  const materials = useLoader(MTLLoader, mtlPath);
  materials.preload();

  const obj = useLoader(OBJLoader, objPath, (loader) => {
    loader.setMaterials(materials);
  });

  return <primitive object={obj} />;
}