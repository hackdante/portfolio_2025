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
}