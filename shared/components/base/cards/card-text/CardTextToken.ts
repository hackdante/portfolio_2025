import { BlurIntensityUI } from "./interface";

export const CARD_CONTAINER_CLASSES = `
group relative overflow-hidden rounded-2xl border border-ui-border 
  transition-all duration-500 ease-standard 
  hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2
  bg-ui-surface-100/40
`;

export const CARD_GLOW_CLASSES = `
 absolute -inset-px bg-linear-to-b from-white-100/20 to-transparent 
  opacity-0 group-hover:opacity-100 transition-opacity duration-500
`;

export const CARD_BLUR_MAP: Record<BlurIntensityUI, string> = {
  none: "backdrop-blur-none",
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
};

export const CARD_ICON_CONTAINER = `
  relative flex items-center justify-center w-[50px] h-[50px] 
  rounded-xl bg-ui-surface-12 text-ui-surface-60 mb-4
  group-hover:bg-primary/20 group-hover:text-ui-primary 
  transition-colors duration-300
`;

export const CARD_BUTTON_CLASSES = `
rounded-full bg-primary px-6 py-2.5 text-sm font-bold 
  text-white
  shadow-md shadow-ui-primary/20 
  transition-all hover:scale-105 active:scale-95 
  focus-ring cursor-pointer
`;
