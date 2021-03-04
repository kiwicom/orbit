import noDeprecatedToken from "eslint-plugin-orbit-components/dist/rules/noDeprecatedToken";

import uniqueId from "./rules/unique-id";
import recommended from "./configs/recommended";

export const rules = {
  "unique-id": uniqueId,
  "no-deprecated-token": noDeprecatedToken,
};

export const configs = {
  recommended,
};
