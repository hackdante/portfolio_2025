export type CharacterPose = "idle" | "walking" | "greeting" | "working";

export interface Character3DProps {
  pose?: CharacterPose;
  isLoaded?: (loaded: boolean) => void;
}