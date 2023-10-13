export const kebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

type TokensObject = Record<string, string | Record<string, string>>;

const getCssVars = <T = TokensObject>(object: T, prefix = `-`) =>
  Object.entries(object).reduce((css, [key, value]) => {
    const newPrefix = kebabCase(`${prefix}-${key}`);
    if (typeof value !== "object") return `${css + newPrefix}: ${value};\n`;
    return css + getCssVars(value, newPrefix);
  }, ``);

const tokensToCssVars = <T = TokensObject>({
  tokens,
  cssClass = ":root",
}: {
  tokens: T;
  cssClass?: string | boolean;
}) => {
  if (cssClass) return `${cssClass} {\n${getCssVars(tokens).replaceAll("--", "  --")}\n}`;
  return getCssVars(tokens);
};

export default tokensToCssVars;
