// @flow
import { TYPES } from "../../consts";

import type { Params } from "./index";

const resolveFocusColor = ({ type, theme, selected }: Params) => {
  if (!selected) return "";
  return type === TYPES.LEGROOM
    ? theme.orbit.paletteBlueNormalHover
    : theme.orbit.paletteProductNormalHover;
};

export default resolveFocusColor;
