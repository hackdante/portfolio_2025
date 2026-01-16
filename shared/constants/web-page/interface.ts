import { IconType } from "react-icons";

export interface ContentMainUI {
  readonly title: string;
  readonly subtitle: string;
  readonly header: string;
  readonly description: string;
  readonly icon: IconType;
}

export interface HomeSeoUI {
  readonly hero: ContentMainUI;
  readonly portfolio: ContentMainUI;
  readonly gamification: ContentMainUI;
  readonly stack: ContentMainUI;
  readonly authority: ContentMainUI;
}

export interface CardServicesUI {
  title: string;
  description: string;
  label: string; 
  cta: {
    label: string;
    action: () => void;
  };
}

