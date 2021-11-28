// @flow
import type { ThemeProps } from "../../../defaultTheme";

export type Props = {|
  contentHeight: number,
  ...ThemeProps,
|};

const tooltipPadding = ({ contentHeight, theme }: Props): string => {
  // one-line text should have smaller top/bottom padding
  if (contentHeight <= Math.floor(parseFloat(theme.orbit.lineHeightTextNormal))) {
    return `${theme.orbit.spaceXSmall} ${theme.orbit.spaceSmall}`;
  }
  return theme.orbit.spaceSmall;
};

export default tooltipPadding;
