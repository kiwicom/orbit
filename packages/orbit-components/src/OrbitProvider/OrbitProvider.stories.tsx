import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";
import getTokens from "../getTokens";

import OrbitProvider from ".";

interface OrbitThemeCustomProps {
  orbitTheme: {
    palette: {
      [key: string]: {
        [colorName: string]: string;
      };
    };
  };
  customTheme: {
    [key: string]: string;
  };
}

type OrbitProviderPropsAndCustomArgs = React.ComponentProps<typeof OrbitProvider> &
  OrbitThemeCustomProps;

const meta: Meta<OrbitProviderPropsAndCustomArgs> = {
  title: "OrbitProvider",
  component: OrbitProvider,

  parameters: {
    info: "Example how OrbitProvider component can be used. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
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
  },
};

type Story = StoryObj<OrbitProviderPropsAndCustomArgs>;

export default meta;

export const Default: Story = {
  render: ({ orbitTheme, customTheme }) => (
    <OrbitProvider theme={{ orbit: { ...getTokens(orbitTheme), ...customTheme } }}>
      <Button onClick={action("onClick")}>Hello World!</Button>
    </OrbitProvider>
  ),
};
