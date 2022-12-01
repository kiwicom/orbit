import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

import type { ObjectPropertyUtility } from "../../common/types";

export const firstToUpper = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const defaultFocus = (): FlattenSimpleInterpolation => css`
  outline: 2px solid Highlight;
  outline: 2px solid -webkit-focus-ring-color;
`;

export const marginUtility = (
  margin: string | ObjectPropertyUtility,
): FlattenSimpleInterpolation => {
  if (typeof margin === "string") {
    return css`
      margin: ${margin};
    `;
  }

  return css`
    margin: ${margin.top} ${margin.right} ${margin.bottom} ${margin.left};
  `;
};
