import { left } from "../utils/rtl";
import type { Theme, ThemeProps } from "../defaultTheme";
import { getAlign, getJustify, formatCSS } from "../utils/layout";
import { TOKENS } from "../utils/layout/consts";
import type { SpacingToken, Align, Justify } from "./types";

type Prop = "align" | "justify" | "spacing";

export const normalizeSpacing = (el: SpacingToken, theme: Theme): string => {
  const tokens = TOKENS(theme);

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

type PropObject = Record<Prop, Align | Justify | SpacingToken>;

export const normalize = (object: PropObject) => ({ theme }: ThemeProps): string[] | null => {
  if (!object) return null;

  return Object.keys(object).reduce<string[]>((acc, key) => {
    const val = object[key];

    if (key === "spacing") return [...acc, normalizeSpacing(val, theme)];
    if (key === "justify") return [...acc, formatCSS("justify-content", getJustify(val))];
    if (key === "align") return [...acc, formatCSS("align-items", getAlign(val))];
    if (val) return [...acc, formatCSS(key, val)];

    return acc;
  }, []);
};
