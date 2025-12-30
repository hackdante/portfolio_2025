import { IconDefaultUI } from "@/shared/components/base";

export type SpeedDialDirectionType = "up" | "down" | "left" | "right";

export interface SpeedDialUI extends IconDefaultUI {
  readonly dial: string

}
