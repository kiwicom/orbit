import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SPACINGS } from "../utils/layout/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import Box from "../Box";
import Text from "../Text";

import HorizontalScroll from ".";

Box.displayName = "Box";
HorizontalScroll.displayName = "HorizontalScroll";

interface ScrollSnapTypes {
  scrollSnapAlign: "none" | "start" | "end" | "center";
  scrollSnapType: "none" | "inline" | "mandatory" | "proximity";
}

type HorizontalScrollPropsAndCustomArgs = React.ComponentProps<typeof HorizontalScroll> &
  ScrollSnapTypes;

const meta: Meta<HorizontalScrollPropsAndCustomArgs> = {
  title: "HorizontalScroll",
  component: HorizontalScroll,

  parameters: {
    info: "Horizontal scroll component. Check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    overflowElevation: false,
    elevationColor: "paletteGreenLight",
    arrows: false,
    arrowColor: "#000000",
    arrowLeftAriaLabel: "scroll left",
    arrowRightAriaLabel: "scroll right",
    spacing: SPACINGS.FIFTY,
    scrollPadding: 0,
    scrollSnap: "mandatory",
    minHeight: 120,
  },

  argTypes: {
    spacing: {
      options: Object.values(SPACINGS),
      control: {
        type: "select",
      },
    },
    scrollSnap: {
      options: ["none", "inline", "mandatory", "proximity"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<HorizontalScrollPropsAndCustomArgs>;

const ScrollTile = ({ title }: { title: number }) => (
  <Box
    key={title}
    display="flex"
    justify="center"
    minWidth="150px"
    background="cloudLight"
    height="full"
  >
    <Text size="large" weight="bold" as="div">
      <div
        style={{
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {title}
      </div>
    </Text>
  </Box>
);

export const Default: Story = {
  render: args => (
    <HorizontalScroll {...args}>
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        Array(...Array(10)).map((_, key) => {
          return <ScrollTile title={key} />;
        })
      }
    </HorizontalScroll>
  ),

  parameters: {
    controls: {
      disable: true,
    },
  },

  args: {
    spacing: undefined,
    scrollPadding: undefined,
    scrollSnap: undefined,
    overflowElevation: false,
    arrowColor: undefined,
    elevationColor: undefined,
    minHeight: undefined,
  },
};

export const Playground: Story = {
  render: args => (
    <HorizontalScroll {...args}>
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        Array(...Array(10)).map((_, key) => (
          <ScrollTile title={key} />
        ))
      }
    </HorizontalScroll>
  ),

  parameters: {
    info: "Horizontal scroll playground. Check Orbit.Kiwi for more detailed design guidelines.",
  },
};

export const Rtl: Story = {
  ...Default,
  render: args => {
    return (
      <RenderInRtl>
        <HorizontalScroll {...args} arrows>
          {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            Array(...Array(10)).map((_, key) => {
              return <ScrollTile title={key} />;
            })
          }
        </HorizontalScroll>
      </RenderInRtl>
    );
  },
};
