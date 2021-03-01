import * as React from "react";
import { Grid, Stack, Text } from "@kiwicom/orbit-components";
import useTheme from "@kiwicom/orbit-components/src/hooks/useTheme";
import { css } from "styled-components";

export default {
  Example: () => {
    const divStyle = css`
      background: ${defaultTheme.orbit.paletteCloudDark};
      border: 1px solid ${defaultTheme.orbit.paletteProductDark};
      box-sizing: "border-box";
      padding: ${defaultTheme.orbit.paddingButtonSmall};
    `;

    return (
      <Stack>
        <Text>
          The follow example works in newer browers, but not in older browsers because the columns
          are not direct children of the grid.
        </Text>
        <Grid columns="120px minmax(120px, 3fr) repeat(2, 1fr)">
          <>
            <div css={divStyle}>
              <Text>Column 1</Text>
            </div>
            <div css={divStyle}>
              <Text>Column 2</Text>
            </div>
            <div css={divStyle}>
              <Text>Column 3</Text>
            </div>
            <div css={divStyle}>
              <Text>Column 4</Text>
            </div>
          </>
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
