import { SizesType, StatusType } from "@/shared/types";
import { TooltipPositionIconType } from "./interface";

export const ICON_SIZE_MAP: Record<
  SizesType,
  { container: number; icon: number }
> = {
  xs: { container: 16, icon: 8 },
  sm: { container: 20, icon: 10 },
  md: { container: 32, icon: 18 },
  lg: { container: 40, icon: 20 },
  xl: { container: 50, icon: 25 },
  "2xl": { container: 60, icon: 30 },
};

export const TOOLTIP_POSITION_ICON_MAP: Record<
  TooltipPositionIconType,
  string
> = {
  top: "bottom-full mb-3 left-1/2 -translate-x-1/2 origin-bottom group-hover:translate-y-0 translate-y-1",
  bottom:
    "top-full mt-3 left-1/2 -translate-x-1/2 origin-top group-hover:translate-y-0 -translate-y-1",
  left: "right-full mr-3 top-1/2 -translate-y-1/2 origin-right group-hover:translate-x-0 translate-x-1",
  right:
    "left-full ml-3 top-1/2 -translate-y-1/2 origin-left group-hover:translate-x-0 -translate-x-1",
};

export const TOOLTIP_ICON_ARROW_MAP: Record<TooltipPositionIconType, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-ui-foreground",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-ui-foreground",
  left: "left-full top-1/2 -translate-y-1/2 border-l-ui-foreground",
  right: "right-full top-1/2 -translate-y-1/2 border-r-ui-foreground",
};

export const STATUS_CLASS_MAP: Record<StatusType, string> = {
  default: "bg-ui-border text-foreground",
  primary: "bg-primary text-white shadow-sm hover:shadow-md",
  secondary: "bg-ui-border text-foreground hover:bg-ui-border/80",
  info: "bg-semantic-info text-white",
  success: "bg-semantic-success text-white",
  warning: "bg-semantic-warning text-white",
  error: "bg-semantic-error text-white",
  disable: "bg-ui-border/40 text-foreground/30 cursor-not-allowed opacity-60",
  loading: "bg-primary/50 text-white/50 cursor-wait animate-pulse",
  hover: "bg-primary-hover text-white",
  active: "bg-primary text-white scale-90",
  focus:
    "bg-primary text-white ring-2 ring-ui-primary ring-offset-2 ring-offset-ui-background",
};
