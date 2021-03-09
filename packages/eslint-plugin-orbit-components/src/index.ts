import buttonHasTitle from "./rules/buttonHasTitle";
import unnecessaryText from "./rules/unnecessaryText";
import recommended from "./configs/recommended";
import noDeprecatedToken from "./rules/noDeprecatedToken";
import preferSingleDestructure from "./rules/preferSingleDestructure";

export const rules = {
  "button-has-title": buttonHasTitle,
  "unnecessary-text": unnecessaryText,
  "no-deprecated-token": noDeprecatedToken,
  "prefer-single-destructure": preferSingleDestructure,
};

export const configs = {
  recommended,
};
