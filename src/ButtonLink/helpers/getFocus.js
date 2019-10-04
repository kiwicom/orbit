// @flow
import { css } from "styled-components";

import { TOKENS } from "../consts";
import getTypeToken from "./getTypeToken";
import type { GetFocus } from "./getFocus";

const getFocus: GetFocus = () => {
  return css`
    :focus {
      background: ${getTypeToken(TOKENS.backgroundButtonFocus)};
    }
    :focus:not(:focus-visible) {
      background: ${getTypeToken(TOKENS.backgroundButton)};
    }
    :-moz-focusring,
    :focus-visible {
      background: ${getTypeToken(TOKENS.backgroundButtonFocus)};
    }
  `;
};

export default getFocus;
