"use client";
import {
  CollisionEventUI,
  PortfolioAssetsUI,
} from "@/shared/types";


export interface PopControllerUI {
  readonly uid: number;
  readonly imag: string;
  readonly title: string;
  readonly description: string;
  readonly url: string;
  readonly stack: string;
}

export interface ActiveInteractionUI {
  readonly data: PortfolioAssetsUI;
  readonly physicEvent: CollisionEventUI;
  readonly position: {
    readonly x: number;
    readonly y: number;
  };
  readonly zIndex?: number;
}

export interface InteractinPopupTokesUI {
  readonly SIZE: number;
  readonly OFFSET_Y: number;
  readonly ANIMATION: {
    IN: {
      scale:number;
      opacity: number;
      y: number;
      duration: number;
      ease: string;
    },
    OUT: {
      scale: number;
      opacity: number;
      y: number;
      duration:number;
      ease: string;
    }
  }
}

export interface InteractionPopupUI {
  readonly data: PopControllerUI | null;
  readonly isVisible: boolean;
  readonly position: {
    readonly x: number;
    readonly y: number;
  };
  readonly zIndex?: number;
}