import React from "react";
import { Box } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Box background="blueDark" textAlign="center" color="white" padding="large" maxWidth="300px">
      Text
    </Box>
  ),
  exampleKnobs: [
    {
      component: "Box",
      knobs: [
        {
          name: "as",
          type: "text",
          defaultValue: "div",
        },
        {
          name: "display",
          type: "select",
          options: ["none", "flex", "inline-flex", "block", "inline", "inline-block"],
          defaultValue: "",
        },
        {
          name: "justify",
          type: "select",
          options: ["start", "end", "center", "between", "around"],
          defaultValue: "",
        },
        {
          name: "direction",
          type: "select",
          options: ["row", "column", "row-reverse", "column-reverse"],
          defaultValue: "",
        },
        {
          name: "align",
          type: "select",
          options: ["start", "end", "center", "stretch"],
          defaultValue: "start",
        },
        {
          name: "wrap",
          type: "select",
          options: ["wrap", "nowrap"],
          defaultValue: "nowrap",
        },
        {
          name: "shrink",
          type: "select",
          options: ["0", "1"],
          defaultValue: "0",
        },
        {
          name: "grow",
          type: "select",
          options: ["0", "1"],
          defaultValue: "0",
        },
        {
          name: "width",
          type: "select",
          options: ["full", "auto"],
          defaultValue: "full",
        },
        {
          name: "height",
          type: "select",
          options: ["full", "auto"],
          defaultValue: "auto",
        },
        {
          name: "position",
          type: "select",
          options: ["relative", "absolute", "fixed"],
          defaultValue: "",
        },
        {
          name: "textAlign",
          type: "select",
          options: ["left", "center", "right"],
          defaultValue: "",
        },
        {
          name: "borderRadius",
          type: "select",
          options: ["small", "normal", "large", "circle"],
          defaultValue: "",
        },
        {
          name: "overflow",
          type: "select",
          options: ["auto", "hidden", "scroll", "visible"],
          defaultValue: "",
        },
        {
          name: "elevation",
          type: "select",
          options: ["action", "fixed", "overlay", "raised"],
          defaultValue: "",
        },
        {
          name: "background",
          type: "text",
          defaultValue: "",
        },
        {
          name: "color",
          type: "text",
          defaultValue: "",
        },
        {
          name: "maxHeight",
          type: "text",
          defaultValue: "",
        },
        {
          name: "left",
          type: "text",
          defaultValue: "",
        },
        {
          name: "top",
          type: "text",
          defaultValue: "",
        },
        {
          name: "right",
          type: "text",
          defaultValue: "",
        },
        {
          name: "bottom",
          type: "text",
          defaultValue: "",
        },
        {
          name: "maxWidth",
          type: "text",
          defaultValue: "",
        },
        {
          name: "spacing",
          type: "select",
          options: [
            "none",
            "XXXSmall",
            "XXSmall",
            "small",
            "medium",
            "large",
            "XLarge",
            "XXLarge",
            "XXXLarge",
          ],
          defaultValue: "",
        },
      ],
    },
  ],
};
