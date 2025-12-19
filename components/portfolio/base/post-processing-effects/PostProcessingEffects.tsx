"use client";

import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

interface PostEffectsUI {
  isMobile: boolean;
}

export function PostProcessingEffects({ isMobile }: PostEffectsUI) {
  return (
    <EffectComposer enableNormalPass={true} multisampling={isMobile ? 0 : 8}>
      <Bloom
        intensity={0.8}
        luminanceThreshold={0.9}
        luminanceSmoothing={0.5}
        mipmapBlur={!isMobile}
        kernelSize={KernelSize.MEDIUM}
      />

      <Noise opacity={0.015} premultiply />

      <Vignette eskil={false} offset={0.25} darkness={0.45} />
    </EffectComposer>
  );
}
