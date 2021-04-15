import * as React from "react";
import { Stack, Text } from "@kiwicom/orbit-components";
import { Spacing } from "@kiwicom/orbit-components/lib/Stack";
import { CSSProperties } from "styled-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle: CSSProperties = {
      width: "160px",
      height: "40px",
      backgroundColor: `${defaultTheme.orbit.paletteInkLight}`,
    };

    const SPACINGS: Record<string, Spacing> = {
      NONE: "none",
      XXXSMALL: "XXXSmall",
      XXSMALL: "XXSmall",
      XSMALL: "XSmall",
      SMALL: "small",
      MEDIUM: "medium",
      LARGE: "large",
      XLARGE: "XLarge",
      XXLARGE: "XXLarge",
    };

    return (
      <Stack>
        <Text>
          The spacing between the stack&apos;s children increases with increasing viewport size. The
          spacing that&apos;s applied is the one from the largest media query that returns true.
        </Text>
        <Stack
          flex
          spacing={SPACINGS.XXSMALL}
          mediumMobile={{ spacing: SPACINGS.XSMALL }}
          largeMobile={{ spacing: SPACINGS.SMALL }}
          tablet={{ spacing: SPACINGS.MEDIUM }}
          desktop={{ spacing: SPACINGS.LARGE }}
          largeDesktop={{ spacing: SPACINGS.XLARGE }}
        >
          <div style={divStyle} />
          <div style={divStyle} />
          <div style={divStyle} />
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Media queries",
    description:
      "To change the stack's properies based on the viewport, use one of the available media queries props. You can use: mediumMobile, largeMobile, tablet, desktop, and largeDesktop. They all apply for all viewports equal to or larger than the one specified. They have almost all of the same props as stack (missing as, flex, and other media queries) and all of their props are optional.",
  },
};
