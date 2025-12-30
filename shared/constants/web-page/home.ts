import { ComponentType } from "react";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";

import { CardTextUI } from "@/shared/components/base";

export type validCharacterAnimationType =
  | "000_Awake"
  | "Bow"
  | "Jog_sign"
  | "Moon_walk"
  | "Ouch_punch"
  | "Runner"
  | "Walking";

export type animationIconsUI = {
  readonly [key in validCharacterAnimationType]: ComponentType;
};

export const HOME_FEATURES: readonly CardTextUI[] = [
  {
    icon: FiCode,
    title: "Desarrollamos software a medida enfocado en",
    description:
      "escalabilidad, rendimiento y calidad técnica para productos digitales modernos.",
  },
  {
    icon: FiLayers,
    title: "Construimos",
    description:
      "experiencias interactivas 3D y UX/UI que conectan usuarios con interfaces claras y funcionales.",
  },
  {
    icon: FiZap,
    title: "Integramos",
    description:
      "estrategia digital y tecnología moderna para impulsar resultados medibles y crecimiento sostenible.",
  },
];

