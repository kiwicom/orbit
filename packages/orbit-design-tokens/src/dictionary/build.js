// @flow
const StyleDictionary = require("style-dictionary");

const registerTransforms = require("./transforms");
const registerFormatters = require("./formatters");
const { isInternal, isNotInternal } = require("./utils/is");

const build = () => {
  registerFormatters(StyleDictionary);
  registerTransforms(StyleDictionary);
  StyleDictionary.registerTransformGroup({
    name: "javascript/foundation",
    transforms: [
      "attribute/foundation",
      "attribute/foundation/name",
      "attribute/foundation/type",
      "name/foundation/camel",
      "value/spacing/javascript",
      "value/string/javascript",
    ],
  });
  StyleDictionary.registerTransformGroup({
    name: "javascript/tokens",
    transforms: [
      "attribute/foundation",
      "attribute/foundation/type",
      "value/foundation/alias",
      "name/foundation/camel",
    ],
  });
  const StyleDictionaryExtended = StyleDictionary.extend({
    source: ["src/dictionary/definitions/**/*.json"],
    platforms: {
      "javascript/foundation": {
        transformGroup: "javascript/foundation",
        buildPath: "src/js/",
        files: [
          {
            destination: "defaultFoundation.js",
            format: "javascript/foundation",
            filter: isInternal,
          },
          {
            destination: "defaultFoundation.js.flow",
            format: "flow/foundation",
            filter: isInternal,
          },
          {
            destination: "defaultFoundation.d.ts",
            format: "typescript/foundation",
            filter: isInternal,
          },
        ],
      },
      "javascript/tokens": {
        transformGroup: "javascript/tokens",
        buildPath: "src/js/",
        files: [
          {
            destination: "createTokens.js",
            format: "javascript/tokens",
            filter: isNotInternal,
          },
          {
            destination: "createTokens.js.flow",
            format: "flow/tokens",
            filter: isNotInternal,
          },
          {
            destination: "createTokens.d.ts",
            format: "typescript/tokens",
            filter: isNotInternal,
          },
        ],
      },
    },
  });
  StyleDictionaryExtended.buildAllPlatforms();
};

build();
