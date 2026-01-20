import { IconType } from "react-icons";

export interface MiniCardUI {
  readonly id: string;        
  readonly title: string;
  readonly description: string;
  readonly icon: IconType;
  readonly cta: {
    readonly label: string;
    readonly href: string;
  };
}