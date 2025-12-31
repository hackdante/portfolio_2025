import { Vector3UI } from "@/types";


export interface CameraRigFinishPayloadUI {
  camera: Vector3UI;
  target: Vector3UI;
}

export interface CameraRigPropsUI {
  active: boolean;
  startPosition: { camera: Vector3UI; target: Vector3UI };
  endPosition: { camera: Vector3UI; target: Vector3UI };
  duration?: number;
  ease?: gsap.TweenVars["ease"];
  onFinish?: (payload: CameraRigFinishPayloadUI) => void;
}