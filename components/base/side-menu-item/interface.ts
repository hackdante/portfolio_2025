import { JSX } from "react";

export interface SideMenuItemUI {
  title: string;
  description: string;
  icon: JSX.Element;
  route: string;
}