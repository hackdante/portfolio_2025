import { SpritePlayerTokensUI } from "./interface";

export const SPRITE_PLAYER_TOKENS: SpritePlayerTokensUI = {
  FRAME_WIDTH: 50, 
  FRAME_HEIGHT: 90, 
  ANIMATION_SPEED: {
    IDLE: 0.8,
    RUN: 0.5,
    ATTACK: 0.3
  },
  FRAME_COUNTS: {
    IDLE: 4,
    RUN: 6,
    JUMP: 1,
    ATTACK: 4
  }
};