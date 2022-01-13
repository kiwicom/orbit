// @flow
import type { ResolveColor } from "./resolveColor";

const resolveColor: ResolveColor = ({
  removable: removableColor,
  selected: selectedColor,
  normal: normalColor,
}) => ({ theme, selected, removable }) => {
  if (removable && !selected) return theme.orbit[removableColor];
  if (selected) return theme.orbit[selectedColor];

  return theme.orbit[normalColor];
};

export default resolveColor;
