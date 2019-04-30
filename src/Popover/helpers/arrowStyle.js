// @flow
import { css } from "styled-components";

import type { Props } from "./tooltipArrowStyle";

const arrowStyle = ({ position, theme }: Props) => {
  const arrows = {
    top: css`
      border-width: 7px 7px 0 7px; /* TODO: create token sizepopoverArrow */
      border-color: ${theme.orbit.paletteWhite} transparent transparent transparent; /*  TODO: create token backgroundpopover */
    `,
    bottom: css`
      border-width: 0 7px 7px 7px; /* TODO: create token sizepopoverArrow */
      border-color: transparent transparent ${theme.orbit.paletteWhite} transparent; /*  TODO: create token backgroundpopover */
    `,
  };
  return arrows[position];
};

export default arrowStyle;
