"use client";

import { useGLTF } from "@react-three/drei";
import { Object3D, BufferGeometry, Material, InstancedMesh, Mesh } from "three";
import { useMemo, useRef, useEffect } from "react";

interface MeshUI {
  scale: number;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  castShadow: boolean;
  receiveShadow: boolean;
}

interface InstancedModelPropsUI {
  src: string;
  meshes: MeshUI[];
}

export function InstancedModel({ src, meshes }: InstancedModelPropsUI) {
  const gltf = useGLTF(src);
  const instancedRefs = useRef<InstancedMesh[]>([]);
  const parts = useMemo(() => {
    const extracted: { geometry: BufferGeometry; material: Material }[] = [];

    gltf.scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        const mat = Array.isArray(obj.material)
          ? obj.material[0]
          : obj.material;

        extracted.push({
          geometry: obj.geometry.clone(),
          material: mat,
        });
      }
    });

    return extracted;
  }, [gltf]);

  const matrices = useMemo(() => {
    const temp = new Object3D();

    return meshes.map((m) => {
      temp.position.set(m.position.x, m.position.y, m.position.z);
      temp.rotation.set(m.rotation.x, m.rotation.y, m.rotation.z);
      temp.scale.setScalar(m.scale);
      temp.updateMatrix();
      return temp.matrix.clone();
    });
  }, [meshes]);

  useEffect(() => {
    instancedRefs.current.forEach((instanced) => {
      if (!instanced) return;

      matrices.forEach((matrix, i) => {
        instanced.setMatrixAt(i, matrix);
      });

      instanced.instanceMatrix.needsUpdate = true;
    });

    return () => {
      parts.forEach((part) => {
        part.geometry.dispose();
      });

      instancedRefs.current = [];
    };
  }, [matrices, parts]);

  if (parts.length === 0) return null;

  return (
    <>
      {parts.map((part, idx) => (
        <instancedMesh
          key={idx}
          ref={(el) => {
            if (el) instancedRefs.current[idx] = el;
          }}
          args={[part.geometry, part.material, meshes.length]}
          castShadow={meshes[0]?.castShadow ?? false}
          receiveShadow={meshes[0]?.receiveShadow ?? false}
        />
      ))}
    </>
  );
}
