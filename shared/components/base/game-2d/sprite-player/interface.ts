export type PlayerStateUI = "IDLE" | "RUN" | "JUMP" | "ATTACK";

export interface SpritePlayerUI {
  readonly state: PlayerStateUI;
  readonly direction: "LEFT" | "RIGHT";
  readonly positionX: number;
  readonly positionY: number;
}

export interface SpritePlayerTokensUI {
  readonly FRAME_WIDTH: number;
  readonly FRAME_HEIGHT: number;
  readonly ANIMATION_SPEED: {
    readonly IDLE: number;
    readonly RUN: number;
    readonly ATTACK: number;
  };
  readonly FRAME_COUNTS: {
    readonly IDLE: number;
    readonly RUN: number;
    readonly JUMP: number;
    readonly ATTACK: number;
  };
}

export interface SpritePlayerRefUI {
  readonly playAttack: () => void;
  readonly getElement: () => HTMLDivElement | null;
}