// @noflow
/* eslint-disable global-require */
const fsx = require("fs-extra");

const createXMLDesignTokens = require("../createXMLDesignTokens");

jest.mock("@kiwicom/orbit-design-tokens", () => ({
  defaultTokens: {
    black: "#000",
    white: "#fff",
    red: "#f00",
  },
}));

jest.mock("fs", () => require("memfs").fs);

describe(createXMLDesignTokens.name, () => {
  it("writes tokens into an XML file", async () => {
    await createXMLDesignTokens();
    const content = await fsx.readFile("lib/design-tokens.xml");
    expect(content.toString()).toMatchInlineSnapshot(`
      "<designTokens>
        <token>
          <name>black</name>
          <value>#000</value>
        </token>
        <token>
          <name>white</name>
          <value>#fff</value>
        </token>
        <token>
          <name>red</name>
          <value>#f00</value>
        </token>
      </designTokens>"
    `);
  });
});
