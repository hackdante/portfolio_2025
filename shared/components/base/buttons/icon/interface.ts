import { SizesType, StatusType } from "@/shared/types";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

export type TooltipPositionIconType = "top" | "bottom" | "left" | "right";

export interface IconDefaultUI {
  readonly icon: ComponentType<IconBaseProps>;
  readonly toolTip?: string; 
  readonly type: StatusType;
  readonly tooltipPosition?: TooltipPositionIconType;
  readonly size?: SizesType;
  readonly id?: string;
  readonly action?: () => void;
}