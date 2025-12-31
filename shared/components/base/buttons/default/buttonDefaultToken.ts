import { StatusType, SizesType } from "@/shared/types";
import { TooltipPositionType } from "./interface";

export const BTN_SIZE_MAP: Record<SizesType, string> = {
  sm: "h-8 px-4 text-[13px] rounded-full", 
  md: "h-10 px-6 text-[14px] rounded-full",
  lg: "h-12 px-6 text-[14px] rounded-full",
  xl: "h-14 px-8 text-[16px] rounded-full",
};

export const BTN_VARIANT_MAP: Record<StatusType, string> = {
  default: "bg-ui-primary text-white",
  primary: "bg-ui-primary text-white shadow-sm",
  secondary: "bg-ui-border text-ui-foreground",
  success: "bg-semantic-success text-white",
  info: "bg-semantic-info text-white",
  warning: "bg-semantic-warning text-white",
  error: "bg-semantic-error text-white",
  disable: "bg-ui-border text-neutral-400 opacity-40 shadow-none pointer-events-none",
  loading: "bg-ui-primary/70 text-white/70 cursor-wait",
  hover: "hover:animate-pulse hover:scale-105", 
  active: "active:scale-95",
  focus: "focus-visible:ring-2 focus-visible:ring-ui-primary focus-visible:ring-offset-2",
};

export const TOOLTIP_BASE_CLASSES = `
  absolute z-50 px-3 py-1.5 text-[11px] font-semibold tracking-wide 
  rounded-full shadow-lg pointer-events-none whitespace-nowrap 
  bg-ui-foreground/90 text-ui-background backdrop-blur-sm
  border border-ui-background/10
`;
export const TOOLTIP_POSITION_MAP: Record<TooltipPositionType, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
  left: "right-full top-1/2 -translate-y-1/2 mr-3",
  right: "left-full top-1/2 -translate-y-1/2 ml-3",
};