import { cookies } from "next/headers";
import type { Metadata, Viewport } from "next"; // Importación de tipos estrictos
import { ThemeSyncLayer } from "@/components/base";
import { EngineeringGrid } from "@/shared/components/base";
import { HOME_SEO_TAGS } from "@/core/web-page";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e5e7eb" }, // --color-light
    { media: "(prefers-color-scheme: dark)", color: "#080808" },  // --color-dark
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


export const metadata: Metadata = {
  ...HOME_SEO_TAGS,
};

type KensaiTheme = "light" | "dark";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("kensai-theme")?.value;

  const isValidTheme = (val: string | undefined): val is KensaiTheme =>
    val === "light" || val === "dark";

  const savedTheme: KensaiTheme = isValidTheme(themeCookie)
    ? themeCookie
    : "dark";

  return (
    <html lang="es" data-theme={savedTheme} className="scroll-smooth">
      <body className="antialiased bg-background text-foreground transition-colors duration-500">
        <EngineeringGrid />
        <main className="relative min-h-screen flex flex-col">
          {children}
        </main>
        <ThemeSyncLayer />

        <div id="kensai-portals" />
      </body>
    </html>
  );
}