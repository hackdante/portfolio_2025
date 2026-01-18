import { TrackEventType } from "../../components/base/seo/analytics/interface";


export const trackEvent = ({
  action,
  category,
  label,
  value,
  nonInteraction = false,
}: TrackEventType): void => {
  if (typeof window === "undefined") return;

  // 1. Send to Google Analytics (GA4)
  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: nonInteraction,
    });
  }

  // 2. Send to LinkedIn Insight Tag
  if (typeof window.lintrk === "function") {
    window.lintrk("track", { conversion_id: action });
  }


  if (process.env.NODE_ENV === "development") {
    console.warn(`[Analytics]: ${action}`, { category, label, value });
  }
};