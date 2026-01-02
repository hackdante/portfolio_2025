import { GameBlockTokensUI } from "./interface";

export const GAME_BLOCK_TOKENS: GameBlockTokensUI = {
  DEFAULT_WIDTH: 100,
  DEFAULT_HEIGHT: 100,
  HIT_ANIMATION_DURATION: 0.2,
  HIT_BOUNCE_DISTANCE: 20,
  COLORS: {
    PROJECT: "var(--color-ui-primary)",
    OBSTACLE: "var(--color-semantic-error)",
    ACTIVATED: "var(--color-semantic-success)"
  }
};