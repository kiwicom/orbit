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

export const marginUtility = (
  margin?: React.CSSProperties["margin"] | ObjectProperty,
): FlattenSimpleInterpolation | null => {
  if (!margin) return null;
  if (typeof margin === "string" || typeof margin === "number") {
    return css`
      margin: ${setValue(margin)};
    `;
  }

  const { top, right, bottom, left } = margin;

  return css`
    margin-top: ${setValue(top)};
    margin-right: ${setValue(right)};
    margin-bottom: ${setValue(bottom)};
    margin-left: ${setValue(left)};
  `;
};
