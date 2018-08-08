// @flow
import { css } from "styled-components";

import type { StyledComponentsInterpolation } from "./media";

const media = {
  desktop: (...args: StyledComponentsInterpolation[]) => css`
    @media (min-width: 600px) {
      // TODO: use token
      ${css(...args)};
    }
  `,
};

export default media;
