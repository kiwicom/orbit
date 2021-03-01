import * as React from "react";
import { Text, Grid } from "@kiwicom/orbit-components";
import { css } from "styled-components";
import useTheme from "@kiwicom/orbit-components/src/hooks/useTheme";

export default {
  Example: () => {
    const divStyle = css`
      background: ${defaultTheme.orbit.paletteCloudDark};
      border: 1px solid ${defaultTheme.orbit.paletteProductDark};
      box-sizing: border-box;
      padding: ${defaultTheme.orbit.paddingButtonSmall};
    `;

    return (
      <Grid columns="repeat(2, 1fr)" rows="repeat(2, 1fr)">
        <div css={divStyle}>
          <Text>Column 1, Row 1</Text>
        </div>
        <div css={divStyle}>
          <Text>Column 2, Row 1</Text>
        </div>
        <div css={divStyle}>
          <Text>Column 1, Row 2</Text>
        </div>
        <div css={divStyle}>
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
