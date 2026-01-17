import { SizesType, SvgPathType } from "@/shared/types/global";
import { CSSProperties } from "react";

export interface MainLogoStylesUI extends CSSProperties {
  "--l-c-l": string;
  "--l-c-d": string;
}

export interface MainLogoTokenUI {
  readonly widths: Record<SizesType, string>;
}

export interface MainLogoUI {
  readonly path: SvgPathType;
  readonly size?: SizesType;
   readonly altText?: string;
}