import { VariantType, SizeType, ThemeType } from "@/shared/types";

export type ButtonHtmlType = 'button' | 'submit' | 'reset';

export interface DefaultButtonUI {
  readonly label: string;
  readonly variant?: VariantType;
  readonly size?: SizeType;
  readonly theme?: ThemeType;
  readonly type?: ButtonHtmlType;
  readonly isDisabled?: boolean;
  readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  readonly onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}