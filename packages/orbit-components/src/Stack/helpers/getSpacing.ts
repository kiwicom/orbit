import { SPACINGS } from "../../utils/layout/consts";
import type { Theme } from "../../defaultTheme";

const getSpacing = (theme: Theme): Record<string, string> => ({
  [SPACINGS.NONE]: "",
  [SPACINGS.XXXSMALL]: theme.orbit.spaceXXXSmall,
  [SPACINGS.XXSMALL]: theme.orbit.spaceXXSmall,
  [SPACINGS.XSMALL]: theme.orbit.spaceXSmall,
  [SPACINGS.SMALL]: theme.orbit.spaceSmall,
  [SPACINGS.MEDIUM]: theme.orbit.spaceMedium,
  [SPACINGS.LARGE]: theme.orbit.spaceLarge,
  [SPACINGS.XLARGE]: theme.orbit.spaceXLarge,
  [SPACINGS.XXLARGE]: theme.orbit.spaceXXLarge,
  [SPACINGS.XXXLARGE]: theme.orbit.spaceXXXLarge,
});

export default getSpacing;
