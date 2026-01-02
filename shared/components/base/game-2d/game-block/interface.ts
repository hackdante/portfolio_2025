import { ReactNode } from "react";

export type GameBlockType = "PROJECT" | "OBSTACLE" | "DECORATION";

export interface GameBlockUI {
  readonly id: string;
  readonly title: string;
  readonly thumbnail: string;
  readonly url: string;
  readonly positionX: number;
  readonly positionY: number;
  readonly width: number;
  readonly height: number;
  readonly type: GameBlockType;
}

export interface GameBlockInternalUI extends GameBlockUI {
  readonly isActive: boolean;
  readonly onCollision?: (id: string) => void;
  readonly children?: ReactNode;
}

export interface GameBlockTokensUI {
  readonly DEFAULT_WIDTH: number;
  readonly DEFAULT_HEIGHT: number;
  readonly HIT_ANIMATION_DURATION: number;
  readonly HIT_BOUNCE_DISTANCE: number;
  readonly COLORS: {
    readonly PROJECT: string;
    readonly OBSTACLE: string;
    readonly ACTIVATED: string;
  };
}
