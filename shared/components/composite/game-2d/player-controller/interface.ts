import { PlayerStateUI } from "@/shared/components/base";

export interface SpritePlayerRefUI {
  readonly initialX?: number;
  readonly initialY?: number;
  readonly moveSpeed: number;
  readonly jumpForce: number;
}

export interface PlayerPhysicsStateUI {
  x: number;
  y: number;
  vx: number;
  vy: number;
  isGrounded: boolean;
  state: PlayerStateUI;
  direction: "LEFT" | "RIGHT";
}

export interface PlayerControllerTokensUI {
  readonly GRAVITY: number;
  readonly FRICTION: number;
  readonly WORLD_FLOOR_Y: number;
  readonly WORLD_WIDTH: number;
  readonly WORLD_HEIGHT: number;
}

 export interface VisualStateUI {
  x: number;
  y: number;
  direction: "RIGHT" | "LEFT";
  state: "IDLE" | "RUN" | "JUMP";
  cameraX: number;
}
