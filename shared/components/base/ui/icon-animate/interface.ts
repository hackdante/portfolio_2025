import { IconType } from "react-icons";

export interface IconAnimateUI {
  readonly icon: IconType;
  readonly size: number;
  readonly primaryColor?: string;
  readonly secondaryColor?: string;
  readonly strokeWidth?: number;
}