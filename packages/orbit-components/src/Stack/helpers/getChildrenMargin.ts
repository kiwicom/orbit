import type { FlattenInterpolation, ThemeProps } from "styled-components";
import { css } from "styled-components";

import getSpacing from "./getSpacing";
import { rtlSpacing } from "../../utils/rtl";
import { SPACINGS } from "../../utils/layout/consts";
import getProperty from "./getProperty";
import { QUERIES } from "../../utils/mediaQuery/consts";
import type { Devices } from "../../utils/mediaQuery/types";
import getDirectionSpacingTemplate from "./getDirectionSpacingTemplate";
import type { Props as StackProps, Direction } from "../types";
import type defaultTheme from "../../defaultTheme";

interface Props extends StackProps {
  theme: typeof defaultTheme;
}

const getChildrenMargin = ({
  viewport,
  index,
  devices,
}: {
  viewport: Devices;
  index: number;
  devices: Devices[];
}) => (props: Props): FlattenInterpolation<ThemeProps<any>> | null => {
  if (props[viewport] || viewport === QUERIES.DESKTOP) {
    const spacing = getProperty("spacing", { index, devices }, props);
    if (spacing === SPACINGS.NONE) return null;
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
        &:last-child {
          margin: 0 !important;
        }
      }
    `;
  }

  return null;
};

export default getChildrenMargin;
