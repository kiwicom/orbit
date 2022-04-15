// @flow
import type { ThemeProps } from "../../../defaultTheme";

export type Props = {|
  contentHeight: number,
  ...ThemeProps,
|};

const tooltipPadding = ({ contentHeight, theme }: Props): string => {
  // one-line text should have smaller top/bottom padding
  if (contentHeight <= Math.floor(parseFloat(theme.orbit.lineHeightNormal))) {
    return `${theme.orbit.spaceTwoX} ${theme.orbit.spaceThreeX}`;
  }
  return theme.orbit.spaceThreeX;
};

export default tooltipPadding;
