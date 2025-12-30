import { IconDefaultUI, TooltipPositionType } from "@/shared/components/base";

export type SpeedDialVariant = 'vertical' | 'horizontal' | 'radial';
export type SpeedDialDirection = 'top' | 'bottom' | 'left' | 'right';

export interface SpeedDialUI {
  readonly id: string;
  readonly menu: Omit<IconDefaultUI, 'size'>[]; 
  readonly variant: SpeedDialVariant;
  readonly direction: SpeedDialDirection; 
  readonly radius?: number; 
  readonly tooltipPosition?: TooltipPositionType; 
}