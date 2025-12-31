/**
 * Interface para las propiedades del componente PillarButton.
 * Sigue la convención de nomenclatura UI suffix.
 */
export interface PillarButtonUI {
  label: string;
  positionXYZ: [number, number, number];
  rotationX?: number;
  isDisable: boolean;
  onAction: () => void;
}

/**
 * Tipos para el manejo de estados de animación internos.
 * Se utiliza para asegurar que las transiciones de color y posición
 * sean consistentes con el motor Three.js.
 */
export interface PillarAnimationStateUI {
  isActive: boolean;
  boxColor: string;
  raiseHeight: number;
}