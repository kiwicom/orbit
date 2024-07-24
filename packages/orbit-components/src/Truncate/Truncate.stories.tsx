import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import Stack from "../Stack";
import Text from "../Text";

import Truncate from ".";

type TruncatePropsAndCustomArgs = React.ComponentProps<typeof Truncate> & { content?: string };

const meta: Meta<TruncatePropsAndCustomArgs> = {
  title: "Truncate",
  component: Truncate,

  args: {
    content:
      "Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nulla pulvinar eleifend sem. Sed ac dolor sit amet purus malesuada congue. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Pellentesque pretium lectus id turpis. Etiam dictum tincidunt diam.",
    maxWidth: "20%",
  },
};

export default meta;
type Story = StoryObj<TruncatePropsAndCustomArgs>;

export const Default: Story = {
  render: ({ content, maxWidth }) => {
    return <Truncate maxWidth={maxWidth}>{content}</Truncate>;
  },

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const InStack: Story = {
  render: ({ content, maxWidth }) => (
    <Stack direction="row">
      <Truncate maxWidth={maxWidth}>
        <Text>{content}</Text>
      </Truncate>
      <Truncate>
        <Text>{content}</Text>
      </Truncate>
    </Stack>
  ),

  parameters: {
    info: "This is the configuration of this component in combination with Stack. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground: Story = {
  render: ({ content, maxWidth }) => (
    <Truncate maxWidth={maxWidth}>
      <Text>{content}</Text>
    </Truncate>
  ),

  parameters: {
    info: "This is the configuration of this component in combination with Stack. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    maxWidth: "none",
  },
};

export const Rtl: Story = {
  render: ({ content, maxWidth }) => (
    <RenderInRtl>
      <Stack direction="row">
        <Truncate maxWidth={maxWidth}>
          <Text>{content}</Text>
        </Truncate>
        <Truncate>
          <Text>{content}</Text>
        </Truncate>
      </Stack>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
