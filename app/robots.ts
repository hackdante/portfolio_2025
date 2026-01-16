import { HOME_SEO_TAGS } from "@/core/web-page";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = HOME_SEO_TAGS.metadataBase?.toString() ?? "https://kensai.solutions";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/models/"], 
      disallow: ["/private/", "/admin/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}