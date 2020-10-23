// @flow
import type { Theme } from "../defaultTheme";

export const WIDTH_AND_HEIGHT = {
  FULL: "full",
  AUTO: "auto",
};

export const TOKENS = (theme: Theme) => {
  return {
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
  };
};
