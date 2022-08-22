import { css, FlattenSimpleInterpolation } from "styled-components";

import { Theme } from "../../defaultTheme";
import POSITIONS from "../consts";
import { left, right } from "../../utils/rtl";

const getPosition = ({
  position,
  theme,
}: {
  position: "right" | "left";
  theme: Theme;
}): FlattenSimpleInterpolation => css`
  ${position === POSITIONS.RIGHT ? right({ theme }) : left({ theme })}: 0;
`;

export default getPosition;
