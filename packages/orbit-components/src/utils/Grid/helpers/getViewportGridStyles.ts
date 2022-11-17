import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

import getSpacingToken from "../../../common/getSpacingToken";
import getDisplay from "./getDisplay";
import type { Devices } from "../../mediaQuery/types";
import type { Props } from "../types";
import type defaultTheme from "../../../defaultTheme";

const getViewportGridStyles = ({
  viewport,
  theme,
}: {
  viewport: Devices;
  theme: typeof defaultTheme;
}) => (props: Props): FlattenSimpleInterpolation => {
  if (props[viewport]) {
    const { inline, maxWidth, gap, columnGap, rowGap, rows, columns, width, spaceAfter } = props[
      viewport
    ];

    return css`
      ${getDisplay(inline, viewport === "smallMobile")};
      max-width: ${maxWidth};
      width: ${width};
      grid-template-columns: ${columns};
      grid-template-rows: ${rows};
      grid-column-gap: ${columnGap};
      grid-row-gap: ${rowGap};
      grid-gap: ${gap};
      margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
    `;
  }

  return css``;
};

export default getViewportGridStyles;
