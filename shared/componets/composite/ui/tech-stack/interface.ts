import { IconType } from "react-icons";
import { ThemeType, OrientationType, VariantType } from "@/shared/types";

export interface TechItemUI {
  readonly name: string;
  readonly icon: IconType;
}

export interface TechStackUI {
  readonly theme?: ThemeType;
  readonly orientation?: OrientationType;
  readonly variant?: VariantType;
  readonly size?: number;
  readonly columns?: number;
}