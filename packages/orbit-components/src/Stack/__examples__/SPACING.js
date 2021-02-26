// @flow
import * as React from "react";

import { SPACINGS } from "../../utils/layout/consts";
import defaultTheme from "../../defaultTheme";
import Heading from "../../Heading";
import Stack from "../index";

export default {
  Example: () => {
    const divStyle = {
      width: "40px",
      height: "40px",
      backgroundColor: defaultTheme.orbit.paletteInkLight,
    };
    return (
      <Stack>
        {Object.values(SPACINGS).map((spacing: any) => (
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
