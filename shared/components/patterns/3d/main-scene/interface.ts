export type CharacterMainAnimationsType =
  | "000_Awake"
  | "Bow"
  | "Jog_sign"
  | "Moon_walk"
  | "Ouch_punch"
  | "Runner"
  | "Walking";

export interface CharacterAnimationUI {
  readonly type: [
    "000_Awake",
    "Bow",
    "Jog_sign",
    "Moon_walk",
    "Ouch_punch",
    "Runner",
    "Walking"
  ];
}
