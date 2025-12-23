import { Mesh } from "three";

export interface PivotDebuggerPropsUI {
  targetRef: React.RefObject<Mesh | null>;
  size?: number;
}
