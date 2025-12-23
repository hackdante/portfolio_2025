import { IconType } from "react-icons";

export interface TechIconUI {
  name: string;
   icon: IconType;
  color?: string;
}

export interface DomainLinkUI {
  title: string;
  description: string;
  href: string;
  label: string;
  variant: '3d' | 'web' | 'admin';
}