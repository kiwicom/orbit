import * as t from "@babel/types";
import type { Rule } from "eslint";
import deprecatedTokens from "@kiwicom/orbit-design-tokens/lib/deprecated-tokens.json";

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

export const getError = (tokenName: string) => {
  const { replaceForToken, version } = deprecatedTokens[tokenName];
  return DeprecatedTokenReplaceError(tokenName, replaceForToken, version);
};

const replaceToken = (tokenName, property) => fixer => {
  const { replaceForToken } = deprecatedTokens[tokenName];
  if (replaceForToken) {
    return fixer.replaceTextRange(property.range, replaceForToken);
  }
  return null;
};

const noDeprecatedToken: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prevents usage of deprecated design tokens from @kiwicom/orbit-design-tokens.",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: "code",
  },
  create: (context: Rule.RuleContext) => {
    const reportError = (tokenName, property) => {
      if (tokenName in deprecatedTokens) {
        context.report({
          node: property,
          message: getError(tokenName),
          fix: replaceToken(tokenName, property),
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
      MemberExpression(node) {
        if (t.isMemberExpression(node)) reportIfDesignToken(node);
      },
    };
  },
};

export default noDeprecatedToken;
