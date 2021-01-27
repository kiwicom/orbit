// @noflow
import xml from "xml";
import fsx from "fs-extra";

import { defaultTokens } from "../src";

/**
 * Expose design tokens in XML format to be consumed by Exponea.
 */

const generateXMLDesignTokens = () => {
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

  fsx.mkdirpSync("lib");
  fsx.writeFileSync("lib/index.xml", content);
};

if (process.env.NODE_RUN) {
  generateXMLDesignTokens();
}

export default generateXMLDesignTokens;
