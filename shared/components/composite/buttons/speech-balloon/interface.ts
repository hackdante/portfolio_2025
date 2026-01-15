import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";
import { PositionUI, StatusType } from "@/shared/types";

export interface SpeechBalloonActionUI {
  readonly icon: ComponentType<IconBaseProps>;
  readonly section: string;
  readonly message: string;
  readonly type: StatusType;
  readonly action?: () => void;
}

export interface SpeechBalloonTokenUI {
  readonly colors: {
    readonly background: string;
    readonly text: string;
    readonly border: string;
    readonly accent: string;
  };
  readonly animation: {
    readonly duration: number;
    readonly stagger: number;
    readonly idleDelay: number;
  };
  readonly geometry: {
    readonly maxWidth: string;
    readonly borderRadius: string;
    readonly padding: string;
  };
}

export interface SpeechBalloonUI {
  readonly currentConfig?: SpeechBalloonActionUI;
  readonly tokens: SpeechBalloonTokenUI;
  readonly idleMessages: string[]; 
  readonly position?: PositionUI
}