import buttonHasTitle from "./rules/buttonHasTitle";
import unnecessaryText from "./rules/unnecessaryText";
import recommended from "./configs/recommended";
import noDeprecatedToken from "./rules/noDeprecatedToken";

export const rules = {
  "button-has-title": buttonHasTitle,
  "unnecessary-text": unnecessaryText,
  "no-deprecated-token": noDeprecatedToken,
};

export const configs = {
  recommended,
};
