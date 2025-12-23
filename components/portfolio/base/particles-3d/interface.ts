export interface ParticleUI {
  x: number;
  y: number;
  z: number;
  rotation: number;
  speed: number;
  opacity: number;
  scale: number;
  landed: boolean;
}

export interface Particles3dV1UI {
  count?: number;
  area?: number;
  fallSpeed?: number;
}

