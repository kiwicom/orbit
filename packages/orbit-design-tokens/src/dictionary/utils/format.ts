import prettier from "prettier";

const getParserOption = (platform: string) => {
  if (platform === "typescript") return "typescript";
  if (platform === "css") return "css";
  return "babel";
};

function resolveConfig() {
  const config = prettier.resolveConfig.sync("");
  if (!config) throw new Error("Can't find prettier config.");
  return config;
}

const formatCode = (code: (string | undefined)[], platform: string): string =>
  prettier.format(Array.isArray(code) ? code.join("\n") : code, {
    ...resolveConfig(),
    parser: getParserOption(platform),
  });

export default formatCode;
