import { CameraPresetsUI } from "@/types";

export const mainCameraPresets = {
  "camera-scene/initial": {
    camera: { x: 0, y: 0, z: 100 },
    target: { x: 0, y: 0, z: 0 },
  },

  "camera-scene/intro": {
    camera: { x: 0, y: 0, z: 14 },
    target: { x: 0, y: 3, z: 0 },
  },

  "camera-scene/portfolio": {
    camera: { x: 35, y: 20, z: 8 },
    target: { x: 35, y: 20, z: -20 },
  },

  "camera-scene/bio": {
    camera: { x: 0, y: 35, z: 10 },
    target: { x: 0, y: 35, z: -20 },
  },

  "camera-scene/contact": {
     camera: { x: -35, y: 10, z: 8 },
    target: { x: -35, y: 10, z:-20 },
  },
} satisfies CameraPresetsUI;
