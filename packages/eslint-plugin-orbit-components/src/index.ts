import buttonHasTitle from "./rules/buttonHasTitle";
import unnecessaryText from "./rules/unnecessaryText";
import recommended from "./configs/recommended";
import preferSingleDestructure from "./rules/preferSingleDestructure";
import customColors from "./rules/customColors";
import defaultTheme from "./rules/defaultTheme";

export const rules = {
  "button-has-title": buttonHasTitle,
  "unnecessary-text": unnecessaryText,
  "prefer-single-destructure": preferSingleDestructure,
  "custom-colors": customColors,
  "default-theme": defaultTheme,
};

export const configs = {
  recommended,
};
