import { Mesh } from "three";

type PivoteUI = "center" | "top" | "bottom" | "left" | "right";

export interface Font3DPropsUI {
  innerRef?: React.RefObject<Mesh | null>;
  text: string;
  font: string;
  size: number;
  position: [number, number, number];
  rotation?: [number, number, number];
  material?: React.ReactNode;
  extrude?: number;
  pivot?: PivoteUI;
  children?: React.ReactNode; 
}