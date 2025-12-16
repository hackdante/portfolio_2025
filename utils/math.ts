export const degToRad = (d: number) => (d * Math.PI) / 180;

export const clamp = (v: number, min: number, max: number): number =>
  Math.min(Math.max(v, min), max);