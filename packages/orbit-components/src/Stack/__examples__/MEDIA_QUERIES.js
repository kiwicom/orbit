// @flow
import * as React from "react";

import { SPACINGS } from "../consts";
import defaultTheme from "../../defaultTheme";
import Stack from "../index";
import Text from "../../Text";

export default {
  Example: () => {
    const divStyle = {
      width: "40px",
      height: "40px",
      backgroundColor: defaultTheme.orbit.paletteInkLight,
    };
    return (
      <Stack>
        <Text>
          The spacing between the stack&apos;s children increases with increasing viewport size. The
          spacing that&apos;s applied is the one from the largest media query that returns true.
        </Text>
        <Stack
          flex
          spacing={SPACINGS.TIGHT}
          mediumMobile={{ spacing: SPACINGS.CONDENSED }}
          largeMobile={{ spacing: SPACINGS.COMPACT }}
          tablet={{ spacing: SPACINGS.NATURAL }}
          desktop={{ spacing: SPACINGS.COMFY }}
          largeDesktop={{ spacing: SPACINGS.LOOSE }}
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
