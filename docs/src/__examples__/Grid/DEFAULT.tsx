import React from "react";
import { Text, Grid } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle = {
      background: `${defaultTheme.orbit.paletteCloudNormal}`,
      border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
      "box-sizing": "border-box",
      padding: `${defaultTheme.orbit.paddingButtonSmall}`,
    };

    return (
      <Grid columns="repeat(2, 1fr)" rows="repeat(2, 1fr)" rowGap="10px" columnGap="10px">
        <div style={divStyle}>
          <Text>Column 1, Row 1</Text>
        </div>
        <div style={divStyle}>
          <Text>Column 2, Row 1</Text>
        </div>
        <div style={divStyle}>
          <Text>Column 1, Row 2</Text>
        </div>
        <div style={divStyle}>
          <Text>Column 2, Row 2</Text>
        </div>
      </Grid>
    );
  },
  exampleKnobs: [
    {
      component: "Grid",
      knobs: [
        {
          name: "as",
          type: "text",
          defaultValue: "div",
        },
        {
          name: "gap",
          type: "text",
          defaultValue: "",
        },
        {
          name: "rows",
          type: "text",
          defaultValue: "",
        },
        {
          name: "rowGap",
          type: "text",
          defaultValue: "10px",
        },
        {
          name: "width",
          type: "text",
          defaultValue: "",
        },
        {
          name: "inline",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "columns",
          type: "text",
          defaultValue: "repeat(2, 1fr)",
        },
        {
          name: "columnGap",
          type: "text",
          defaultValue: "10px",
        },
      ],
    },
  ],
};
