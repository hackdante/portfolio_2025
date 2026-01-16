import { cookies } from "next/headers";
import type { Metadata, Viewport } from "next"; // Importación de tipos estrictos
import { ThemeSyncLayer } from "@/components/base";
import { EngineeringGrid } from "@/shared/components/base";
import { HOME_SEO_TAGS } from "@/core/web-page";
import "./globals.css";
import Script from "next/script";
import Image from "next/image";

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
        <main className="relative min-h-screen flex flex-col">{children}</main>
        <ThemeSyncLayer />

        <div id="kensai-portals" />

        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
      _linkedin_partner_id = "8484818";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `}
        </Script>
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
      (function(l) {
        if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
        window.lintrk.q=[]}
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window.lintrk);
    `}
        </Script>
        <noscript>
          <Image
            src="https://px.ads.linkedin.com/collect/?pid=8484818&fmt=gif"
            alt="Descripción de la imagen"
            width={1}
            height={1}
            style={{ display: 'none' }}
            priority
          />
        </noscript>
      </body>
    </html>
  );
}
