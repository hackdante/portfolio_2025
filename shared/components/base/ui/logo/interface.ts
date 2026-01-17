import { SizesType, SvgPathType } from "@/shared/types/global";
import { CSSProperties } from "react";

export interface MainLogoStylesUI extends CSSProperties {
  "--l-c-l": string;
  "--l-c-d": string;
}

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