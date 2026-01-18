import { cookies } from "next/headers";
import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { EngineeringGrid } from "@/shared/components/base";
import { HOME_SEO_TAGS } from "@/core/web-page";
import { AnalyticsProvider } from "@/shared/components/composite/seo";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e5e7eb" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  ...HOME_SEO_TAGS,
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get("kensai-theme")?.value || "dark";

  return (
    <html lang="es" data-theme={savedTheme} className="scroll-smooth">
      <body className="antialiased bg-background text-foreground transition-colors duration-500">
        <EngineeringGrid />
        <AnalyticsProvider />
        <main className="relative min-h-screen flex flex-col">{children}</main>
        <div id="kensai-portals" />
      </body>
    </html>
  );
}
