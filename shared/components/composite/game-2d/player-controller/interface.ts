import { EntityCollisionType, EntityInstanceUI, VisualStateUI } from "@/shared/types";


export interface EntityLayerUI {
  readonly id: string;
  readonly imageUrl: string;
  readonly maskUrl: string;
  readonly width: number;
  readonly height: number;
  readonly isAnimated?: boolean;
  readonly totalFrames?: number;
  readonly fps?: number;
  readonly entities: EntityInstanceUI[];
  readonly playerX: number;
  readonly playerY: number;
  readonly onTriggerEnter?: (entity: EntityInstanceUI) => void;
  readonly onTriggerLeave?: (entity: EntityInstanceUI) => void;
  readonly debug?: boolean;
}

export interface CollisionEventUI {
  readonly isBlocked: boolean;
  readonly type: EntityCollisionType;
  readonly entityId: string;
  readonly isFloor?: boolean;
}

export interface LayerControllerUI {
  readonly cameraX: number;
  readonly playerVisuals: VisualStateUI;
  readonly onCollisionAction: (event: CollisionEventUI) => void;
}

export interface PlayerControllerTokensUI {
  GRAVITY: number;
  FRICTION: number;
  WORLD_FLOOR_Y:number;
  WORLD_WIDTH: number;
  WORLD_HEIGHT: number;
};

