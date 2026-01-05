export type EntityCollisionType = "solid" | "trigger" | "active";
export type PlayerStateUI =
  | "IDLE"
  | "RUN"
  | "JUMP"
  | "ATTACK"
  | "FALL"
  | "BLOCKED";
export type PlayerDirectionType = "LEFT" | "RIGHT";
export type ContactType =
  | "NONE"
  | "FLOOR"
  | "WALL_LEFT"
  | "WALL_RIGHT"
  | "CEILING";

export interface ContactStateUI {
  type: ContactType;
  entityId: string | null;
  surfaceY?: number;
  surfaceX?: number;
}

export interface PlayerPhysicsStateUI {
  x: number;
  y: number;
  vx: number;
  vy: number;
  contacts: ContactStateUI[]; // Soporta múltiples contactos simultáneos (suelo + pared)
  isGrounded: boolean;
  state: PlayerStateUI;
}

export interface CollisionEventUI {
  readonly isBlocked: boolean;
  readonly type: EntityCollisionType;
  readonly entityId: string;
  readonly isFloor?: boolean;
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
  readonly maskUrl: string;
  readonly collisionWidth: number;
  readonly collisionHeight: number;
}

export interface PlayerTokensUI {
 readonly GRAVITY: number;
 readonly FRICTION: number;
 readonly WORLD_FLOOR_Y: number;
 readonly WORLD_WIDTH: number;
 readonly TERMINAL_VELOCITY: number;
 readonly BODY_OFFSET_X: number; 
 readonly BODY_OFFSET_Y: number; 
 readonly GROUND_CHECK_PADDING: number;
}

export interface CollisionMapType {
  readonly data: Uint8ClampedArray;
  readonly width: number;
  readonly height: number;
}
