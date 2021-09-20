import React from "react";
import { Inline } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle: React.CSSProperties = {
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
  exampleKnobs: [
    {
      component: "Inline",
      knobs: [
        {
          name: "as",
          type: "text",
          defaultValue: "div",
        },
        {
          name: "justify",
          type: "select",
          options: ["start", "end", "center", "between", "around"],
          defaultValue: "",
        },
        {
          name: "align",
          type: "select",
          options: ["start", "end", "center"],
          defaultValue: "",
        },
        {
          name: "spacing",
          type: "select",
          options: [
            "none",
            "XXXSmall",
            "XXSmall",
            "XSmall",
            "small",
            "medium",
            "large",
            "XLarge",
            "XXLarge",
            "XXXLarge",
          ],
          defaultValue: "none",
        },
      ],
    },
  ],
};
