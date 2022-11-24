import type { Theme } from "../../../defaultTheme";

const backgroundColor = ({
  theme,
  error,
  help,
}: {
  theme: Theme;
  error?: boolean;
  help?: boolean;
}): string => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;

  return theme.orbit.paletteInkDark;
};

export default backgroundColor;
