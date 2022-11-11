import { TYPES } from "../consts";
import { Type } from "../types";
import { Theme } from "../../defaultTheme";

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
