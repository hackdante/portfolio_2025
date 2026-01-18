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

/**
 * Interface for OpenGraph specific metadata.
 * Ensures strict typing for social media previews.
 */
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