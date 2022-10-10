import React from "react";
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
          darker: "#0d0010",
          darkHover: "#0f0011",
          darkActive: "#0d000f",
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
};
