import { CSSProperties } from "react";

export interface GameSceneUI {
  readonly width: number;
  readonly height: number;
  readonly backgroundColor: string;
  readonly id?: string;
}

export interface GameSceneOffsetUI {
  readonly top: string;
  readonly left: string;
  readonly width: string;
  readonly height: string;
}

export interface GameMaskStyleUI extends CSSProperties {
  readonly WebkitMaskImage?: string;
  readonly WebkitMaskMode?: string;
  readonly WebkitMaskSize?: string;
  readonly WebkitMaskRepeat?: string;
}
