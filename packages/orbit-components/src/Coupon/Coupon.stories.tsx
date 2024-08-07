import React from "react";
import type { Meta, StoryObj } from "@storybook/react/";

import Text from "../Text";

import Coupon from ".";

const meta: Meta<typeof Coupon> = {
  title: "Coupon",
  component: Coupon,

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    id: "couponId",
    children: "CODE",
  },
};

export default meta;
type Story = StoryObj<typeof Coupon>;

export const Playground: Story = {
  render: ({ children, id }) => (
    <Text>
      Lorem ipsum dolor sit amet, consectetuer <Coupon id={id}>{children}</Coupon> elit. Proin pede
      metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
    </Text>
  ),
};
