import { InteractinPopupTokesUI } from "./interface";

export const INTERACTION_POPUP_TOKENS : InteractinPopupTokesUI = {
  SIZE: 250,
  OFFSET_Y: 155,
  ANIMATION: {
    IN: {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "back.out(1.2)",
    },
    OUT: {
      scale: 0.8,
      opacity: 0,
      y: 15,
      duration: 0.2,
      ease: "power2.in",
    }
  }
} ;