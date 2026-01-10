import { ReactNode } from "react";

export interface RootLayoutUI {
  readonly children: ReactNode;
  readonly mainHero: ReactNode;
  readonly mainPortfolio: ReactNode;
  readonly mainGamification: ReactNode;
  readonly mainStack: ReactNode;
  readonly mainFooter: ReactNode;
}
