import { ESLintUtils } from "@typescript-eslint/utils";

import { RULE_URL } from "../consts";

export default ESLintUtils.RuleCreator((name: string) => `${RULE_URL}/${name}`);
