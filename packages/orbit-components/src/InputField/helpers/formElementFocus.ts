import { css, Interpolation } from "styled-components";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import { Theme } from "../../defaultTheme";

const formElementFocus = (): Interpolation<any> => css`
  box-shadow: ${({ theme, error }: { theme: Theme; error: boolean }) =>
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
