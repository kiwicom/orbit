// @flow
import { SPACINGS } from "../consts";
import type { GetStackSpacingToken } from "./getStackSpacingToken";

const getStackSpacingToken: GetStackSpacingToken = (theme, spacing) => {
  if (!spacing) return null;
  const tokens = {
    [SPACINGS.NONE]: null,
    [SPACINGS.XXXS]: theme.orbit.spaceXXXSmall,
    [SPACINGS.XXS]: theme.orbit.spaceXXSmall,
    [SPACINGS.XS]: theme.orbit.spaceXSmall,
    [SPACINGS.SMALL]: theme.orbit.spaceSmall,
    [SPACINGS.MEDIUM]: theme.orbit.spaceMedium,
    [SPACINGS.LARGE]: theme.orbit.spaceLarge,
    [SPACINGS.XL]: theme.orbit.spaceXLarge,
    [SPACINGS.XXL]: theme.orbit.spaceXXLarge,
  };
  return tokens[spacing];
};

export default getStackSpacingToken;
