"use client";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OrbitControls as TSOribitControls } from "three-stdlib";
import gsap from "gsap";

import { mainCameraPresets } from "./presetsMainCamera";
import { CameraRig } from "@/components/portfolio/base";
import { degToRad } from "@/utils";
import {
  CameraControllerMainUI,
  CameraMotionToScenesUI,
  CameraPositionAndTargetUI,
  Vector3TypeUI,
} from "@/types/global";

// Función auxiliar para obtener datos del preset
const getPreset = (key: CameraMotionToScenesUI): CameraPositionAndTargetUI => {
  return mainCameraPresets[key];
};

export function CameraControllerMain({
  motionType,
  motionScene,
  activeCamera,
  duration = 5,
  onTransitionFinish,
}: CameraControllerMainUI) {
  const { camera } = useThree();
  const controlsRef = useRef<TSOribitControls | null>(null);


  const [isRigActive, setIsRigActive] = useState(false);
  const [orbitTarget, setOrbitTarget] = useState<Vector3TypeUI>([0, 3, 0]);

  // Posiciones fijas para la Intro
  const initialPos = getPreset('camera-scene/initial');
  const introEndPos = getPreset('camera-scene/intro');


  useLayoutEffect(() => {
    if (initialPos) {
      camera.position.set(initialPos.camera.x, initialPos.camera.y, initialPos.camera.z);
      camera.lookAt(initialPos.target.x, initialPos.target.y, initialPos.target.z);
    }
  }, []); 

 
  useEffect(() => {
    if (!activeCamera) return;

    if (motionType === "camera/in-motion") {
      setIsRigActive(true);
    } else {
      setIsRigActive(false);
   
      const targetPreset = mainCameraPresets[motionScene];
      if (targetPreset) {
        // Animamos hacia la escena seleccionada
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
    }
  }, [activeCamera, motionType, motionScene]);

  return (
    <>
      {/* El Rig solo renderiza si está activo */}
      {isRigActive && (
        <CameraRig
          active={isRigActive}
          startPosition={initialPos}
          endPosition={introEndPos}
          duration={duration}
          onFinish={() => {
            setIsRigActive(false);
            setOrbitTarget([introEndPos.target.x, introEndPos.target.y, introEndPos.target.z]);
            onTransitionFinish?.();
          }}
        />
      )}

      <OrbitControls
        ref={controlsRef}
        enabled={!isRigActive && activeCamera}
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