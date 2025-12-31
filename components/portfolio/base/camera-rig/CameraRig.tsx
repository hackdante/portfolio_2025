"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { CameraRigPropsUI } from "./interface";

export function CameraRig({
  active,
  startPosition,
  endPosition,
  duration = 3,
  ease = "power1.out",
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

    const lookTarget = {
      x: startPosition.target.x,
      y: startPosition.target.y,
      z: startPosition.target.z,
    };

    const tl = gsap.timeline({
      onComplete: () => onFinish?.(endPosition),
    });

    tl.to(
      camera.position,
      {
        duration,
        x: endPosition.camera.x,
        y: endPosition.camera.y,
        z: endPosition.camera.z,
        ease,
        onUpdate: () => {
          camera.lookAt(lookTarget.x, lookTarget.y, lookTarget.z);
        },
      },
      0
    );

    tl.to(
      lookTarget,
      {
        duration,
        x: endPosition.target.x,
        y: endPosition.target.y,
        z: endPosition.target.z,
        ease,
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, [active, camera, startPosition, endPosition, duration, ease, onFinish]);

  return null;
}
