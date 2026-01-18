import type { Metadata } from "next";

/**
 * Interface for the global SEO configuration.
 * Used to define fallback metadata across the application.
 * @version 1.0.0
 */
export interface GeneralSeoType extends Metadata {
  readonly siteName: string;
  readonly defaultTitle: string;
  readonly titleTemplate: string;
}

export interface OpenGraphType {
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

export interface KensaiWindowUI extends Window {
  gtag?: (
    command: "event",
    action: string,
    params: {
      event_category?: string;
      event_label?: string;
      value?: number;
      non_interaction?: boolean;
    }
  ) => void;
  lintrk?: (command: string, params: { conversion_id: string }) => void;
}


