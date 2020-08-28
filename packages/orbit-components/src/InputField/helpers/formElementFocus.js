// @flow
import { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

const formElementFocus = () => css`
  box-shadow: ${({ theme, error }) =>
    error
      ? // TODO: UPDATE TOKENS ==> `${theme.orbit.borderWidthInputFocus} ${theme.orbit.borderColorInputFocus}`
        `inset 0 0 0 1px ${theme.orbit.paletteRedNormal}, 0 0 0 3px ${convertHexToRgba(
          theme.orbit.paletteRedNormal,
          15,
        )};`
      : `inset 0 0 0 1px ${theme.orbit.borderColorInputFocus}, 0 0 0 3px ${convertHexToRgba(
          theme.orbit.borderColorInputFocus,
          15,
        )};`};
`;

export default formElementFocus;
