import { ReactNode, MouseEvent } from "react";

export interface ExtendCardUI {
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly benefit: string;
  readonly icon: ReactNode;
  readonly onHoverStart?: (e: MouseEvent<HTMLElement>) => void;
  readonly onHoverEnd?: (e: MouseEvent<HTMLElement>) => void;
}

export interface ExtendCardTokenUI {
  readonly animations: {
    readonly yOffset: number;
    readonly duration: number;
    readonly boxShadowActive: string;
    readonly boxShadowIdle: string;
    readonly borderColorIdle: string;
    readonly cherry: string;
  };
}