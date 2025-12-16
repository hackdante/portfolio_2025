"use client";
import { useConfiguredTexture } from "@/hooks";

type PlaneMeshArgsUI = [number, number];
type PlanarMeshPositionUI = [number, number, number];

interface SceneFloorUI {
  size?: PlaneMeshArgsUI;
  position?: PlanarMeshPositionUI;
  textureURL?: string;
}

const URL_FLOOR_DEFAULT_TEXTURE =
  "/portfolio/models/hero-3d-scene/vector_grid.jpg";

export function SceneFloor({
  size = [100, 100],
  position = [0, -0.93, 0],
  textureURL,
}: SceneFloorUI) {
  const gridTexture = useConfiguredTexture(
    textureURL ?? URL_FLOOR_DEFAULT_TEXTURE
  );
  const rotationX = -Math.PI / 2;

  return (
    <mesh rotation={[rotationX, 0, 0]} position={position} receiveShadow>
      <planeGeometry args={size} />
      <meshPhysicalMaterial
        map={gridTexture}
        roughness={0.1}
        metalness={0}
        clearcoat={0.1}
        clearcoatRoughness={1}
        envMapIntensity={0.15}
      />
    </mesh>
  );
}
