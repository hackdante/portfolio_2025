"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

interface Vector3UI {
  x: number;
  y: number;
  z: number;
}

interface CameraRigPropsUI {
  active: boolean;
  startPosition: { camera: Vector3UI; target: Vector3UI };
  endPosition: { camera: Vector3UI; target: Vector3UI };
  duration?: number;
  ease?: gsap.TweenVars["ease"];  
  onFinish?: () => void;
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

    // Set start camera
    camera.position.set(
      startPosition.camera.x,
      startPosition.camera.y,
      startPosition.camera.z
    );

    // gsap tween for camera
    gsap.to(camera.position, {
      duration,
      x: endPosition.camera.x,
      y: endPosition.camera.y,
      z: endPosition.camera.z,
      ease,
      onUpdate: () => {
        // Smooth lookAt interpolation
        camera.lookAt(
          endPosition.target.x,
          endPosition.target.y,
          endPosition.target.z
        );
      },
      onComplete: () => onFinish?.(),
    });
  }, [active]);

  return null;
}
