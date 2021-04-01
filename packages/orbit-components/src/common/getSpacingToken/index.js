// @flow
import SPACINGS_AFTER from "./consts";

import type { Props } from ".";

const getSpacingToken = ({ spaceAfter, theme }: Props): void | string => {
  const tokens = {
    [SPACINGS_AFTER.NONE]: "0",
    [SPACINGS_AFTER.SMALLEST]: theme.orbit.spaceXXSmall,
    [SPACINGS_AFTER.SMALL]: theme.orbit.spaceXSmall,
    [SPACINGS_AFTER.NORMAL]: theme.orbit.spaceSmall,
    [SPACINGS_AFTER.MEDIUM]: theme.orbit.spaceMedium,
    [SPACINGS_AFTER.LARGE]: theme.orbit.spaceLarge,
    [SPACINGS_AFTER.LARGEST]: theme.orbit.spaceXLarge,
  };
  return spaceAfter && tokens[spaceAfter];
};

export default getSpacingToken;
