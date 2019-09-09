// @flow
import { css } from "styled-components";

import mq from "../../utils/mediaQuery";
import { POSITIONS } from "../consts";

const computedWidth = (width, isPrefixed) => `${isPrefixed ? "-" : ""}${width}`;

const transitionCss = ({ width, shown }) => isPrefixed => {
  return css`
    transform: translate3d(${shown ? "0" : `${computedWidth("100%", isPrefixed)} , 0, 0`});
    ${mq.largeMobile(css`
      transform: translate3d(${shown ? "0" : `${computedWidth(width, isPrefixed)} , 0, 0`});
    `)};
  `;
};

const getTransitionAnimation = ({ width, shown, position, theme }) => {
  const resultCss = transitionCss({ width, shown });
  if (position === POSITIONS.LEFT) {
    if (theme.rtl) {
      return resultCss(false);
    }
    return resultCss(true);
  }
  if (theme.rtl) {
    return resultCss(true);
  }
  return resultCss(false);
};

export default getTransitionAnimation;
