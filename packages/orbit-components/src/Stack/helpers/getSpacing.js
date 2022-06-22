// @flow
import { SPACINGS } from "../../utils/layout/consts";
import type { GetSpacing } from "./getSpacing";

const getSpacing: GetSpacing = ({ theme }) => ({
  none: "unset",
  [SPACINGS.XXXSMALL]: theme.orbit.spaceXXXSmall,
  [SPACINGS.XXSMALL]: theme.orbit.spaceXXSmall,
  [SPACINGS.XSMALL]: theme.orbit.spaceXSmall,
  [SPACINGS.SMALL]: theme.orbit.spaceSmall,
  [SPACINGS.MEDIUM]: theme.orbit.spaceMedium,
  [SPACINGS.LARGE]: theme.orbit.spaceLarge,
  [SPACINGS.XLARGE]: theme.orbit.spaceXLarge,
  [SPACINGS.XXLARGE]: theme.orbit.spaceXXLarge,
});

export default getSpacing;
