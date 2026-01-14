import { IconType } from "react-icons";

export interface TitlesPageUI {
  readonly titleA: string;
  readonly titleB: string;
  readonly description: string;
  readonly headText: string;
  readonly isDark?: boolean;
  readonly icon?: IconType;
  readonly className?: string;
}


export interface TitlesPageStylesUI {
 readonly container: string;
 readonly headIconContainer: string;
 readonly headIcon: string;
 readonly headText: string;
 readonly titleA: string;
 readonly titleB: string;
 readonly description: string;
 readonly divider: string;
}