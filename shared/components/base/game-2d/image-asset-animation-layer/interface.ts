import { ImageAssetLayerUI } from "../image-asset-layer/interface";

export interface ImageAssetAnimationLayerUI extends ImageAssetLayerUI {
  readonly totalFrames: number;
  readonly fps: number;
  readonly frameWidth: number;
  readonly frameHeight: number;
  readonly rows: number; 
  readonly cols: number; 
}