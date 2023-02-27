import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

import type { ObjectProperty } from "../../common/types";

export const firstToUpper = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const defaultFocus = (): FlattenSimpleInterpolation => css`
  outline: 2px solid Highlight;
  outline: 2px solid -webkit-focus-ring-color;
`;

const setValue = (value?: string | number): string | null => {
  if (value == null) return null;
  return typeof value === "number" && value !== 0 ? `${value}px` : String(value);
};

export const spacingUtility = (
  spacing?: string | number | ObjectProperty,
  prop: "padding" | "margin" = "margin",
): FlattenSimpleInterpolation | null => {
  if (!spacing) return null;
  if (typeof spacing === "string" || typeof spacing === "number") {
    return css`
      ${prop}: ${setValue(spacing)};
    `;
  }

  const { top, right, bottom, left } = spacing;

  return css`
    ${prop}-top: ${setValue(top)};
    ${prop}-right: ${setValue(right)};
    ${prop}-bottom: ${setValue(bottom)};
    ${prop}-left: ${setValue(left)};
  `;
};
