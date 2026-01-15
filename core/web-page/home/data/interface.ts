import { Metadata } from "next";

export interface AuthorUI {
  readonly name: string;
  readonly url?: string;
}

export interface HeroMainUI {
  readonly title: string;
  readonly subtitle: string;
  readonly tagline: string;
  readonly primaryAction: string;
  readonly secondaryAction: string;
}

export interface WebMetaDataUI {
  readonly title: string;
  readonly description: string;
  readonly keywords: ReadonlyArray<string>;
  readonly authors: ReadonlyArray<AuthorUI>;
  readonly creator: string;
  readonly publisher: string;
  readonly robots: string;
}

export interface WebPageDataUI {
  readonly metadata: WebMetaDataUI;
  readonly hero: HeroMainUI;
}

export interface HeroContentUI {
  readonly title: string;
  readonly subtitle: string;
  readonly tagline: string;
  readonly primaryAction: string;
  readonly secondaryAction: string;
}

export interface WebPageData {
  readonly metadata: WebMetaDataUI;
  readonly hero: HeroContentUI;
}


export interface HomeSeoTagsUI extends Metadata {

  title: string;
  description: string;
  alternates: {
    canonical: string;
  };
}

export interface RobotsConfigUI {
  rules: {
    userAgent: string | string[];
    allow?: string | string[];
    disallow?: string | string[];
  };
  sitemap?: string | string[];
}
