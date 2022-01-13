// @flow
import type { ResolveCircleColor } from "./resolveCircleColor";
import { TYPES } from "../consts";

const resolveColor: ResolveCircleColor = () => ({ theme, selected, type }) => {
  if (selected) return theme.orbit.paletteWhite;
  return type === TYPES.NEUTRAL ? theme.orbit.paletteInkNormal : theme.orbit.paletteBlueDarker;
};

export default resolveColor;
