import prettier from "prettier";

const getParserOption = (platform: string) => {
  if (platform === "typescript") return "typescript";
  if (platform === "css") return "css";
  return "babel";
};

function resolveConfig() {
  const config = prettier.resolveConfig("");
  if (!config) throw new Error("Can't find prettier config.");
  return config;
}

const formatCode = async (code: (string | undefined)[], platform: string): Promise<string> => {
  const res = await prettier
    .format(Array.isArray(code) ? code.join("\n") : code, {
      ...resolveConfig(),
      parser: getParserOption(platform),
    })
    .then(formattedCode => {
      return formattedCode;
    });

  return res;
};

export default formatCode;
