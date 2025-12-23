import { Vector3TypeUI } from "@/types/global";
import { ReactNode } from "react";

type PivotType = "center" | "top" | "bottom" | "left" | "right";

export interface Font3DCompositePropsUI {
  text: string;
  font: string;
  size: number;
  position: Vector3TypeUI;
  rotation?: Vector3TypeUI;
  pivot?: PivotType;
  material?: ReactNode;
  debug?: boolean;
}
