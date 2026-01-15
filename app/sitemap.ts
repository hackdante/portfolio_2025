import { MetadataRoute } from "next";
import { HOME_SEO_TAGS } from "@/core/web-page";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = HOME_SEO_TAGS.metadataBase?.toString() ?? "https://kensai.engineering";

  const routes = [
    ""
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes];
}