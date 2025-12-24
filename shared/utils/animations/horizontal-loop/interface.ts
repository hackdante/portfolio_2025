import { ElementType } from "react";
import { ThemeType, VariantType } from "@/shared/types";

export interface TechStackUI {
  readonly theme?: ThemeType;
  readonly orientation?: "horizontal" | "vertical";
  readonly variant?: VariantType | "default" | "active";
  readonly size?: number;
  readonly columns?: number;
}

export interface TechStackItemUI {
  readonly name: string;
  readonly icon: ElementType;
}

export interface HorizontalLoopUI {
  readonly repeat?: number;
  readonly paused?: boolean;
  readonly speed?: number;
  readonly snap?: number | boolean;
  readonly paddingRight?: number | string;
  readonly reversed?: boolean;
}

export interface HorizontalLoopTimelineUI extends gsap.core.Timeline {
  next: (vars?: gsap.TweenVars) => gsap.core.Tween;
  prev: (vars?: gsap.TweenVars) => gsap.core.Tween;
  current: () => number;
  toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
  readonly times: readonly number[];
}