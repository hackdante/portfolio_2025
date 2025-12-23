import { CameraMotionToScenesUI } from "@/types/global";

export interface MainSceneUI {
  activeActions: boolean;
  onNavigate: (section: CameraMotionToScenesUI) => void;
}
