import type { Theme } from "../../defaultTheme";

const resolveColor = ({
  removable: removableColor,
  selected: selectedColor,
  normal: normalColor,
}: {
  removable: string;
  selected: string;
  normal: string;
}) => ({
  theme,
  selected,
  removable,
}: {
  theme: Theme;
  selected?: boolean;
  removable?: boolean;
}): string => {
  if (removable && !selected) return theme.orbit[removableColor];
  if (selected) return theme.orbit[selectedColor];

  return theme.orbit[normalColor];
};

export default resolveColor;
