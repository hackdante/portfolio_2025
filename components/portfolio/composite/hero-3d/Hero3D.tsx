"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress, Environment } from "@react-three/drei";
import { MainScene, Loader3d, CameraRig } from "@/components/portfolio/base";

import { OrbitControls as TSOribitControls } from "three-stdlib";
import { DirectionalLight } from "three";
import { Vector3UI } from "@/types/global";

// Tipos:
type CameraTypesUI = "camera/in-motion" | "camera/out-motion";

interface CameraSceneOptions {
  currentPosition: { camera: Vector3UI; target: Vector3UI };
  motionType: CameraTypesUI;
}

interface Hero3DScreenUI {
  currentScreen: { screenX: number; screenY: number } | null;
}

const degToRad = (d: number) => (d * Math.PI) / 180;

export function Hero3D({ currentScreen }: Hero3DScreenUI) {
  if (currentScreen === null) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 z-20">
          <Loader3d isConnecting={true} />
        </div>
      </div>
    );
  }

  const { progress, loaded } = useProgress();
  const [motionCamera, setMotionCamera] = useState<boolean>(true);
  const [isReady, setIsReady] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(false);
  const [cameraMotionType, setCameraMotionType] =
    useState<CameraTypesUI>("camera/in-motion");

  const [disableActions, setDisableActions] = useState<boolean>(true);

  const dirLight = useRef<DirectionalLight>(null);
  const controlsRef = useRef<TSOribitControls | null>(null);

  useEffect(() => {
    if (loaded > 0 && progress === 100) {
      const t = setTimeout(() => {
        setIsReady(true);
        setTimeout(() => setSceneVisible(true), 100);
      }, 300);

      return () => clearTimeout(t);
    }
  }, [progress, loaded]);

  const isMobile = useIsMobile();

  function updateMotionCamera({
    currentPosition,
    motionType,
  }: CameraSceneOptions) {
    setCameraMotionType(motionType);
    if (motionType === "camera/out-motion") {
      setMotionCamera(false);
      setDisableActions(false);
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!sceneVisible && (
        <div className="absolute inset-0 z-20">
          <Loader3d progress={progress} />
        </div>
      )}

      <div
        className={`
          w-full h-full 
          transition-opacity duration-1000 ease-out
          ${sceneVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        <Canvas shadows camera={{ fov: 35 }} gl={{ antialias: true }}>
          <color attach="background" args={["#ffffff"]} />
          <Suspense fallback={null}>
            <CameraRig
              active={motionCamera && isReady}
              startPosition={{
                camera: isMobile
                  ? { x: 0, y: 1, z: 40 }
                  : { x: 0, y: 0, z: 55 },
                target: isMobile
                  ? { x: 0, y: 3.5, z: 0 }
                  : { x: 0, y: 0, z: 0 },
              }}
              endPosition={{
                camera: isMobile
                  ? { x: 0, y: 0, z: 19 }
                  : { x: 0, y: 0, z: 18 },
                target: isMobile
                  ? { x: 0, y: 2.5, z: 0 }
                  : { x: 0, y: 3, z: 0 },
              }}
              duration={10}
              ease="circ.out"
              onFinish={(currentPosition) => {
                updateMotionCamera({
                  currentPosition,
                  motionType: "camera/out-motion",
                });
              }}
            />

            <OrbitControls
              ref={controlsRef}
              enabled={!motionCamera}
              enableZoom={false}
              enablePan={false}
              enableDamping={true}
              dampingFactor={0.12}
              rotateSpeed={0.1}
              target={isMobile ? [0, 2.5, 0] : [0, 3, 0]}
              minPolarAngle={degToRad(88)}
              maxPolarAngle={degToRad(103)}
              minAzimuthAngle={degToRad(-7)}
              maxAzimuthAngle={degToRad(7)}
            />

            <ambientLight intensity={0.45} />

            <directionalLight
              ref={dirLight}
              position={[3, 10, -5]}
              intensity={10}
              castShadow
              shadow-mapSize={[512, 512]}
              shadow-bias={-0.0005}
            />

            <pointLight position={[0, 18, 0]} intensity={1.2} />

            <Environment preset="forest" />

            <fog attach="fog" args={["#ffffff", 8, 35]} />

            <MainScene activeActions={disableActions} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
