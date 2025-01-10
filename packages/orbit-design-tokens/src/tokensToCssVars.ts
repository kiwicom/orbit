const kebabCase = (str: string) => str.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();

type TokensObject = Record<string, string | Record<string, string>>;

const getCssVars = <T = TokensObject>(object: T, prefix = `-`) =>
  Object.entries(object as TokensObject).reduce((css, [key, value]) => {
    const newPrefix = kebabCase(`${prefix}-${key}`);
    if (typeof value !== "object") return `${css + newPrefix}:${value};`;
    return css + getCssVars(value, newPrefix);
  }, ``);

const tokensToCssVars = <T = TokensObject>({
  tokens,
  cssClass,
}: {
  tokens: T;
  cssClass?: string;
}) => {
  if (cssClass) return `${cssClass} {${getCssVars(tokens)}}`;
  return getCssVars(tokens);
};

export default tokensToCssVars;
