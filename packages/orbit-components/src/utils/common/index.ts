import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

import type { ObjectProperty } from "../../common/types";

export const firstToUpper = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const defaultFocus = (): FlattenSimpleInterpolation => css`
  outline: 2px solid Highlight;
  outline: 2px solid -webkit-focus-ring-color;
`;

export const marginUtility = (
  margin?: string | ObjectProperty,
): FlattenSimpleInterpolation | null => {
  if (!margin) return null;
  if (typeof margin === "string") {
    return css`
      margin: ${margin};
    `;
  }

  return css`
    margin: ${margin.top} ${margin.right} ${margin.bottom} ${margin.left};
  `;
};
