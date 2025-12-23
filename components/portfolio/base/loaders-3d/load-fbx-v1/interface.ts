import { Vector3TypeUI } from "@/types/global";
import { Group } from "three";
export interface LoadFBXModelUI {
  path: string;
  position?: Vector3TypeUI;
  scale?: number;
  onLoad?: (object: Group) => void;
}
