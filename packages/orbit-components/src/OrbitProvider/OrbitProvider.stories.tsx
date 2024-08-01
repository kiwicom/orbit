import * as React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import getTokens from "../getTokens";

import OrbitProvider from ".";

export function OwnTheme({ orbitTheme, customTheme }) {
  return (
    <OrbitProvider
      theme={{ orbit: { ...getTokens(orbitTheme), ...customTheme } }}
      useId={React.useId}
    >
      <Button onClick={action("onClick")}>Hello World!</Button>
    </OrbitProvider>
  );
}

OwnTheme.story = {
  name: "Own theme",

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

OwnTheme.args = {
  orbitTheme: {
    palette: {
      product: {
        light: "#ff9999",
        lightHover: "#ff7f7f",
        lightActive: "#ff6666",
        normal: "#ff0000",
        normalHover: "#e50000",
        normalActive: "#cc0000",
        dark: "#990000",
        darkHover: "#720000",
        darkActive: "#630000",
        darker: "#530000",
      },
    },
  },
  customTheme: { black: "#000" },
};

export default {
  title: "OrbitProvider",
};
