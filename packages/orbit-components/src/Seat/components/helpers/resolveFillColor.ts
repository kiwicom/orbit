import resolveFocusColor from "./resolveFocusColor";
import resolveAccentColor from "./resolveAccentColor";
import { TYPES } from "../../consts";

import type { Params } from ".";

const resolveFillColor = ({ type, theme, selected, focus }: Params): string => {
  if (focus) {
    if (type === TYPES.UNAVAILABLE) return "";

    if (!selected) {
      return resolveAccentColor({ type, theme, selected });
    }

    return resolveFocusColor({ type, theme, selected });
  }

  if (type === TYPES.LEGROOM)
    return selected ? theme.orbit.paletteBlueNormal : theme.orbit.paletteBlueLight;

  if (type === TYPES.UNAVAILABLE) return theme.orbit.paletteCloudLight;

  return selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteProductLight;
};

export default resolveFillColor;
