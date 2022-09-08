import { css, FlattenInterpolation, ThemeProps } from "styled-components";

import getSpacing from "./getSpacing";
import { rtlSpacing } from "../../utils/rtl";
import { SPACINGS } from "../../utils/layout/consts";
import isMobileViewport from "./isMobileViewport";
import getProperty from "./getProperty";
import { QUERIES } from "../../utils/mediaQuery/consts";
import { Devices } from "../../utils/mediaQuery/types";
import getDirectionSpacingTemplate from "./getDirectionSpacingTemplate";
import { Props, Direction } from "../types";
import { Theme } from "../../defaultTheme";

interface StyledProps extends Props {
  theme: Theme;
}

const getChildrenMargin = ({
  viewport,
  index,
  devices,
}: {
  viewport: Devices;
  index: number;
  devices: Devices[];
}) => (props: StyledProps): FlattenInterpolation<ThemeProps<any>> | false => {
  if (props[viewport] || viewport === QUERIES.desktop) {
    const spacing = getProperty("spacing", { index, devices }, props);
    if (spacing === SPACINGS.NONE) return false;
    const isMobile = isMobileViewport(viewport);
    const direction = getProperty("direction", { index, devices }, props) as Direction;
    const margin =
      spacing &&
      direction &&
      String(getDirectionSpacingTemplate(direction)).replace(
        "__spacing__",
        getSpacing(props.theme)[spacing],
      );
    return css`
      & > * {
        margin: ${margin && rtlSpacing(margin)}!important;
        ${isMobile &&
        css`
          &:last-child {
            margin: 0 !important;
          }
        `};
      }
    `;
  }
  return false;
};

export default getChildrenMargin;
