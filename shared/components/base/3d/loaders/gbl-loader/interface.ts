import { type ThreeElements } from "@react-three/fiber";
import { AnimationClip, Material, Object3D } from "three";
import { GLTF } from "three-stdlib";

export interface GLTFResultUI extends GLTF {
  nodes: Record<string, Object3D>;
  materials: Record<string, Material>;
  animations: AnimationClip[];
}

export interface ModelPropsUI
  extends Omit<ThreeElements["primitive"], "object"> {
  objPath: string;
  currentAnimation?: string;
  onAnimationsLoaded?: (names: string[]) => void;
}