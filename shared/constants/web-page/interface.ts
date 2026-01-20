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

