import { Vector3TypeUI, Vector2TypeUI } from "@/types";

export type PlaneMeshArgsUI = Vector2TypeUI;
export type PlanarMeshPositionUI = Vector3TypeUI;

export interface SceneFloorUI {
  size?: PlaneMeshArgsUI;
  position?: PlanarMeshPositionUI;
  textureURL?: string;
}
