// @flow
import { TYPES } from "../../consts";

import type { Params } from "./index";

const resolveAccentColor = ({ type, theme, selected }: Params) => {
  if (type === TYPES.LEGROOM)
    return selected ? theme.orbit.paletteBlueNormal : theme.orbit.paletteBlueLightActive;

  if (type === TYPES.UNAVAILABLE) return theme.orbit.paletteCloudLightActive;

  return selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteProductLightActive;
};

export default resolveAccentColor;
