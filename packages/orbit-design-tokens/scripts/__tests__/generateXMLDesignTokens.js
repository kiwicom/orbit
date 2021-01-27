// @noflow
import fs from "fs";

import generateXMLDesignTokens from "../generateXMLDesignTokens";

jest.mock("../../src", () => ({
  defaultTokens: {
    black: "#000",
    white: "#fff",
    red: "#f00",
  },
}));

jest.mock("fs", () => require("memfs").fs);

describe(generateXMLDesignTokens.name, () => {
  it("writes tokens into an XML file", () => {
    generateXMLDesignTokens();
    const content = fs.readFileSync("lib/index.xml");
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
