"use client";
import { GLBCharacterLoader } from "@/shared/components/base/3d/loaders/gbl-loader/GLBCharacterLoader";
import {
  LoadCharacterSceneMain,
  Loader3D,
} from "@/shared/components/composite";
import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { MainScene3DUI } from "./interface";

const URL_MODEL_3D_V2 = "/portfolio/models/anim/bio/LEO_ACTIONS_ANIM.glb";

export function MainScene3D({
  animation = "000_Awake",
}: MainScene3DUI): React.JSX.Element {
  const [activeAnim, setActiveAnim] = useState<string>("");
  function handleAnimationsLoaded() {
    setActiveAnim(animation);
  }

  return (
  <div className="relative w-full h-[600px] outline-none focus:ring-2">
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        className="touch-none"
      >
        <Suspense fallback={<Loader3D />}>
          <LoadCharacterSceneMain />
          <GLBCharacterLoader
            objPath={URL_MODEL_3D_V2}
            position={[0, -2, 0]}
            scale={2.6}
            currentAnimation={activeAnim}
            onAnimationsLoaded={handleAnimationsLoaded}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
