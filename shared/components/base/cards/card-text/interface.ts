import { IconType } from "react-icons";

export type BlurIntensityUI = "none" | "sm" | "md" | "lg" | "xl";

export interface CardTextUI {
  readonly title?: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly label?: string;
  readonly icon?: IconType;
  readonly blurIntensity?: BlurIntensityUI;
  readonly callToAction?: () => void;
}
