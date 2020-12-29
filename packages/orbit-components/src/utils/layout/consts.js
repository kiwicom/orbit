// @flow
import type { Theme } from "../../defaultTheme";

export const DIRECTIONS = {
  ROW: "row",
  COLUMN: "column",
  ROWREVERSE: "row-reverse",
  COLUMNREVERSE: "column-reverse",
};

export const ALIGNS = {
  START: "start",
  END: "end",
  CENTER: "center",
  STRETCH: "stretch",
  BASELINE: "baseline",
};

export const JUSTIFY = {
  START: "start",
  END: "end",
  CENTER: "center",
  BETWEEN: "between",
  AROUND: "around",
};

export const SPACINGS = {
  NONE: "none",
  XXXSMALL: "XXXSmall",
  XXSMALL: "XXSmall",
  XSMALL: "XSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "XLarge",
  XXLARGE: "XXLarge",
};

export const TOKENS = (theme: Theme) => ({
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
