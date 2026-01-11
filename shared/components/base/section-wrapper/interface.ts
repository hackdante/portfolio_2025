import { BackgroundType } from "@/shared/types";
import { ReactNode } from "react";

export interface SectionWrapperUI {
  readonly children: ReactNode;
  readonly bgType?: BackgroundType;
  readonly bgColor?: string;
  readonly id?: string;
  readonly withContainer?: boolean;
}
