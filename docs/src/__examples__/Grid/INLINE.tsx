import * as React from "react";
import { Grid, Stack, Text, Heading } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle = {
      background: defaultTheme.orbit.paletteCloudDark,
      border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
      boxSizing: "border-box",
      padding: defaultTheme.orbit.paddingButtonSmall,
    };

    return (
      <Stack>
        <Stack spacing="XSmall">
          <Heading as="h3" type="title3">
            Block
          </Heading>
          <>
            <Stack inline>
              <div style={divStyle}>
                <Text>Before grid</Text>
              </div>
            </Stack>
            <Grid columns="repeat(2, 1fr)">
              <div style={divStyle}>
                <Text>Column 1</Text>
              </div>
              <div style={divStyle}>
                <Text>Column 2</Text>
              </div>
            </Grid>
            <Stack inline>
              <div style={divStyle}>
                <Text>After grid</Text>
              </div>
            </Stack>
          </>
        </Stack>
        <Stack spacing="XSmall">
          <Heading as="h3" type="title3">
            Inline
          </Heading>
          <>
            <Stack inline>
              <div style={divStyle}>
                <Text>Before grid</Text>
              </div>
            </Stack>
            <Grid columns="repeat(2, 1fr)" inline>
              <div style={divStyle}>
                <Text>Column 1</Text>
              </div>
              <div style={divStyle}>
                <Text>Column 2</Text>
              </div>
            </Grid>
            <Stack inline>
              <div style={divStyle}>
                <Text>Before grid</Text>
              </div>
            </Stack>
          </>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Inline",
    description: "Grids can display as block or inline elements.",
  },
  scope: {
    Grid,
    Stack,
    Text,
    Heading,
    defaultTheme,
  },
};
