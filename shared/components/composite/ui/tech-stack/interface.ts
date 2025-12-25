import { ThemeModeType } from "@/shared/types";
import { StatusType } from "@/types";
import { IconType } from "react-icons";


export interface TechItemUI {
  readonly name: string;
  readonly icon: IconType;
}

export interface TechStackUI {
  readonly theme?: ThemeModeType;
  readonly orientation?: OrientationType;
  readonly variant?: StatusType;
  readonly size?: number;
  readonly columns?: number;
}