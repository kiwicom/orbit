// @flow
import * as React from "react";

import Heading from "../index";

export default {
  Example: (): React.Element<"div"> => (
    <div
      style={{
        backgroundColor: "#252A31",
        padding: "8px",
      }}
    >
      <Heading inverted>Inverted heading</Heading>
    </div>
  ),
  info: {
    title: "Inverted heading",
    description:
      "Inverted headings can be used on very dark backgrounds. This is the only color for headings other than colorHeading (Ink / Normal).",
  },
};
