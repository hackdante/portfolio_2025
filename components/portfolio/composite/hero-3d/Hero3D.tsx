"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { MainScene, Loader3d, CameraRig } from "@/components/portfolio/base";
import { useIsMobile, useLoopAudio } from "@/hooks";

import { Environment } from "@react-three/drei";

const AUDIO_LOOP_SRC = "/portfolio/music/kensai_intro.mp3";

type CameraTypesUI = "camera/in-motion" | "camera/out-motion";

import { Vector3UI } from "@/types/global";
import { DirectionalLight } from "three";

interface CameraSceneOptions {
  currentPosition: { camera: Vector3UI; target: Vector3UI };
  motionType: CameraTypesUI;
}

import { OrbitControls as TSOribitControls } from "three-stdlib";

export function Hero3D() {
  const { progress, loaded } = useProgress();
  const [motionCamera, setMotionCamera] = useState<boolean>(true);
  const [isReady, setIsReady] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(false);
  const [cameraMotionType, setCameraMotionType] =
    useState<CameraTypesUI>("camera/in-motion");

  const dirLight = useRef<DirectionalLight>(null);
  const controlsRef = useRef<TSOribitControls | null>(null);

  const sceneVolume = 0.1;

  useLoopAudio(AUDIO_LOOP_SRC, sceneVolume);

  const degToRad = (d: number) => (d * Math.PI) / 180;

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
                  ? { x: 0, y: 0, z: 16 }
                  : { x: 0, y: 0, z: 15 },
                target: isMobile
                  ? { x: 0, y: 3.5, z: 0 }
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
              rotateSpeed={0.04}
              target={isMobile ? [0, 3.5, 0] : [0, 3, 0]}
              minPolarAngle={degToRad(90)}
              maxPolarAngle={degToRad(103)}
              minAzimuthAngle={degToRad(-5)}
              maxAzimuthAngle={degToRad(5)}
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

            <Environment preset="city" />

            <MainScene />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
