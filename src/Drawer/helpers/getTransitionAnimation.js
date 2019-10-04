// @flow
import { css } from "styled-components";

import mq from "../../utils/mediaQuery";
import POSITIONS from "../consts";
import type { GetTransitionAnimation } from "./getTransitionAnimation";

const computedWidth = (width, isPrefixed) => `${isPrefixed ? "-" : ""}${width}`;

const transitionCss = ({ width, shown }) => isPrefixed => {
  return css`
    transform: translate3d(${shown ? "0, 0, 0" : `${computedWidth("100%", isPrefixed)} , 0, 0`});
    ${mq.largeMobile(css`
      transform: translate3d(${shown ? "0, 0, 0" : `${computedWidth(width, isPrefixed)} , 0, 0`});
    `)};
  `;
};

const getTransitionAnimation: GetTransitionAnimation = ({ width, shown, position, theme }) => {
  const resultCss = transitionCss({ width, shown });
  if ((position === POSITIONS.RIGHT && !theme.rtl) || (position === POSITIONS.LEFT && theme.rtl)) {
    return resultCss(false);
  }
  return resultCss(true);
};

export default getTransitionAnimation;
