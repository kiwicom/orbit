// @flow
import * as React from "react";

import defaultTheme from "../../defaultTheme";
import Stack from "../index";

export default {
  Example: (): React.Node => {
    const divStyle = {
      width: "160px",
      height: "40px",
      backgroundColor: defaultTheme.orbit.paletteInkLight,
    };
    return (
      <Stack>
        <div style={divStyle} />
        <div style={divStyle} />
        <div style={divStyle} />
      </Stack>
    );
  },
  info: {
    title: "Default stack",
    description:
      "By default, stacks display columns of their children with medium spacing between them. They are also not flexbox containers without a flex property being defined.",
  },
};
