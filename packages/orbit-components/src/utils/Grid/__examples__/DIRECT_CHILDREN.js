// @flow
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import Grid from "../index";
import Stack from "../../../Stack";
import Text from "../../../Text";

export default {
  Example: (): React.Node => {
    const divStyle = {
      backgroundColor: defaultTheme.orbit.paletteCloudDark,
      border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
      boxSizing: "border-box",
      padding: defaultTheme.orbit.paddingButtonSmall,
    };
    const Wrapper = ({ children }) => {
      return children;
    };
    return (
      <Stack>
        <Text>
          The follow example works in newer browers, but not in older browsers because the columns
          are not direct children of the grid.
        </Text>
        <Grid columns="120px minmax(120px, 3fr) repeat(2, 1fr)">
          <Wrapper>
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
          </Wrapper>
        </Grid>
      </Stack>
    );
  },
  info: {
    title: "Direct children",
    description:
      "Due to limitations in older browsers, columns and rows must be direct children of the grid.",
  },
};
