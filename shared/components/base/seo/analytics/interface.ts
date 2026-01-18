export interface TrackEventUI {
  readonly action: string;
  readonly category: string;
  readonly label?: string;
  readonly value?: number;
  readonly nonInteraction?: boolean;
}