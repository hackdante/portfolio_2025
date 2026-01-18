import { TrackEventUI } from "@/shared/components/base";
import { KensaiWindowUI } from "./interface";

export const trackEvent = ({
  action,
  category,
  label,
  value,
  nonInteraction = false,
}: TrackEventUI): void => {
  if (typeof window === "undefined") return;

  const kWindow = window as unknown as KensaiWindowUI;

  if (kWindow.gtag) {
    kWindow.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: nonInteraction,
    });
  }

  if (kWindow.lintrk) {
    kWindow.lintrk("track", { conversion_id: action });
  }

  if (process.env.NODE_ENV === "development") {
    console.warn(`[Analytics Event]: ${action}`, { 
      category, 
      label, 
      value, 
      nonInteraction 
    });
  }
};