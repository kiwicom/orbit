import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Separator from "../Separator";
import ChevronBackward from "../icons/ChevronBackward";
import type { Devices } from "../utils/mediaQuery";

import Hide from ".";

type HidePropsAndCustomArgs = React.ComponentProps<typeof Hide> & {
  largeDesktop: boolean;
  desktop: boolean;
  tablet: boolean;
  largeMobile: boolean;
  mediumMobile: boolean;
  smallMobile: boolean;
};

const meta: Meta<HidePropsAndCustomArgs> = {
  title: "Hide",
  component: Hide,
  parameters: {
    info: "Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    largeDesktop: false,
    desktop: false,
    tablet: false,
    largeMobile: false,
    mediumMobile: false,
    smallMobile: false,
    block: false,
  },
};

export default meta;

type Story = StoryObj<HidePropsAndCustomArgs>;

export const WithSeparator: Story = {
  render: ({ largeMobile, ...args }) => {
    const on = [largeMobile && "largeMobile"] as Devices[];

    return (
      <Hide {...args} on={on}>
        <Separator />
      </Hide>
    );
  },

  parameters: {
    info: "Configuration with Separator, for separator to work correctly block property has to be set.",
  },

  args: {
    block: true,
  },
};

export const Playground = {
  render: args => {
    const { largeDesktop, desktop, tablet, largeMobile, mediumMobile, smallMobile } = args;

    const on = [
      largeDesktop && "largeDesktop",
      desktop && "desktop",
      tablet && "tablet",
      largeMobile && "largeMobile",
      mediumMobile && "mediumMobile",
      smallMobile && "smallMobile",
    ].filter(item => typeof item === "string") as Devices[];

    return (
      <Hide {...args} on={on}>
        <ChevronBackward />
      </Hide>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
