import * as React from "react";
import { Grid, Stack, Heading, Text } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { CSSProperties } from "styled-components";

export default {
  Example: () => {
    const divStyle: CSSProperties = {
      backgroundColor: `${defaultTheme.orbit.paletteCloudDark}`,
      border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
      boxSizing: "border-box",
      padding: `${defaultTheme.orbit.paddingButtonSmall}`,
    };

    return (
      <Stack>
        <Stack spacing="XSmall">
          <Heading as="h3" type="title3">
            No maximum width
          </Heading>
          <Grid columns="repeat(2, 1fr)" rows="repeat(2, 1fr)">
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
        </Stack>
        <Stack spacing="XSmall">
          <Heading as="h3" type="title3">
            Maximum width of 400 px
          </Heading>
          <Grid columns="repeat(2, 1fr)" rows="repeat(2, 1fr)" maxWidth="400px">
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
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Max width",
    description:
      "Set the maximum width the grid can have. Especially useful when using fractional column widths",
  },
};
