import { ReactNode, MouseEventHandler } from "react";
import { SizesType, StatusType, ButtonActionType } from "@/shared/types"; 

export interface ButtonDefaultUI {
  readonly children: ReactNode;
  readonly variant?: StatusType; 
  readonly size?: SizesType;
  readonly isLoading?: boolean;
  readonly leftIcon?: ReactNode;
  readonly rightIcon?: ReactNode;
  readonly fullWidth?: boolean;
  readonly onClick?: MouseEventHandler<HTMLButtonElement>;
  readonly type?: ButtonActionType;
  readonly id?: string;
}