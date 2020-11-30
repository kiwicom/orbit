import buttonHasTitle from "./rules/buttonHasTitle";
import defaultTheme from "./rules/defaultTheme";
import rtlUtils from "./rules/rtlUtils";
import useRtl from "./rules/useRtl";
import internal from "./configs/internal";
import noCustomColors from "./rules/noCustomColors";
import noCustomTypography from "./rules/noCustomTypography";
import preferSingleDestructure from "./rules/preferSingleDestructure";
import recommended from "./configs/recommended";
import uniqueId from "./rules/uniqueId";
import unnecessaryText from "./rules/unnecessaryText";
import noDeprecatedToken from "./rules/noDeprecatedToken";

export const rules = {
  "button-has-title": buttonHasTitle,
  "default-theme": defaultTheme,
  "no-custom-colors": noCustomColors,
  "no-custom-typography": noCustomTypography,
  "prefer-single-destructure": preferSingleDestructure,
  "rtl-utils": rtlUtils,
  "unique-id": uniqueId,
  "unnecessary-text": unnecessaryText,
  "use-rtl": useRtl,
  "no-deprecated-token": noDeprecatedToken,
};

export const configs = {
  recommended,
  internal,
};
