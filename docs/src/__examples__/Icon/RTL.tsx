import * as React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import { Stack, ThemeProvider } from "@kiwicom/orbit-components";
import { Airplane } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <ThemeProvider theme={{ orbit: defaultTokens, rtl: true }}>
      <Stack flex>
        <Airplane ariaLabel="Airplane" />
        <Airplane reverseOnRtl ariaLabel="Airplane" />
      </Stack>
    </ThemeProvider>
  ),
  info: {
    title: "Right-to-left icons",
    description:
      "Within right-to-left settings, icons will also reverse direction if they are passed the reverseOnRtl prop.",
  },
};
