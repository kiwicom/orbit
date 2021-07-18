import * as React from "react";
import { Button, Stack } from "@kiwicom/orbit-components";
import createTheme from "@kiwicom/orbit-components/lib/createTheme";
import ThemeProvider from "@kiwicom/orbit-components/lib/ThemeProvider";

export default {
  Example: () => {
    const customTokens = createTheme({
      palette: {
        product: {
          light: "#fdf0ff",
          lightSecondary: "#fbdfff",
          lightTertiary: "#f9ceff",
          normal: "#5b0068",
          normalSecondary: "#4c0057",
          normalTertiary: "#3d0046",
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
