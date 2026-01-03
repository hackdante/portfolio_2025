export type ImageAssetLayerRepeatType = "no-repeat" | "repeat" | "repeat-x" | "repeat-y";

export interface ImageAssetLayerUI {
  readonly imageUrl: string;
  readonly width: number | string;
  readonly height: number;
  readonly x?: number;
  readonly y?: number;
  readonly repeat?: ImageAssetLayerRepeatType;
  readonly tileSize?: number;
  readonly zIndex?: number;
  readonly opacity?: number;
  readonly parallaxFactor?: number;
  readonly cameraX?: number; 
  readonly autoScrollSpeed?: number;
}