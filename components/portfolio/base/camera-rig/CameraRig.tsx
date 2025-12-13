"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { Vector3UI } from "@/types/global";


export interface CameraRigFinishPayloadUI {
  camera: Vector3UI;
  target: Vector3UI;
}

interface CameraRigPropsUI {
  active: boolean;
  startPosition: { camera: Vector3UI; target: Vector3UI };
  endPosition: { camera: Vector3UI; target: Vector3UI };
  duration?: number;
  ease?: gsap.TweenVars["ease"];
  onFinish?: (payload: CameraRigFinishPayloadUI) => void;
}

export function CameraRig({
  active,
  startPosition,
  endPosition,
  duration = 3,
  ease = "power3.out",
  onFinish,
}: CameraRigPropsUI) {
  const { camera } = useThree();

  useEffect(() => {
    if (!active) return;

    camera.position.set(
      startPosition.camera.x,
      startPosition.camera.y,
      startPosition.camera.z
    );

    gsap.to(camera.position, {
      duration,
      x: endPosition.camera.x,
      y: endPosition.camera.y,
      z: endPosition.camera.z,
      ease,
      onUpdate: () => {
        camera.lookAt(
          endPosition.target.x,
          endPosition.target.y,
          endPosition.target.z
        );
      },
      onComplete: () =>
        onFinish?.({
          camera: {
            x: endPosition.camera.x,
            y: endPosition.camera.y,
            z: endPosition.camera.z,
          },
          target: {
            x: endPosition.target.x,
            y: endPosition.target.y,
            z: endPosition.target.z,
          },
        }),
    });
  }, [active]);

  return null;
}
