// @noflow
const xml = require("xml");
const { defaultTokens } = require("@kiwicom/orbit-design-tokens");
const fsx = require("fs-extra");

const createXMLDesignTokens = async () => {
  const content = xml(
    {
      designTokens: Object.entries(defaultTokens).map(([name, value]) => ({
        token: [{ name }, { value }],
      })),
    },
    {
      indent: "  ",
    },
  );

  await fsx.mkdirp("lib");
  await fsx.writeFile("lib/design-tokens.xml", content);
};

module.exports = createXMLDesignTokens;
