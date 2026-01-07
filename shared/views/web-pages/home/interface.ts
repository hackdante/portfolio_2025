import { ReactNode } from "react";

export interface HomePageUI {
  readonly serverStatus?: string; 
}

export type PortfolioViewModeType = 'game' | 'grid';

export interface ViewSelectorUI {
  currentMode: PortfolioViewModeType;
  onViewChange: (mode: PortfolioViewModeType) => void;
}

export interface HomeNavigationStateUI {
  viewMode: PortfolioViewModeType;
  isScrolling: boolean;
}

export interface ViewSelectorPropsUI {
  currentMode: PortfolioViewModeType;
  onChange: (mode: PortfolioViewModeType) => void;
}

export interface PortfolioHeaderUI {
  title: string;
  description: string;
  icon: ReactNode;
}