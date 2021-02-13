import buttonHasTitle from "./rules/buttonHasTitle";
import unnecessaryText from "./rules/unnecessaryText";
import uniqueId from "./rules/uniqueId";
import recommended from "./configs/recommended";
import preferSingleDestructure from "./rules/preferSingleDestructure";
import customColors from "./rules/customColors";
import defaultTheme from "./rules/defaultTheme";
import rtlUtils from "./rules/rtlUtils";
import internal from "./configs/internal";
import customTypography from "./rules/customTypography";

export const rules = {
  "button-has-title": buttonHasTitle,
  "unnecessary-text": unnecessaryText,
  "prefer-single-destructure": preferSingleDestructure,
  "custom-colors": customColors,
  "default-theme": defaultTheme,
  "rtl-utils": rtlUtils,
  "unique-id": uniqueId,
  "custom-typography": customTypography,
};

export const configs = {
  recommended,
  internal,
};
