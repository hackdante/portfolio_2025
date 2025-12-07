"use client";

import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { MainScene, Loader3d, CameraRig } from "@/components/portfolio/base";
import { useLoopAudio } from "@/hooks";

const AUDIO_LOOP_SRC = "/portfolio/music/kensai_intro.mp3";

export function Hero3D() {
  const sceneVolume = 0.1;
  const { progress, loaded } = useProgress();

  const [isReady, setIsReady] = useState(false);
  const [sceneVisible, setSceneVisible] = useState(false);

  useLoopAudio(AUDIO_LOOP_SRC, sceneVolume);

  useEffect(() => {
    if (loaded > 0 && progress === 100) {
      const t = setTimeout(() => {
        setIsReady(true);
        setTimeout(() => setSceneVisible(true), 100);
      }, 300);

      return () => clearTimeout(t);
    }
  }, [progress, loaded]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Loader */}
      {!sceneVisible && (
        <div className="absolute inset-0 z-20">
          <Loader3d progress={progress} />
        </div>
      )}

      {/* Escena con fade-in */}
      <div
        className={`
          w-full h-full 
          transition-opacity duration-1000 ease-out
          ${sceneVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, 100], fov: 35 }}
          gl={{ antialias: true }}
        >
          <color attach="background" args={["#ffffff"]} />
          <MainScene sceneReady={sceneVisible} />
        </Canvas>
      </div>
    </div>
  );
}
