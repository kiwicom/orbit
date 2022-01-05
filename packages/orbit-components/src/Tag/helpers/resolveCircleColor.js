// @flow
import type { ResolveCircleColor } from "./resolveCircleColor";
import { TYPES } from "../consts";

const resolveColor: ResolveCircleColor = () => ({ theme, selected, type }) => {
  if (selected) return theme.orbit.paletteWhite;
  return type === TYPES.PRIMARY ? theme.orbit.paletteBlueDarker : theme.orbit.paletteInkNormal;
};

export default resolveColor;
