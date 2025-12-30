import { SizesType, StatusType } from "@/shared/types";
import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

export type TooltipPositionType = "top" | "bottom" | "left" | "right";

export interface IconDefaultUI {
  readonly icon: ComponentType<IconBaseProps>;
  readonly toolTip: string;
  readonly type: StatusType;
  readonly size: SizesType;
  readonly action: () => void;
  readonly id: string;
  readonly tooltipPosition?: TooltipPositionType;
}
