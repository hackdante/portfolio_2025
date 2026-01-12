import { ThemeModeType } from "@/shared/types";
import { ReactNode } from "react";

export interface RootLayoutUI {
  readonly children: ReactNode;
}

export interface HomeViewUI {
  readonly seoData: Record<
    string,
    {
      readonly title: string;
      readonly subtitle: string;
      readonly description: string;
      readonly header: string;
      readonly icon?: string;
    }
  >;
}

export interface SectionWrapperUI {
  readonly id?: string;
  readonly children: ReactNode;
  readonly bgType?: ThemeModeType;
  readonly bgColor?: string;
  readonly className?: string;
}
