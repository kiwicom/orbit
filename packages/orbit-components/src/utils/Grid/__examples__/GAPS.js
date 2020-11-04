// @flow
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import Grid from "../index";
import Heading from "../../../Heading";
import Stack from "../../../Stack";
import Text from "../../../Text";

export default {
  Example: () => {
    const divStyle = {
      backgroundColor: defaultTheme.orbit.paletteCloudDark,
      border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
      boxSizing: "border-box",
      padding: defaultTheme.orbit.paddingButtonSmall,
    };
    return (
      <Stack>
        <Stack spacing="XSmall">
          <Heading as="h3" type="title3">
            No gaps
          </Heading>
          <Grid columns="repeat(3, 1fr)" rows="repeat(3, 1fr)">
            <div style={divStyle}>
              <Text>Column 1, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 1, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 1, Row 3</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 3</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 3</Text>
            </div>
          </Grid>
        </Stack>
        <Stack spacing="XSmall">
          <Heading as="h3" type="title3">
            Column gaps
          </Heading>
          <Grid columns="repeat(3, 1fr)" rows="repeat(3, 1fr)" columnGap="32px">
            <div style={divStyle}>
              <Text>Column 1, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 1, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 1, Row 3</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 3</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 3</Text>
            </div>
          </Grid>
        </Stack>
        <Stack spacing="XSmall">
          <Heading as="h3" type="title3">
            Row gaps
          </Heading>
          <Grid columns="repeat(3, 1fr)" rows="repeat(3, 1fr)" rowGap="32px">
            <div style={divStyle}>
              <Text>Column 1, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 1, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 1, Row 3</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 3</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 3</Text>
            </div>
          </Grid>
        </Stack>
        <Stack spacing="XSmall">
          <Heading as="h3" type="title3">
            Both in one property
          </Heading>
          <Grid columns="repeat(3, 1fr)" rows="repeat(3, 1fr)" gap="32px">
            <div style={divStyle}>
              <Text>Column 1, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 1</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 1, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 2</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 1, Row 3</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 2, Row 3</Text>
            </div>
            <div style={divStyle}>
              <Text>Column 3, Row 3</Text>
            </div>
          </Grid>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Gaps",
    description: "Control the space between your columns and rows with the gaps properties.",
  },
};
