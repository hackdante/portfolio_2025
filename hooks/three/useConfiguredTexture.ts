
"use client";
import { useTexture } from "@react-three/drei";
import { RepeatWrapping, Texture } from "three";
import { useThree } from "@react-three/fiber";

export function useConfiguredTexture(
  url: string,
  repeat: [number, number] = [60, 60]
): Texture {
  const { gl } = useThree();
  const maxAnisotropy = gl.capabilities.getMaxAnisotropy();

  const texture = useTexture(url, (t: Texture) => {
    t.wrapS = t.wrapT = RepeatWrapping;
    t.repeat.set(repeat[0], repeat[1]);
    t.anisotropy = maxAnisotropy;

    t.needsUpdate = true;
  });

  return texture;
}
