import { CharacterAnimationType } from "@/shared/types";

export interface MainScene3DUI {
  readonly animation: CharacterAnimationType;
}

export interface CharacterScreenSizeUI  {
  readonly  sm: number
  readonly  md: number
  readonly  lg: number 
}