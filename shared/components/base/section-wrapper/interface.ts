import { ReactNode } from "react";

export interface SectionWrapperUI {
 readonly children: ReactNode;
 readonly id?: string;
 readonly fullHeight?: boolean;
 readonly isFullWidthContent?: boolean;
}