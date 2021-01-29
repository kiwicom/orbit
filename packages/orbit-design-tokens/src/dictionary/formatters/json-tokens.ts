import { Property } from "style-dictionary";

const jsonDeprecatedTokens = {
  name: "json/deprecated-tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const deprecatedTokens = allProperties.map(({ name, "deprecated-replace": { value } }) => {
      const { name: replaceFor } = value;
      return {
        [name]: replaceFor,
      };
    });
    return JSON.stringify(Object.assign({}, ...deprecatedTokens), null, 2);
  },
};

export default { jsonDeprecatedTokens };
