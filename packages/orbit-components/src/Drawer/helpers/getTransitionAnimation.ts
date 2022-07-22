import { css, FlattenInterpolation, ThemeProps } from "styled-components";

import mq from "../../utils/mediaQuery";
import POSITIONS from "../consts";
import { Theme } from "../../defaultTheme";

const computedWidth = (width: string, isPrefixed: boolean) => `${isPrefixed ? "-" : ""}${width}`;

const transitionCss = ({ width, shown }: { width: string; shown?: boolean }) => (
  isPrefixed: boolean,
) => {
  return css`
    transform: translate3d(${shown ? "0, 0, 0" : `${computedWidth("100%", isPrefixed)} , 0, 0`});
    ${mq.largeMobile(css`
      transform: translate3d(${shown ? "0, 0, 0" : `${computedWidth(width, isPrefixed)} , 0, 0`});
    `)};
  `;
};

const getTransitionAnimation = ({
  width,
  shown,
  position,
  theme,
}: {
  width: string;
  shown?: boolean;
  position: "right" | "left";
  theme: Theme;
}): FlattenInterpolation<ThemeProps<Theme>> => {
  const resultCss = transitionCss({ width, shown });
  if ((position === POSITIONS.RIGHT && !theme.rtl) || (position === POSITIONS.LEFT && theme.rtl)) {
    return resultCss(false);
  }
  return resultCss(true);
};

export default getTransitionAnimation;
