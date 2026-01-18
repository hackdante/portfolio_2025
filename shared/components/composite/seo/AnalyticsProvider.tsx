"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import { LinkedInInsightTag } from "@/shared/components/base";


export function AnalyticsProvider() {
  return (
    <>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      <LinkedInInsightTag id={process.env.NEXT_PUBLIC_LINKEDIN_ID} />
    </>
  );
}
