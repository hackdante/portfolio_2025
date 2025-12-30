import { SizesType, StatusType } from "@/shared/types";
import { TooltipPositionType } from "./interface";

export const ICON_SIZE_MAP: Record<
  SizesType,
  { container: number; icon: number }
> = {
  sm: { container: 32, icon: 16 },
  md: { container: 40, icon: 20 },
  lg: { container: 48, icon: 24 },
  xl: { container: 56, icon: 28 },
};

export const TOOLTIP_POSITION_MAP: Record<TooltipPositionType, string> = {
  top: "bottom-full mb-3 left-1/2 -translate-x-1/2 origin-bottom group-hover:translate-y-0 translate-y-1",
  bottom: "top-full mt-3 left-1/2 -translate-x-1/2 origin-top group-hover:translate-y-0 -translate-y-1",
  left: "right-full mr-3 top-1/2 -translate-y-1/2 origin-right group-hover:translate-x-0 translate-x-1",
  right: "left-full ml-3 top-1/2 -translate-y-1/2 origin-left group-hover:translate-x-0 -translate-x-1",
};

export const TOOLTIP_ARROW_MAP: Record<TooltipPositionType, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-ui-foreground",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-ui-foreground",
  left: "left-full top-1/2 -translate-y-1/2 border-l-ui-foreground",
  right: "right-full top-1/2 -translate-y-1/2 border-r-ui-foreground",
};

export const STATUS_CLASS_MAP: Record<StatusType, string> = {
  default: "bg-ui-border text-ui-foreground",
  primary: "bg-ui-primary text-white shadow-sm hover:shadow-md",
  secondary: "bg-ui-border text-ui-foreground hover:bg-ui-border/80",
  info: "bg-semantic-info text-white",
  success: "bg-semantic-success text-white",
  warning: "bg-semantic-warning text-white",
  error: "bg-semantic-error text-white",
  disable:
    "bg-ui-border/40 text-ui-foreground/30 cursor-not-allowed opacity-60",
  loading: "bg-ui-primary/50 text-white/50 cursor-wait animate-pulse",
  hover: "bg-ui-primary-hover text-white",
  active: "bg-ui-primary text-white scale-90",
  focus:
    "bg-ui-primary text-white ring-2 ring-ui-primary ring-offset-2 ring-offset-ui-background",
};
