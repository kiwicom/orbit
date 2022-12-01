import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

import type { ObjectProperty } from "../../common/types";

export const firstToUpper = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const defaultFocus = (): FlattenSimpleInterpolation => css`
  outline: 2px solid Highlight;
  outline: 2px solid -webkit-focus-ring-color;
`;

export const marginUtility = (
  margin?: React.CSSProperties["margin"] | ObjectProperty,
): FlattenSimpleInterpolation | null => {
  if (!margin) return null;
  if (typeof margin === "string" || typeof margin === "number") {
    return css`
      margin: ${margin};
    `;
  }

  const { top = 0, right = 0, bottom = 0, left = 0 } = margin;

  return css`
    margin: ${top} ${right} ${bottom} ${left};
  `;
};
