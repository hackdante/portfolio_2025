export interface LayerConfigUI {
  readonly id: string;
  readonly imageUrl: string;
  readonly parallaxFactor: number;
  readonly zIndex: number;
  readonly width: number | string;
  readonly height: number;
  readonly y: number;
  readonly x?: number;
  readonly repeat?: "repeat-x" | "no-repeat";
  readonly tileSize?: number;
  readonly opacity?: number;
}
