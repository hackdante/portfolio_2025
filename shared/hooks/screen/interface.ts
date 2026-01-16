import { SizesType } from "@/shared/types";

export interface ScreenSizeUI {
  readonly width: number;
  readonly height: number;
  readonly breakpoint: SizesType;
  readonly isMobile: boolean;
  readonly isPortrait: boolean;
}
