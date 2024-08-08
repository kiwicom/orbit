import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

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
    controls: {
      exclude: ["on"],
    },
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

export const Playground: Story = {
  render: ({ block, ...args }) => {
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
      <Hide block={block} on={on}>
        <div style={{ height: 20, minWidth: "200px", width: "100%", background: "darkViolet" }} />
      </Hide>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
