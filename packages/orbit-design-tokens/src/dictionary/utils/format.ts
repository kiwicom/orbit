import prettier from "prettier";

const getParserOption = platform => {
  if (platform === "typescript") {
    return "typescript";
  }
  // https://prettier.io/docs/en/options.html#parser
  // doesn't matter for flow or javascript
  return "babel";
};

function resolveConfig() {
  const config = prettier.resolveConfig.sync("");
  if (!config) throw new Error("Can't find prettier config.");
  return config;
}

const formatCode = (code: Array<string | undefined>, platform: string): string =>
  prettier.format(Array.isArray(code) ? code.join("\n") : code, {
    ...resolveConfig(),
    parser: getParserOption(platform),
  });

export default formatCode;
