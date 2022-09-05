import { Theme } from "../../defaultTheme.d";

export enum DIRECTIONS {
  ROW = "row",
  COLUMN = "column",
  ROWREVERSE = "row-reverse",
  COLUMNREVERSE = "column-reverse",
}

export enum ALIGNS {
  START = "start",
  END = "end",
  CENTER = "center",
  STRETCH = "stretch",
  BASELINE = "baseline",
}

export enum JUSTIFY {
  START = "start",
  END = "end",
  CENTER = "center",
  BETWEEN = "between",
  AROUND = "around",
}

export enum SPACINGS {
  NONE = "none",
  XXXSMALL = "XXXSmall",
  XXSMALL = "XXSmall",
  XSMALL = "XSmall",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XLARGE = "XLarge",
  XXLARGE = "XXLarge",
  XXXLARGE = "XXXLarge",
}

const TokenNames = Object.values(SPACINGS);
type Tokens = typeof TokenNames[number];

export const TOKENS = (theme: Theme): Record<Tokens, string | null> => ({
  none: null,
  XXXSmall: theme.orbit.spaceXXXSmall,
  XXSmall: theme.orbit.spaceXXSmall,
  XSmall: theme.orbit.spaceXSmall,
  small: theme.orbit.spaceSmall,
  medium: theme.orbit.spaceMedium,
  large: theme.orbit.spaceLarge,
  XLarge: theme.orbit.spaceXLarge,
  XXLarge: theme.orbit.spaceXXLarge,
  XXXLarge: theme.orbit.spaceXXXLarge,
});
