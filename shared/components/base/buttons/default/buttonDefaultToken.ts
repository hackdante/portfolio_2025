import { StatusType, SizesType } from "@/shared/types";

export const BTN_SIZE_MAP: Record<SizesType, string> = {
  sm: "h-8 px-4 text-[13px]",
  md: "h-10 px-6 text-[14px]",
  lg: "h-12 px-6 text-[14px]",
  xl: "h-14 px-8 text-[16px]",
};

export const BTN_VARIANT_MAP: Record<StatusType, string> = {
  default: "bg-ui-primary text-white hover:bg-ui-primary-hover",
  primary: "bg-ui-primary text-white hover:bg-ui-primary-hover shadow-sm",
  secondary: "bg-ui-border text-ui-foreground hover:bg-ui-border/80",
  success: "bg-semantic-success text-white hover:brightness-110",
  info: "bg-semantic-info text-white hover:brightness-110",
  warning: "bg-semantic-warning text-white hover:brightness-110",
  error: "bg-semantic-error text-white hover:brightness-110",
  disable: "bg-ui-border text-neutral-400 cursor-not-allowed opacity-40 shadow-none pointer-events-none",
  loading: "bg-ui-primary/70 text-white/70 cursor-wait",
  hover: "hover:bg-ui-primary-hover",
  active: "scale-95",
  focus: "ring-2 ring-ui-primary ring-offset-2",
};