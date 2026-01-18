import type { Metadata } from "next";

export interface GeneralSeoUI extends Metadata {
  readonly siteName: string;
  readonly defaultTitle: string;
  readonly titleTemplate: string;
}

export interface OpenGraphUI {
  readonly type: "website" | "article";
  readonly locale: string;
  readonly url: string;
  readonly siteName: string;
  readonly images: Array<{
    readonly url: string;
    readonly width: number;
    readonly height: number;
    readonly alt: string;
  }>;
}
