import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ThemeSyncLayer } from "@/components/base";
import "./globals.css";
import { EngineeringGrid } from "@/shared/components/base";

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
      <body className="antialiased bg-ui-background text-ui-foreground transition-colors duration-500">
        <EngineeringGrid />
        <main className="relative min-h-screen flex flex-col">{children}</main>
        <ThemeSyncLayer />

        <div id="kensai-portals" />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Kensai Experience",
  description: "Ecosistema digital de alta fidelidad basado en Next.js 16.0.7",
};
