import { CardTokensUI, AnimationConfigUI, GridContainerTokensUI } from "./interface";

export const INTERACTIVE_CARD_TOKENS: CardTokensUI = {
  PERSPECTIVE: "1200px",
  INITIAL_ROTATION: {
    x: 0,
    y: 0,
    z: 0
  },
  HOVER_ANIMATION: {
    duration: 0.6,
    ease: "expo.out",
    scale: 1.05
  }
};

export const GRID_ANIMATION_CONFIG: AnimationConfigUI = {
  duration: 0.8,
  yOffset: 40,
  boxShadowActive: "0 20px 40px rgba(0,0,0,0.3)",
  boxShadowIdle: "0 0 0 rgba(0,0,0,0)",
  borderColorIdle: "var(--color-border)",
  cherry: "var(--color-ui-primary)"
};

export const GRID_LAYOUT_TOKENS: GridContainerTokensUI = {
 CONTAINER: "w-full max-w-7xl mx-auto xxs:mr-5",
  GRID: "flex flex-wrap justify-center gap-6"
};