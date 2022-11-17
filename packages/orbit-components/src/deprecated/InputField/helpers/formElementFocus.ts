import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";
import type * as React from "react";

import type defaultTheme from "../../../defaultTheme";

const formElementFocus = ({
  theme,
  error,
}: {
  theme: typeof defaultTheme;
  error?: React.ReactNode;
}): FlattenSimpleInterpolation => css`
  box-shadow: ${error
    ? `inset 0 0 0 1px ${theme.orbit.paletteRedNormal}, 0 0 0 3px ${convertHexToRgba(
        theme.orbit.paletteRedNormal,
        15,
      )};`
    : `inset 0 0 0 1px ${theme.orbit.borderColorInputFocus}, 0 0 0 3px ${convertHexToRgba(
        theme.orbit.borderColorInputFocus,
        15,
      )};`};
`;

export default formElementFocus;
