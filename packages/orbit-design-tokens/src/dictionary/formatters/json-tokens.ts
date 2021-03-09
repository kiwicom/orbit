import { Property } from "style-dictionary";

import { getValue } from "../utils/get";

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

const docsTokens = {
  name: "json/documentation-tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string => {
    const tokens = allProperties.map(
      ({ type, name, attributes, comment, category, deprecated }) => {
        const { docsPlatforms } = attributes;
        const platforms = docsPlatforms
          ? Object.keys(docsPlatforms).map(platform => {
              const { value: tokenValue, ...rest } = docsPlatforms[platform];
              return { [platform]: { ...rest, value: getValue(tokenValue) } };
            })
          : [];
        return {
          [name]: {
            type,
            category,
            comment,
            deprecated,
            ...Object.assign({}, ...platforms),
          },
        };
      },
    );
    return JSON.stringify(Object.assign({}, ...tokens), null, 2);
  },
};

export default { jsonDeprecatedTokens, docsTokens };
