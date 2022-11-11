import { TYPES } from "../../consts";

import { Params } from ".";

const resolveFocusColor = ({ type, theme, selected }: Params): string => {
  if (!selected) return "";
  return type === TYPES.LEGROOM
    ? theme.orbit.paletteBlueNormalHover
    : theme.orbit.paletteProductNormalHover;
};

export default resolveFocusColor;
