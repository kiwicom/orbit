import React from "react";
import { Stack } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle: React.CSSProperties = {
      width: "160px",
      height: "40px",
    };

    return (
      <Stack>
        <div style={{ ...divStyle, background: defaultTheme.orbit.paletteInkLighter }} />
        <div style={{ ...divStyle, background: defaultTheme.orbit.paletteInkLighterHover }} />
        <div style={{ ...divStyle, background: defaultTheme.orbit.paletteInkLighterActive }} />
      </Stack>
    );
  },
  exampleKnobs: [
    {
      component: "Stack",
      knobs: [
        {
          name: "justify",
          type: "select",
          defaultValue: "",
          options: ["start", "end", "center", "between", "around"],
        },
        {
          name: "align",
          type: "select",
          defaultValue: "",
          options: ["start", "end", "center", "stretch"],
        },
        {
          name: "inline",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "shrink",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "wrap",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "grow",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "basis",
          type: "text",
          defaultValue: "",
        },
        {
          name: "direction",
          type: "select",
          defaultValue: "row",
          options: ["row", "row-reverse", "column", "column-reverse"],
        },
        {
          name: "spacing",
          type: "select",
          defaultValue: "medium",
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
          ],
        },
      ],
    },
  ],
};
