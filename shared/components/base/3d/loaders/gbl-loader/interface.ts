import { AnimationClip, Material, Object3D } from "three";
import { GLTF } from "three-stdlib";

export interface GLTFResultUI extends GLTF {
  nodes: Record<string, Object3D>;
  materials: Record<string, Material>;
  animations: AnimationClip[];
}

export interface GLBCharacterLoaderUI{
  objPath: string;
  currentAnimation?: string;
  position?: [number, number, number];
  scale?: number;
  onAnimationsLoaded?: (names: string[]) => void;
}