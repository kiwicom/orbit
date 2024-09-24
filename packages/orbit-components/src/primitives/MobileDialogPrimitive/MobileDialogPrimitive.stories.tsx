import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Alert from "../../Alert";
import Stack from "../../Stack";
import Text from "../../Text";

import MobileDialogPrimitive from ".";

const meta: Meta<typeof MobileDialogPrimitive> = {
  title: "MobileDialogPrimitive",
  component: MobileDialogPrimitive,

  parameters: {
    info: "You can try all possible configurations of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onShow"],
    },
  },

  args: {
    labelClose: "Close",
    enabled: true,
    onShow: action("onShow"),
    renderInPortal: true,
    tabIndex: 0,
    content: "Write your text here.",
    stopPropagation: true,
    removeUnderlinedText: false,
    block: false,
    lockScrolling: false,
  },
};

export default meta;
type Story = StoryObj<typeof MobileDialogPrimitive>;

export const Playground: Story = {
  render: args => (
    <Alert icon title="Lorem ipsum dolor sit amet" type="warning">
      <Stack spacing="none">
        Excepteur sint occaecat cupidatat non proident.{" "}
        <MobileDialogPrimitive {...args}>
          <Text>Aliquam erat volutpat.</Text>
        </MobileDialogPrimitive>
      </Stack>
    </Alert>
  ),
};
