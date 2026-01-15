import { MetadataRoute } from "next";
import { HOME_SEO_TAGS } from "@/core/web-page";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = HOME_SEO_TAGS.metadataBase?.toString() ?? "https://kensai.engineering";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}