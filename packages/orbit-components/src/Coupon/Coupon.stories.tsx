import React from "react";
import type { Meta, StoryObj } from "@storybook/react/";

import Text from "../Text";

import Coupon from ".";

type CouponPropsAndCustomArgs = React.ComponentProps<typeof Coupon> & { content: string };

const meta: Meta<CouponPropsAndCustomArgs> = {
  title: "Coupon",
  component: Coupon,

  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },

  args: {
    id: "couponId",
    content: "CODE",
  },
};

export default meta;
type Story = StoryObj<CouponPropsAndCustomArgs>;

export const Playground: Story = {
  render: ({ content }) => (
    <Text>
      Lorem ipsum dolor sit amet, consectetuer <Coupon>{content}</Coupon> elit. Proin pede metus,
      vulputate nec, fermentum fringilla, vehicula vitae, justo.
    </Text>
  ),
};
