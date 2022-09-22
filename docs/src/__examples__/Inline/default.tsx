import React from "react";
import { Inline } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const height = {
      height: "40px",
    };

    return (
      <Inline spacing="medium">
        <div
          style={{ ...height, width: "140px", background: defaultTheme.orbit.paletteInkNormal }}
        />
        <div
          style={{
            ...height,
            width: "160px",
            background: defaultTheme.orbit.paletteInkLightHover,
          }}
        />
        <div
          style={{
            ...height,
            width: "180px",
            background: defaultTheme.orbit.paletteInkLightActive,
          }}
        />
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
          defaultValue: "medium",
        },
      ],
    },
  ],
};
