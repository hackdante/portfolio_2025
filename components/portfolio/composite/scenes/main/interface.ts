import { CameraMotionToScenesUI } from "@/types";

export interface MainSceneUI {
  activeActions: boolean;
  onNavigate: (section: CameraMotionToScenesUI) => void;
}


