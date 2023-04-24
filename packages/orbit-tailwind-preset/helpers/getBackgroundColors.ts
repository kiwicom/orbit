import { defaultTokens } from "@kiwicom/orbit-design-tokens";

const getBackgroundColors = (tokens: typeof defaultTokens) => {
  return Object.entries(tokens).reduce((acc, [key, value]) => {
    if (key.startsWith("background")) {
      const path = key.match(/[A-Z][a-z]+/g);
    }
    return acc;
  }, {});
};

export default getBackgroundColors;
