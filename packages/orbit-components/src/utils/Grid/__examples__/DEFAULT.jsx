// @flow
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import Grid from "../index";
import Text from "../../../Text";

export default {
  Example: (): React.Node => {
    const divStyle = {
      backgroundColor: defaultTheme.orbit.paletteCloudDark,
      border: `1px solid ${defaultTheme.orbit.paletteProductDark}`,
      boxSizing: "border-box",
      padding: defaultTheme.orbit.paddingButtonSmall,
    };
    return (
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
    );
  },
  info: {
    title: "Default grid",
    description:
      "By default, grids are displayed as block elements and display their columns and rows without any gaps",
  },
};
