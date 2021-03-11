import * as React from "react";
import { Grid, Stack, Text } from "@kiwicom/orbit-components";
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
        <Text>
          The spacing between the row&apos;s increases with increasing viewport size. The spacing
          that&apos;s applied is the one from the largest media query that returns true.
        </Text>
        <Grid
          rows="repeat(3, 60px)"
          mediumMobile={{ rowGap: "4px" }}
          largeMobile={{ rowGap: "12px" }}
          tablet={{ rowGap: "20px" }}
          desktop={{ rowGap: "28px" }}
          largeDesktop={{ rowGap: "36px" }}
        >
          <div style={divStyle}>
            <Text>Row 1</Text>
          </div>
          <div style={divStyle}>
            <Text>Row 2</Text>
          </div>
          <div style={divStyle}>
            <Text>Row 3</Text>
          </div>
        </Grid>
      </Stack>
    );
  },
  info: {
    title: "Media queries",
    description:
      "To change the grid's properies based on the viewport, use one of the available media queries props. You can use: mediumMobile, largeMobile, tablet, desktop, and largeDesktop. They all apply for all viewports equal to or larger than the one specified. They have almost all of the same props as grid (missing as and other media queries) and all of their props are optional.",
  },
};
