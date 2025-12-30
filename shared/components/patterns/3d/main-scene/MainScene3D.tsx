"use client";

import { GBLLoader } from "@/shared/components/base";
import {
  LoadCharacterSceneMain,
} from "@/shared/components/composite";
import { Canvas } from "@react-three/fiber";
import { useState, Suspense, useCallback } from "react";
import {
  FaUser,
  FaPersonWalking,
  FaPersonRunning,
  FaHandFist,
  FaCirclePlay,
} from "react-icons/fa6";

const ANIMATION_ICONS: Record<string, React.ReactNode> = {
  idle: <FaUser />,
  walk: <FaPersonWalking />,
  run: <FaPersonRunning />,
  attack: <FaHandFist />,
  default: <FaCirclePlay />,
};
const URL_MODEL_3D_V2 = "/portfolio/models/anim/bio/LEO_ACTIONS_ANIM.glb";

export function MainScene3d(): React.JSX.Element {
  const [animationList, setAnimationList] = useState<string[]>([]);
  const [activeAnim, setActiveAnim] = useState<string>("");

  const handleAnimationsLoaded = useCallback((names: string[]) => {
    if (names.length > 0) {
      setAnimationList(names);

      const idleAnim = names.find((n) => n.toLowerCase().includes("idle"));

      const initial = idleAnim || names[0];
      setActiveAnim(initial);
    }
  }, []);

  // Detector de palabras clave para asignar iconos
  const getIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes("idle")) return ANIMATION_ICONS.idle;
    if (lower.includes("walk")) return ANIMATION_ICONS.walk;
    if (lower.includes("run")) return ANIMATION_ICONS.run;
    if (lower.includes("attack") || lower.includes("punch"))
      return ANIMATION_ICONS.attack;
    return ANIMATION_ICONS.default;
  };

  return (
    <>
      <div className="absolute bottom-12 left-0 right-0 z-100 flex justify-center gap-4 px-6">
        {animationList.map((name) => (
          <button
            key={name}
            type="button"
            title={name}
            onClick={() => setActiveAnim(name)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 border-2 ${
              activeAnim === name
                ? "bg-white text-black border-white scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                : "bg-black/40 text-white/40 border-white/5 hover:border-white/20 hover:text-white backdrop-blur-2xl"
            }`}
          >
            {getIcon(name)}
          </button>
        ))}
      </div>

      <Canvas
        shadows
        camera={{ position: [0, 2, 8], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <LoadCharacterSceneMain />
          <GBLLoader
            objPath={URL_MODEL_3D_V2}
            scale={1.5}
            position={[4, -2, 0]}
            currentAnimation={activeAnim}
            onAnimationsLoaded={handleAnimationsLoaded}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
