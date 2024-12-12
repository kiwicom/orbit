import { defaultTokens } from "@kiwicom/orbit-design-tokens";

export interface Theme {
  readonly orbit: typeof defaultTokens;
  readonly transitions?: boolean;
  readonly lockScrolling?: boolean;
  readonly lockScrollingBarGap?: boolean;
  readonly rtl?: boolean;
  readonly colorScheme?: "light" | "dark" | "system";
}

const defaultTheme: Theme = {
  orbit: defaultTokens,
  transitions: true,
  lockScrolling: true,
  lockScrollingBarGap: false,
  rtl: false,
  colorScheme: "light",
};

export interface ThemeProps {
  readonly theme: Theme;
}

export default defaultTheme;
