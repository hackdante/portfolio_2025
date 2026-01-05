import { CollisionEventUI, EntityInstanceUI } from "@/shared/types";

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
  readonly onTriggerEnter?: (entity: CollisionEventUI) => void;
  readonly onTriggerLeave?: () => void;
  readonly debug?: boolean;
  readonly zIndex?: number;
}
