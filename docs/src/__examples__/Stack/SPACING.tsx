import * as React from "react";
import { Stack, Heading } from "@kiwicom/orbit-components";
import { Spacing } from "@kiwicom/orbit-components/lib/Stack";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

export default {
  Example: () => {
    const divStyle: React.CSSProperties = {
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
        {Object.values(SPACINGS).map(spacing => (
          <Stack>
            <Heading as="h3" type="title3">
              <code>{spacing}</code> {spacing === SPACINGS.MEDIUM && `(the default) `}
            </Heading>
            <Stack flex spacing={spacing}>
              <div style={divStyle} />
              <div style={divStyle} />
              <div style={divStyle} />
            </Stack>
          </Stack>
        ))}
      </Stack>
    );
  },
  info: {
    title: "Spacing",
    description: "Stacks offer a variety of options for spacing between children.",
  },
};
