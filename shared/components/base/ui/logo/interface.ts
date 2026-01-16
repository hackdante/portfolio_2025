import { SizesType, SvgPathType } from "@/shared/types/global";

export interface MainLogoTokenUI {
  readonly widths: Record<SizesType, string>;
  readonly defaultColors: {
    readonly light: string;
    readonly dark: string;
  };
}

export interface MainLogoUI {
  readonly path: SvgPathType;
  readonly size?: SizesType;
  readonly altText?: string;
  readonly lightModeColor?: string;
  readonly darkModeColor?: string;
}