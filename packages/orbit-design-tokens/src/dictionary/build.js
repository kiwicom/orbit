// @flow
const StyleDictionary = require("style-dictionary");

const registerTransforms = require("./transforms");
const registerFormatters = require("./formatters");

const build = () => {
  registerFormatters(StyleDictionary);
  registerTransforms(StyleDictionary);
  StyleDictionary.registerTransformGroup({
    name: "js/foundation",
    transforms: ["attribute/foundation", "name/cti/camel", "name/foundation"],
  });
  StyleDictionary.registerTransformGroup({
    name: "js/tokens",
    transforms: ["attribute/foundation", "name/cti/camel", "name/foundation"],
  });
  const StyleDictionaryExtended = StyleDictionary.extend({
    source: ["src/dictionary/definitions/**/*.json"],
    platforms: {
      "js/foundation": {
        transformGroup: "js/foundation",
        buildPath: "src/js/",
        files: [
          {
            destination: "defaultFoundation.js",
            format: "js/foundation",
            filter: token => !!token.internal,
          },
        ],
      },
      "js/tokens": {
        transformGroup: "js/tokens",
        buildPath: "src/js/",
        files: [
          {
            destination: "createTokens.js",
            format: "js/tokens",
            filter: token => !token.internal,
          },
        ],
      },
    },
  });
  StyleDictionaryExtended.buildAllPlatforms();
};

build();
