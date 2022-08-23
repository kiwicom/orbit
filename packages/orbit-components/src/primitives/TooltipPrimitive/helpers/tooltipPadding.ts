import { Theme } from "../../../defaultTheme";

const tooltipPadding = ({
  contentHeight,
  theme,
}: {
  contentHeight: number;
  theme: Theme;
}): string => {
  // one-line text should have smaller top/bottom padding
  if (contentHeight <= Math.floor(parseFloat(theme.orbit.lineHeightTextNormal))) {
    return `${theme.orbit.spaceXSmall} ${theme.orbit.spaceSmall}`;
  }
  return theme.orbit.spaceSmall;
};

export default tooltipPadding;
