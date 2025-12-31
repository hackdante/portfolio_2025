import { Vector3UI } from "./position";

export type CameraMotionToScenesUI =
  | "camera-scene/initial"
  | "camera-scene/intro"
  | "camera-scene/portfolio"
  | "camera-scene/bio"
  | "camera-scene/contact";

export interface CameraPositionAndTargetUI {
  camera: Vector3UI;
  target: Vector3UI;
}

export interface CameraPositionAndTargetUI {
  camera: Vector3UI;
  target: Vector3UI;
}

export type CameraPresetsUI = Record<
  CameraMotionToScenesUI,
  CameraPositionAndTargetUI
>;

export type CameraMotionTypeUI = "camera/in-motion" | "camera/out-motion";

export interface CameraControllerMainUI {
  motionType: CameraMotionTypeUI;
  motionScene: CameraMotionToScenesUI;
  activeCamera: boolean;
  duration?: number;
  onTransitionFinish?: () => void;
}
