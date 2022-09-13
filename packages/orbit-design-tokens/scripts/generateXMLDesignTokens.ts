import xml from "xml";
import { fs } from "zx";

import { defaultTokens } from "../dist/index.js";

const generateXMLDesignTokens = (): void => {
  const content = xml(
    {
      designTokens: Object.keys(defaultTokens).map(name => {
        const value = defaultTokens[name];
        return { token: [{ name }, { value }] };
      }),
    },
    {
      indent: "  ",
    },
  );

  fs.mkdirpSync("dist");
  fs.writeFileSync("dist/index.xml", content);
};

if (process.env.NODE_RUN) {
  generateXMLDesignTokens();
}

export default generateXMLDesignTokens;
