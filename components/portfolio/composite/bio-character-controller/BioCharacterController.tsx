"use client";

import { LoadFBXModel } from "@/components/portfolio/base";

interface BioCharacterControllerUI {
  activePose: 1 | 2 | 3;
  position?: [number, number, number];
  scale?: number;
}


const URL_KENSAI_MODEL_ANIM = "/portfolio/models/anim/bio/poser_";

export function BioCharacterController({
  activePose,
  position = [0, 0, 0],
  scale = 0.05
}: BioCharacterControllerUI) {
  const poses = {
    1: `${URL_KENSAI_MODEL_ANIM}01.fbx`,
    2: `${URL_KENSAI_MODEL_ANIM}02.fbx`,
    3: `${URL_KENSAI_MODEL_ANIM}03.fbx`,
  };

  return (
    <group position={position}>
      {activePose === 1 && <LoadFBXModel path={poses[1]} scale={scale} />}
      {activePose === 2 && <LoadFBXModel path={poses[2]} scale={scale} />}
      {activePose === 3 && <LoadFBXModel path={poses[3]} scale={scale} />}
    </group>
  );
}