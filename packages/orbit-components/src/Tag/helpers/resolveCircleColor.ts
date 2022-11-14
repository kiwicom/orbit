import { TYPES } from "../consts";
import type { Type } from "../types";
import type { Theme } from "../../defaultTheme";

const resolveColor = () => ({
  theme,
  selected,
  type,
}: {
  theme: Theme;
  selected?: boolean;
  type?: Type;
}): string => {
  if (selected) return theme.orbit.paletteWhite;
  return type === TYPES.NEUTRAL ? theme.orbit.paletteInkDark : theme.orbit.paletteBlueDarker;
};

export default resolveColor;
