"use client";

import { InstancedMesh, Object3D, DoubleSide } from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Particles3dV1UI, ParticleUI } from "./interface";

const generateParticleData = (area: number, fallSpeed: number): ParticleUI => ({
  x: (Math.random() - 0.5) * area,
  y: Math.random() * 5 + 1,
  z: (Math.random() - 0.5) * area,
  rotation: Math.random() * Math.PI,
  speed: fallSpeed + Math.random() * fallSpeed * 0.5,
  opacity: 1,
  scale: 0.4 + Math.random() * 0.3,
  landed: false,
});

export function Particles3dV1({
  count = 80,
  area = 50,
  fallSpeed = 0.02,
}: Particles3dV1UI) {
  const meshRef = useRef<InstancedMesh>(null!);

  const dummy = useMemo(() => new Object3D(), []);

  const minY = -0.7; 

  const particles = useMemo<ParticleUI[]>(
    () => Array.from({ length: count }, () => generateParticleData(area, fallSpeed)),
    [count, area, fallSpeed]
  );

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    particles.forEach((p, i) => {
      if (!p.landed) {
        p.y -= p.speed;

        if (p.y <= minY) {
          p.y = minY;
          p.landed = true;
        }

        p.x += Math.sin(p.y * 0.5) * 0.002;
        p.z += Math.cos(p.y * 0.6) * 0.002;
        p.rotation += 0.01;
      } else {
        p.opacity -= 0.02;
        p.scale -= 0.01;

        if (p.opacity <= 0 || p.scale <= 0.05) {
          Object.assign(p, generateParticleData(area, fallSpeed));
        }
      }

      dummy.position.set(p.x, p.y, p.z);
      dummy.rotation.set(p.rotation, p.rotation * 0.5, p.rotation * 0.7);
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <planeGeometry args={[0.25, 0.18]} />
      <meshStandardMaterial
        transparent
        opacity={1}
        roughness={0.9}
        color="#ff4b7f"
        side={DoubleSide}
      />
    </instancedMesh>
  );
}