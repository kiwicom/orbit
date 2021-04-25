import * as React from "react";
import { Button, Stack } from "@kiwicom/orbit-components";
import getTokens from "@kiwicom/orbit-components/lib/getTokens";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";

export default {
  Example: () => {
    const customTokens = getTokens({
      palette: {
        product: {
          light: "#fdf0ff",
          lightHover: "#fbdfff",
          lightActive: "#f9ceff",
          normal: "#5b0068",
          normalHover: "#4c0057",
          normalActive: "#3d0046",
          dark: "#110013",
        },
      },
    });

    return (
      <Stack>
        <Button type="primary">Primary Button</Button>
        <ThemeProvider theme={{ orbit: customTokens }}>
          <Button type="primary">Primary Button (themed)</Button>
        </ThemeProvider>
      </Stack>
    );
  },
  info: {
    title: "Default text link",
    description:
      "The default text link is a primary link with its children as its text that inherits its size from its parent.",
  },
};
