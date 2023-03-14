import type { FlattenInterpolation, ThemeProps } from "styled-components";
import { css } from "styled-components";

import getSpacing from "./getSpacing";
import getProperty from "./getProperty";
import { rtlSpacing } from "../../utils/rtl";
import { DIRECTIONS } from "../../utils/layout/consts";
import type { Direction, Spacing, Props } from "../types";
import type defaultTheme from "../../defaultTheme";
import type { Devices } from "../../utils/mediaQuery/types";

interface PropsWithTheme extends Props {
  theme: typeof defaultTheme;
}

const getDirectionSpacingTemplate = (direction: Direction | Spacing): string => {
  switch (direction) {
    case DIRECTIONS.ROW:
      return "0 __spacing__ 0 0";
    case DIRECTIONS.COLUMNREVERSE:
      return "__spacing__ 0 0 0";
    case DIRECTIONS.ROWREVERSE:
      return "0 0 0 __spacing__";
    default:
      return "0 0 __spacing__ 0";
  }
};

const getGap = ({ index, devices }: { index: number; devices: Devices[] }) => (
  props: PropsWithTheme,
): FlattenInterpolation<ThemeProps<any>> | null => {
  const spacing = getProperty("spacing", { index, devices }, props);
  const direction = getProperty("direction", { index, devices }, props) as Direction;
  const gap = spacing && direction && getSpacing(props.theme)[spacing];

  const margin =
    spacing &&
    direction &&
    String(getDirectionSpacingTemplate(direction)).replace(
      "__spacing__",
      getSpacing(props.theme)[spacing],
    );

  // workaround to make it work on Safari iOS < 14.1
  // TODO: remove that after dropping support for iOS < 14.1
  if (props.flex) {
    return css`
      gap: ${gap};
      @supports (-webkit-touch-callout: none) and (not (translate: none)) {
        & > *:not(:last-child) {
          margin: ${margin && rtlSpacing(margin)} !important;
        }
      }
    `;
  }

  return css`
    & > * {
      margin: ${margin && rtlSpacing(margin)}!important;
      &:last-child {
        margin: 0 !important;
      }
    }
  `;
};

export default getGap;
