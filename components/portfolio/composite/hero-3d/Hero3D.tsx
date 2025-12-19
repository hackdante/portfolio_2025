"use client";

import { Suspense, useEffect, useState } from "react";
import { useIsMobile } from "@/hooks";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";

import {
  Loader3d,
  PostProcessingEffects,
  MainSceneStage,
  MainScenePortfolio,
  MainSceneBio,
  MainSceneContact,
} from "@/components/portfolio/base";
import {
  CameraControllerMain,
  MainEnvironment,
} from "@/components/portfolio/composite";
import { CameraMotionToScenesUI } from "@/types/global";

type CameraMotionTypeUI = "camera/in-motion" | "camera/out-motion";

export function Hero3D({ currentScreen }: { currentScreen: any }) {
  const isMobile = useIsMobile();
  const { progress, loaded } = useProgress();

  const [isReady, setIsReady] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(false);
  const [disableActions, setDisableActions] = useState(true);

  const [motionType, setMotionType] =
    useState<CameraMotionTypeUI>("camera/in-motion");
  const [currentSceneKey, setCurrentSceneKey] =
    useState<CameraMotionToScenesUI>("camera-scene/intro");

  useEffect(() => {
    if (loaded > 0 && progress === 100) {
      const t = setTimeout(() => {
        setIsReady(true);
        setTimeout(() => setSceneVisible(true), 100);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [progress, loaded]);

  if (currentScreen === null) return <Loader3d isConnecting={true} />;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {!sceneVisible && <Loader3d progress={progress} />}

      <div
        className={`w-full h-full transition-opacity duration-1000 ${
          sceneVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Canvas shadows camera={{ fov: 35 }}>
          <color attach="background" args={["#ffffff"]} />
          <Suspense fallback={null}>
            <CameraControllerMain
              motionType={motionType}
              motionScene={currentSceneKey}
              activeCamera={isReady}
              duration={isMobile ? 5 : 7}
              onTransitionFinish={() => {
                setMotionType("camera/out-motion");
                setDisableActions(false);
              }}
            />
            <MainEnvironment />
            <MainSceneStage
              activeActions={disableActions}
              onNavigate={(key: CameraMotionToScenesUI) =>
                setCurrentSceneKey(key)
              }
            />

            <MainScenePortfolio />
            <MainSceneBio />
            <MainSceneContact />
            <PostProcessingEffects isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
