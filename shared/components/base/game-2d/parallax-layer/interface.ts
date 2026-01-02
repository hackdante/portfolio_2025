import { ReactNode } from "react";

export interface ParallaxLayerUI {
  depth: 1 | 2 | 3 | 4 | 5; 
  speedFactor: number;      
  patternSource: string;    
  isFixed?: boolean;        
  children?: ReactNode;
}