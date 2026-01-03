import {
  AnimationTableUI,
  SpriteSheetConfigUI,
} from "@/shared/components/base";

export const RONIN_SHEET: SpriteSheetConfigUI = {
  url: "/images/game-2d/run_animation.png",
  cols: 7,
  rows: 2,
  width: 840,
  height: 252,
};

export const RONIN_ANIMATIONS: AnimationTableUI = {
  IDLE: {
    frames: [8,9,10],
    fps: 6,
    loop: true,
  },
  RUN: {
    frames: [0, 1, 2, 3, 4, 5],
    fps: 12,
    loop: true,
  },
  JUMP: {
    frames: [11, 12, 13],
    fps: 12,
    loop: false,
  },
};
