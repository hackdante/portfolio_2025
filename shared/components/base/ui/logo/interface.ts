import { SizesType } from "@/shared/types/global";

export interface MainLogoUI {
  readonly size?: SizesType;
  readonly path?: string;
  readonly altText?: string;
  readonly opacity?: number;
}

export interface LogoWidthUI {
  readonly xs: number;
  readonly sm: number;
  readonly md: number;
  readonly lg: number;
  readonly xl: number;
  readonly "2xl": number;
}
