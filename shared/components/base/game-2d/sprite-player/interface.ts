export interface SpriteSheetConfigUI {
  readonly url: string;
  readonly cols: number;
  readonly rows: number;
  readonly width: number;
  readonly height: number;
}

export interface AnimationConfigUI {
  readonly frames: number[];
  readonly fps: number;
  readonly loop?: boolean;
}

export type AnimationTableUI = Record<string, AnimationConfigUI>;

export interface SpritePlayerUI {
  readonly state: string;
  readonly direction: "RIGHT" | "LEFT";
  readonly positionX: number;
  readonly positionY: number;
  readonly sheet: SpriteSheetConfigUI;
  readonly animations: AnimationTableUI;
}


export interface SpritePlayerTokensUI {
  readonly FRAME_WIDTH: number;
  readonly FRAME_HEIGHT: number;
  readonly ANIMATION_SPEED: {
    readonly IDLE: number;
    readonly RUN: number;
    readonly JUMP: number;
    readonly ATTACK?: number;
  };
  readonly FRAME_COUNTS: {
    readonly IDLE: number;
    readonly RUN: number;
    readonly JUMP: number;
    readonly ATTACK?: number;
  };
}