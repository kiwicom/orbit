import * as React from "react";
import { Inline } from "@kiwicom/orbit-components";
import { CSSProperties } from "styled-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle: CSSProperties = {
      width: "160px",
      height: "40px",
      backgroundColor: `${defaultTheme.orbit.paletteInkLight}`,
    };

    return (
      <Inline spacing="medium">
        <div style={divStyle} />
        <div style={divStyle} />
        <div style={divStyle} />
      </Inline>
    );
  },
  info: {
    title: "",
    description: "",
  },
};
