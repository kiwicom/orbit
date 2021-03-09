import buttonHasTitle from "./rules/buttonHasTitle";
import unnecessaryText from "./rules/unnecessaryText";
import recommended from "./configs/recommended";
import preferSingleDestructure from "./rules/preferSingleDestructure";

export const rules = {
  "button-has-title": buttonHasTitle,
  "unnecessary-text": unnecessaryText,
  "prefer-single-destructure": preferSingleDestructure,
};

export const configs = {
  recommended,
};
