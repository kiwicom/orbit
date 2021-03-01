import * as React from "react";
import { Stack, Heading } from "@kiwicom/orbit-components";
import { Spacing } from "@kiwicom/orbit-components/lib/Stack";
import { css } from "styled-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";

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

export default {
  Example: () => {
    const divStyle = css`
      width: "160px";
      height: "40px";
      backgroundcolor: ${defaultTheme.orbit.paletteInkLight};
    `;

    return (
      <Stack>
        {Object.values(SPACINGS).map(spacing => (
          <Stack>
            <Heading as="h3" type="title3">
              <code>{spacing}</code> {spacing === SPACINGS.MEDIUM && `(the default) `}
            </Heading>
            <Stack flex spacing={spacing}>
              <div css={divStyle} />
              <div css={divStyle} />
              <div css={divStyle} />
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
