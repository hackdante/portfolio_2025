"use client";

import { useEffect, useRef, useState, useLayoutEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OrbitControls as TSOribitControls } from "three-stdlib";
import gsap from "gsap";

import { mainCameraPresets } from "./presetsMainCamera";
import { CameraRig } from "@/components/portfolio/base";
import { degToRad } from "@/utils";
import {
  CameraControllerMainUI,
  Vector3TypeUI,
} from "@/types/global";

export function CameraControllerMain({
  motionType,
  motionScene,
  activeCamera,
  duration = 5,
  onTransitionFinish,
}: CameraControllerMainUI) {
  const { camera } = useThree();
  const controlsRef = useRef<TSOribitControls | null>(null);

  const isMotionIn = motionType === "camera/in-motion";
  
  const [internalRigActive, setInternalRigActive] = useState(isMotionIn);
  const [orbitTarget, setOrbitTarget] = useState<Vector3TypeUI>([0, 3, 0]);

  const [prevMotionType, setPrevMotionType] = useState(motionType);
  if (motionType !== prevMotionType) {
    setInternalRigActive(isMotionIn);
    setPrevMotionType(motionType);
  }

  const initialPos = useMemo(() => mainCameraPresets['camera-scene/initial'], []);
  const introEndPos = useMemo(() => mainCameraPresets['camera-scene/intro'], []);

  useLayoutEffect(() => {
    if (initialPos && camera) {
      camera.position.set(initialPos.camera.x, initialPos.camera.y, initialPos.camera.z);
      camera.lookAt(initialPos.target.x, initialPos.target.y, initialPos.target.z);
    }
  }, [camera, initialPos]); 

  useEffect(() => {
    if (!activeCamera || isMotionIn) return;

    const targetPreset = mainCameraPresets[motionScene];
    if (targetPreset) {
      gsap.to(camera.position, {
        x: targetPreset.camera.x,
        y: targetPreset.camera.y,
        z: targetPreset.camera.z,
        duration: 2,
        ease: "power2.out"
      });

      if (controlsRef.current) {
        gsap.to(controlsRef.current.target, {
          x: targetPreset.target.x,
          y: targetPreset.target.y,
          z: targetPreset.target.z,
          duration: 2,
          onUpdate: () => controlsRef.current?.update()
        });
      }
    }
  }, [activeCamera, isMotionIn, motionScene, camera]);

  return (
    <>
      {internalRigActive && (
        <CameraRig
          active={internalRigActive}
          startPosition={initialPos}
          endPosition={introEndPos}
          duration={duration}
          onFinish={() => {
            setInternalRigActive(false);
            setOrbitTarget([introEndPos.target.x, introEndPos.target.y, introEndPos.target.z]);
            onTransitionFinish?.();
          }}
        />
      )}

      <OrbitControls
        ref={controlsRef}
        enabled={!internalRigActive && activeCamera}
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        dampingFactor={0.12}
        rotateSpeed={0.1}
        target={orbitTarget}
        minPolarAngle={degToRad(88)}
        maxPolarAngle={degToRad(102)}
        maxAzimuthAngle={degToRad(10)}
        minAzimuthAngle={degToRad(-10)}
      />
    </>
  );
}