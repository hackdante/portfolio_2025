import { SpritePlayerTokensUI } from "./interface";

export const SPRITE_PLAYER_TOKENS: SpritePlayerTokensUI = {
  FRAME_WIDTH: 120, 
  FRAME_HEIGHT: 126, 
  ANIMATION_SPEED: {
    IDLE: 0.8,
    RUN: 0.5,
    JUMP: 0.5, 
    ATTACK: 0.3
  },
  FRAME_COUNTS: {
    IDLE: 1,
    RUN: 9,
    JUMP: 1,
    ATTACK: 4
  }
};