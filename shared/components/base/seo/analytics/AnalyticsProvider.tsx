"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import Image from "next/image"; 
import { AnalyticsProviderUI } from "./interface";


export function AnalyticsProvider({ google, linkedin }: AnalyticsProviderUI) {
  return (
    <>
      {google?.gaId && <GoogleAnalytics gaId={google.gaId} />}

      {google?.gtmId && <GoogleTagManager gtmId={google.gtmId} />}

      {linkedin?.partnerId && (
        <>
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "${linkedin.partnerId}";
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
                b.type = "text/javascript"; b.async = true;
                b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b, s);
              })(window.lintrk);
            `}
          </Script>
          <noscript>
            <Image
              src={`https://px.ads.linkedin.com/collect/?pid=${linkedin.partnerId}&fmt=gif`}
              alt=""
              width={1}
              height={1}
              style={{ display: "none" }}
              unoptimized 
            />
          </noscript>
        </>
      )}
    </>
  );
}