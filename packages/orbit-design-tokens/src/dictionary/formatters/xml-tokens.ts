import xml from "xml";
import { Property } from "style-dictionary";

const xmlFactory = properties => {
  const designTokens = properties.map(({ value: { value }, name }) => ({
    token: [{ name }, { value }],
  }));
  return xml(
    { designTokens },
    {
      indent: "  ",
    },
  );
};

const xmlTokens = {
  name: "xml/tokens",
  formatter: ({ allProperties }: { allProperties: Property[] }): string =>
    xmlFactory(allProperties),
};

export default { xmlTokens };
