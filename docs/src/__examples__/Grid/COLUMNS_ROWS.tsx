import React from "react";
import { Grid, Stack, Text } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle: React.CSSProperties = {
      backgroundColor: `${defaultTheme.orbit.paletteCloudDark}`,
      border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
      boxSizing: "border-box",
      padding: `${defaultTheme.orbit.paddingButtonSmall}`,
    };

    return (
      <Stack>
        <Text>
          You can use fixed numbers, percentages, and fractions (<code>fr</code>) to calculate
          column and row size. Use <code>repeat()</code> to create multiple columns or rows with the
          same dimensions.
        </Text>
        <Grid columns="120px minmax(120px, 3fr) repeat(2, 1fr)">
          <div style={divStyle}>
            <Text>Column 1</Text>
          </div>
          <div style={divStyle}>
            <Text>Column 2</Text>
          </div>
          <div style={divStyle}>
            <Text>Column 3</Text>
          </div>
          <div style={divStyle}>
            <Text>Column 4</Text>
          </div>
        </Grid>
        <Grid rows="1fr 2fr repeat(2, 1fr)">
          <div style={divStyle}>
            <Text>Row 1</Text>
          </div>
          <div style={divStyle}>
            <Text>Row 2</Text>
          </div>
          <div style={divStyle}>
            <Text>Row 3</Text>
          </div>
          <div style={divStyle}>
            <Text>Row 4</Text>
          </div>
        </Grid>
        <Text>
          The free space available for fractions is calculated after all non-flexible (fixed) items.
        </Text>
        <Grid columns="1fr 80px repeat(2, 1fr)">
          <div style={divStyle}>
            <Text>Column 1</Text>
          </div>
          <div style={divStyle}>
            <Text>Column 2</Text>
          </div>
          <div style={divStyle}>
            <Text>Column 3</Text>
          </div>
          <div style={divStyle}>
            <Text>Column 4</Text>
          </div>
        </Grid>
      </Stack>
    );
  },
  info: {
    title: "Columns and rows",
    description:
      "The Grid component calculates repeats and placement to work even in older browsers. Line names and named areas (and so changing the order based on viewport) are not supported. The columns and rows must also be direct children of the grid.",
  },
};
