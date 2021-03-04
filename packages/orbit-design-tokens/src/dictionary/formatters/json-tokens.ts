import { Property } from "style-dictionary";

const jsonDeprecatedTokens = {
  name: "json/deprecated-tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const deprecatedTokens = allProperties.map(prop => {
      const { name } = prop;
      const { "deprecated-replace": deprecatedReplace, "deprecated-version": version } = prop;
      const replaceForToken = deprecatedReplace != null ? deprecatedReplace.value.name : null;
      return {
        [name]: {
          replaceForToken,
          version,
        },
      };
    });
    return JSON.stringify(Object.assign({}, ...deprecatedTokens), null, 2);
  },
};

export default { jsonDeprecatedTokens };
