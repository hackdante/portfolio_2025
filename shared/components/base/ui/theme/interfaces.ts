import { ReactNode } from 'react';

export type ThemeModeType = 'light' | 'dark' | 'system';


export type ThemeAttributeType = 'class' | 'data-theme' | `data-${string}`;

export interface ThemeProviderPropsUI {
  readonly children: ReactNode;
  readonly attribute?: ThemeAttributeType;
  readonly defaultTheme?: ThemeModeType;
  readonly enableSystem?: boolean;
  readonly storageKey?: string;
  readonly disableTransitionOnChange?: boolean;
  readonly forcedTheme?: string;
readonly themes?: string[];
  readonly enableColorScheme?: boolean;
}