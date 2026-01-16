import { IconType } from "react-icons";

export interface CardTokensUI {
  readonly PERSPECTIVE: string;
  readonly INITIAL_ROTATION: {
    readonly x: number;
    readonly y: number;
    readonly z: number;
  };
  readonly HOVER_ANIMATION: {
    readonly duration: number;
    readonly ease: string;
    readonly scale: number;
  };
}

export interface BusinessGridCardUI {
  readonly id: "config" | "onboarding" | "data" | "deployment" | "optimization";
  readonly icon: IconType;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly benefit: string;
  readonly cta: string;
  readonly onAction?: () => void;
}

export interface AnimationConfigUI {
  readonly duration: number;
  readonly yOffset: number;
  readonly boxShadowActive: string;
  readonly boxShadowIdle: string;
  readonly borderColorIdle: string;
  readonly cherry: string;
}

export interface GridContainerTokensUI {
  readonly CONTAINER: string;
  readonly GRID: string;
}