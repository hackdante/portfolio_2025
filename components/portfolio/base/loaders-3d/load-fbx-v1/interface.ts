import { Vector3TypeUI } from "@/types/global";
import { Object3D } from "three";

export interface LoadFBXModelUI {
  path: string;
  position?: Vector3TypeUI;
  scale?: number;
  castShadow?: boolean;
  receiveShadow?: boolean;
  onLoad?: (object: Object3D) => void;
}