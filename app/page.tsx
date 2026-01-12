import { Metadata } from "next";
import { HomeView } from "@/shared/views";
import { HOME_SEO_DATA } from "@/shared/constants";

export const metadata: Metadata = {
  title: "Kensai Experience | Engineering & Spatial Computing",
  description:
    "High-end digital experiences built with Next.js 15 and React 19.",
};

export default function HomePage() {
  return <HomeView seoData={HOME_SEO_DATA} />;
}
