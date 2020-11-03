// @flow
import { left } from "../utils/rtl";
import type { Theme, ThemeProps } from "../defaultTheme";

import type { SpacingToken, Position } from "./index";

type Prop = "align" | "justify" | "spacing";

export const formatCSS = (key: string, value: string): string => `${key}: ${value};`;

const getFlex = flex => {
  if (flex === "start") return "flex-start";
  if (flex === "end") return "flex-end";

  return "center";
};

export const normalizeSpacing = (el: SpacingToken, theme: Theme): string => {
  const tokens = {
    none: "",
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

  if (el !== "none") {
    return `
      margin-${left({ theme })}: -${tokens[el]};
      margin-top: -${tokens[el]};

      & > * {
        margin-${left({ theme })}: ${tokens[el]};
        margin-top: ${tokens[el]};
      }
    `;
  }

  return "";
};

type PropObject = { [key: Prop]: Position };

// TODO: kinda weird, but it's well known problem in flow with Object.entries
export const normalize = (object: PropObject) => ({ theme }: ThemeProps) => {
  if (!object) return null;

  return Object.entries(object).reduce((acc, [key, val]: [string, any]) => {
    if (key === "justify") {
      return [...acc, formatCSS("justify-content", getFlex(val))];
    }

    if (key === "align") {
      return [...acc, formatCSS("align-items", getFlex(val))];
    }

    if (key === "spacing") {
      return [...acc, normalizeSpacing(val, theme)];
    }

    if (val) {
      return [...acc, formatCSS(key, val)];
    }

    return acc;
  }, []);
};
