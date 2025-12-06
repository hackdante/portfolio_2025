"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface Particle {
  x: number;
  y: number;
  z: number;
  rotation: number;
  speed: number;          // velocidad de caída
  opacity: number;        // fade out
  scale: number;          // tamaño variable
  landed: boolean;        // si ya tocó el suelo
}

export function Particles3dV1({
  count = 80,
  area = 50,
  fallSpeed = 0.02,
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);

  const minY = -0.7; // nivel del suelo

  const createParticle = (): Particle => ({
    x: (Math.random() - 0.5) * area,
    y: Math.random() * 5 + 1,
    z: (Math.random() - 0.5) * area,
    rotation: Math.random() * Math.PI,
    speed: fallSpeed + Math.random() * fallSpeed * 0.5,
    opacity: 1,
    scale: 0.4 + Math.random() * 0.3,
    landed: false,
  });

  const particles = useMemo<Particle[]>(
    () => Array.from({ length: count }, createParticle),
    [count, area, fallSpeed]
  );

  const respawn = (p: Particle) => {
    Object.assign(p, createParticle());
  };

  useFrame(() => {
    const mesh = meshRef.current;
    const dummy = new THREE.Object3D();

    particles.forEach((p, i) => {
      if (!p.landed) {
        // caída natural
        p.y -= p.speed;

        // colisión real (sin rebote)
        if (p.y <= minY) {
          p.y = minY;
          p.landed = true;

          // rebote súper pequeño opcional:
          // p.y += 0.05;
        }

        // viento suave
        p.x += Math.sin(p.y * 0.5) * 0.002;
        p.z += Math.cos(p.y * 0.6) * 0.002;

        p.rotation += 0.01;
      } else {
        // ciclo corto: fade rápido y shrink
        p.opacity -= 0.02;
        p.scale -= 0.01;

        // cuando desaparece → respawn
        if (p.opacity <= 0 || p.scale <= 0.05) respawn(p);
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
        side={THREE.DoubleSide}
      />
    </instancedMesh>
  );
}
