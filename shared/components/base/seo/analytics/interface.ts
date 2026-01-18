/**
 * Types for supported analytics providers.
 * @version 1.0.0
 */

export interface GoogleProviderType {
  readonly gaId?: string;
  readonly gtmId?: string;
}

export interface LinkedInProviderType {
  readonly partnerId?: string;
}

/**
 * Props for the AnalyticsProvider component.
 * Ensures all tracking IDs are passed through a single entry point.
 */
export interface AnalyticsProviderUI {
  readonly google?: GoogleProviderType;
  readonly linkedin?: LinkedInProviderType;
}

/**
 * Interface for custom tracking events.
 * Used to type-safe the trackEvent utility.
 */
export interface TrackEventType {
  readonly action: string;
  readonly category: string;
  readonly label?: string;
  readonly value?: number;
  readonly nonInteraction?: boolean;
}