// @flow
import { css } from "styled-components";

import type { Props } from "./tooltipArrowStyle";

const tooltipArrowStyle = ({ position, theme }: Props): any => {
  const arrows = {
    top: css`
      border-width: 7px 7px 0 7px; // TODO: create token sizeTooltipArrow
      border-color: ${theme.orbit.paletteInkNormal} transparent transparent transparent; // TODO: create token backgroundTooltip
    `,
    right: css`
      border-width: 7px 7px 7px 0; // TODO: create token sizeTooltipArrow
      border-color: transparent ${theme.orbit.paletteInkNormal} transparent transparent; // TODO: create token backgroundTooltip
    `,
    left: css`
      border-width: 7px 0 7px 7px; // TODO: create token sizeTooltipArrow
      border-color: transparent transparent transparent ${theme.orbit.paletteInkNormal}; // TODO: create token backgroundTooltip
    `,
    bottom: css`
      border-width: 0 7px 7px 7px; // TODO: create token sizeTooltipArrow
      border-color: transparent transparent ${theme.orbit.paletteInkNormal} transparent; // TODO: create token backgroundTooltip
    `,
  };
  return arrows[position];
};

export default tooltipArrowStyle;
