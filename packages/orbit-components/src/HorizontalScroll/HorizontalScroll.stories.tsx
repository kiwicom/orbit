import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SPACINGS } from "../utils/layout/consts";
import Box from "../Box";
import Text from "../Text";
import Stack from "../Stack";

import HorizontalScroll from ".";

Box.displayName = "Box";
HorizontalScroll.displayName = "HorizontalScroll";

type HorizontalScrollPropsAndCustomArgs = React.ComponentProps<typeof HorizontalScroll> & {
  scrollSnapAlign: "none" | "start" | "end" | "center";
  scrollSnapType: "none" | "inline" | "mandatory" | "proximity";
};

const meta: Meta<HorizontalScrollPropsAndCustomArgs> = {
  title: "HorizontalScroll",
  component: HorizontalScroll,

  args: {
    overflowElevation: true,
    elevationColor: "",
    arrows: false,
    arrowColor: "",
    spacing: SPACINGS.XXXSMALL,
    scrollPadding: 0,
    scrollSnap: "mandatory",
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

export const Default: Story = {
  render: args => (
    <HorizontalScroll {...args}>
      {Array(...Array(10)).map((_, key) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={key}
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
              {key}
            </div>
          </Text>
        </Box>
      ))}
    </HorizontalScroll>
  ),
};

export const NoScroll = {
  render: args => (
    <Stack>
      <Text>
        Horizontal scroll turns on only if elements inside are wider than parent container
      </Text>
      <HorizontalScroll {...args}>
        {Array(...Array(5)).map((_, key) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={key}
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
                {key}
              </div>
            </Text>
          </Box>
        ))}
      </HorizontalScroll>
    </Stack>
  ),

  args: {
    spacing: SPACINGS.XXXSMALL,
  },
};

export const WithScrollSnap: Story = {
  render: ({ scrollSnapAlign, ...args }) => (
    <HorizontalScroll {...args}>
      {Array(...Array(10)).map((_, key) => (
        <div
          style={{
            scrollSnapAlign,
            width: "150px",
            display: "flex",
            justifyContent: "center",
            height: "50px",
            background: "#ccc",
          }}
        >
          <Text size="large" weight="bold" as="div">
            <div
              style={{
                height: "50px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {key}
            </div>
          </Text>
        </div>
      ))}
    </HorizontalScroll>
  ),

  args: {
    scrollSnapAlign: "start",
  },

  argTypes: {
    scrollSnapAlign: {
      options: ["none", "start", "end", "center"],
      control: {
        type: "select",
      },
    },
  },
};
