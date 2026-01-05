export type EntityCollisionType = "solid" | "trigger" | "active";
export type PlayerStateUI = "IDLE" | "RUN" | "JUMP" | "ATTACK";
export type PlayerDirectionType = "LEFT" | "RIGHT";

export interface CollisionEventUI {
  readonly isBlocked: boolean;
  readonly type: EntityCollisionType;
  readonly entityId: string;
  readonly isFloor?: boolean;
}

export interface PlayerPhysicsStateUI {
  x: number;
  y: number;
  vx: number;
  vy: number;
  isGrounded: boolean;
  state: PlayerStateUI;
  direction: PlayerDirectionType;
}


export interface VisualStateUI {
  readonly x: number;
  readonly y: number;
  readonly direction: PlayerDirectionType;
  readonly state: PlayerStateUI;
  readonly cameraX: number;
}

export interface LayerControllerUI {
  readonly cameraX: number;
  readonly playerVisuals: VisualStateUI;
  readonly onCollisionAction: (event: CollisionEventUI) => void;
}


export interface SpritePlayerRefUI {
  readonly initialX?: number;
  readonly initialY?: number;
  readonly moveSpeed: number;
  readonly jumpForce: number;
  readonly playAttack?: () => void;
  readonly getElement?: () => HTMLDivElement | null;
}

export interface EntityInstanceUI {
  readonly id: string;
  readonly x: number;
  readonly y: number;
  readonly type: EntityCollisionType;
  readonly isActive: boolean;
  readonly isFloor?: boolean;
}
