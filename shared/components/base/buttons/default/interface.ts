// shared/components/base/buttons/default/interface.ts
import { ReactNode, MouseEventHandler } from "react";
import { SizesType, StatusType, ButtonActionType } from "@/shared/types"; // Ajusta la ruta según tu alias

export interface ButtonDefaultUI {
  children: ReactNode;
  variant?: Exclude<StatusType, 'hover'>; // 'hover' no es una variante, es un estado
  size?: SizesType;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonActionType;
  id?: string;
}