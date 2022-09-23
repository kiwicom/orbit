import React from "react";
import { Stack } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const height = {
      height: "40px",
    };

    return (
      <Stack>
        <div style={{ ...height, width: "140px", background: defaultTheme.orbit.paletteInkDark }} />
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
