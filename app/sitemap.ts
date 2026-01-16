import { MetadataRoute } from "next";
import { HOME_SEO_TAGS } from "@/core/web-page";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = HOME_SEO_TAGS.metadataBase?.toString() ?? "https://kensai.solutions";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}