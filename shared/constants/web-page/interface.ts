export interface ContentMainUI {
  readonly title: string;
  readonly subtitle?: string;
  readonly description: string;
  readonly highlight?: string;
}

export interface HomeSeoUI {
  readonly hero: ContentMainUI;
  readonly portfolio: ContentMainUI;
  readonly stack: ContentMainUI;
  readonly authority: ContentMainUI;
}
