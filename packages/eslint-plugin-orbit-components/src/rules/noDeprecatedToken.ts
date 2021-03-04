import * as t from "@babel/types";
import type { Rule } from "eslint";
/*
  TODO: Either we should add dependency @kiwicom/orbit-design-tokens for the eslint-plugin,
  or we can re-export it inside @kiwicom/orbit-components.
 */
import deprecatedTokens from "@kiwicom/orbit-design-tokens/lib/deprecated-tokens.json";

export const mockTokens = {
  deprecatedTokenOne: {
    replaceForToken: "replacementTokenOne",
    version: "1.0.0",
  },
  deprecatedTokenTwo: {
    replaceForToken: "replacementTokenTwo",
    version: "1.0.0",
  },
  deprecatedTokenThree: {
    replaceForToken: "replacementTokenThree",
  },
  deprecatedTokenFour: {
    replaceForToken: null,
    version: "1.0.0",
  },
};
/*
  We prefer to use mock list of deprecated tokens for testing purposes,
  because the actual list will change in time.
 */
const tokensList = process.env.NODE_ENV === "test" ? mockTokens : deprecatedTokens;

export const DeprecatedTokenReplaceError = (
  name: string,
  replaceForToken?: string | null,
  version?: string | null,
) => {
  const tokenIsDeprecated = `The token ${name} is deprecated and will be deleted in upcoming version${
    version ? ` ${version}` : ""
  }.`;
  const replaceFor = replaceForToken
    ? `Consider replacing it for ${replaceForToken} that has the same value.`
    : `There's no direct replacement for it, so please consider rewriting your code with a use of different token. Check orbit.kiwi more the full list of design tokens.`;
  return [tokenIsDeprecated, replaceFor].join(" ");
};

export const getError = tokenName => {
  const { replaceForToken, version } = tokensList[tokenName];
  return DeprecatedTokenReplaceError(tokenName, replaceForToken, version);
};

export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prevents usage of deprecated design tokens from @kiwicom/orbit-design-tokens.",
      category: "Possible Errors",
      recommended: true,
    },
  },
  create: (context: Rule.RuleContext) => {
    const reportError = (tokenName, node) => {
      if (tokenName in tokensList) {
        context.report({
          node,
          message: getError(tokenName),
        });
      }
    };
    const isOrbitDesignToken = (node: t.MemberExpression) => {
      const isPropsThemeOrbit =
        t.isMemberExpression(node) &&
        t.isMemberExpression(node.object) &&
        t.isMemberExpression(node.object.object) &&
        t.isIdentifier(node.object.object.property, { name: "theme" }) &&
        t.isIdentifier(node.object.property, { name: "orbit" });
      const isThemeOrbit =
        t.isMemberExpression(node) &&
        t.isMemberExpression(node.object) &&
        t.isIdentifier(node.object.object, { name: "theme" }) &&
        t.isIdentifier(node.object.property, { name: "orbit" });
      const isOrbit = t.isMemberExpression(node) && t.isIdentifier(node.object, { name: "orbit" });
      return isPropsThemeOrbit || isThemeOrbit || isOrbit;
    };

    const reportIfDesignToken = (node: t.MemberExpression) => {
      if (isOrbitDesignToken(node) && t.isIdentifier(node.property)) {
        reportError(node.property.name, node.property);
      }
    };
    return {
      MemberExpression(node: t.MemberExpression) {
        reportIfDesignToken(node);
      },
    };
  },
};
