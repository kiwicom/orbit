// @flow
import type { Props } from "./tooltipPadding";

const tooltipPadding = ({ contentHeight, theme }: Props): string => {
  // one-line text should have smaller top/bottom padding
  if (contentHeight <= Math.floor(parseFloat(theme.orbit.lineHeightTextNormal))) {
    return `${theme.orbit.spaceXSmall} ${theme.orbit.spaceSmall}`; // TODO: create token
  }
  return theme.orbit.spaceSmall; // TODO: create token
};

export default tooltipPadding;
