import { IconType } from "react-icons";

export interface TitlesPageUI {
  readonly titleA: string;
  readonly titleB: string;
  readonly description: string;
  readonly headText: string;
  readonly isDark?: boolean;
  readonly icon?: IconType;
}


export interface TitlesPageStylesUI {
 readonly container: string;
 readonly headIconContainer: string;
 readonly headText: string;
 readonly titleA: string;
 readonly titleB: string;
 readonly description: string;
 readonly divider: string;
}