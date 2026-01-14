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
  contacts: ContactStateUI[];
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
  readonly WORLD_HEIGHT: number;
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

export interface PortfolioAssetsUI {
  readonly uid: number;
  readonly imag: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly stack: string;
}

export interface InteractionPopupUI {
  readonly data: PortfolioAssetsUI | null;
  readonly isVisible: boolean;
  readonly position: { readonly x: number; readonly y: number };
}

export interface ActiveInteractionUI {
  readonly data: PortfolioAssetsUI;
  readonly physicEvent: CollisionEventUI;
  readonly position: {
    readonly x: number;
    readonly y: number;
  };
}

export interface LayerControllerUI {
  readonly cameraX: number;
  readonly playerVisuals: {
    readonly x: number;
    readonly y: number;
    readonly direction: PlayerDirectionType;
    readonly state: string;
  };
  readonly onCollisionAction: (interaction: ActiveInteractionUI | null) => void;
  readonly levelEntities?: EntityInstanceUI[];
}
