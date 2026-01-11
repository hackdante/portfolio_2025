export interface ImageTransitionUI {
  readonly width: number;
  readonly height: number;
  readonly time: number
  readonly firstImgPath: string;
  readonly secondImgPath: string;
  readonly threeImgPath: string;
  readonly activate: boolean;
  readonly reset: boolean;
  readonly callToAction?: () => void
}
