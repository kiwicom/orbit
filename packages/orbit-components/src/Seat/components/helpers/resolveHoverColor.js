// @flow
import { TYPES } from "../../consts";

import type { Params } from "./index";

const resolveHoverColor = ({ theme, type }: Params) => {
  if (type === TYPES.UNAVAILABLE) return "";
  if (type === TYPES.LEGROOM) return theme.orbit.paletteBlueLightHover;
  return theme.orbit.paletteProductLightHover;
};

export default resolveHoverColor;
