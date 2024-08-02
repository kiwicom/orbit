import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { SIZE_OPTIONS, CARRIER_TYPE_OPTIONS } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import CarrierLogo from ".";

const meta: Meta<typeof CarrierLogo> = {
  title: "CarrierLogo",
  component: CarrierLogo,

  parameters: {
    info: "Carrier logo displays one or more logos of transport carriers. It is usually together with the travel itinerary. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    rounded: false,
    inlineStacked: false,
    size: SIZE_OPTIONS.LARGE,
    carriers: [
      { code: "FR", name: "Ryanair" },
      { code: "TO", name: "Transavia France" },
    ],
  },

  argTypes: {
    size: {
      options: Object.values(SIZE_OPTIONS),
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CarrierLogo>;

export const OneCarrier: Story = {
  args: {
    carriers: [{ code: "FR", name: "Ryanair" }],
  },
};

export const TwoCarriers: Story = {};

export const FourCarriers: Story = {
  args: {
    carriers: [
      { code: "FR", name: "Ryanair" },
      { code: "TO", name: "Transavia France" },
      { code: "VY", name: "Vueling" },
      { code: "OK", name: "Czech Airlines" },
    ],
  },
};

export const InlineStacked: Story = {
  parameters: {
    info: "Carrier logos are displayed inline, stacking on top of each other.",
  },

  args: {
    ...FourCarriers.args,
    inlineStacked: true,
  },
};

export const NonExistingCarriers: Story = {
  args: {
    carriers: [
      { code: "LOL", name: "Lorem ipsum", type: "airline" },
      { code: "KEK", name: "Lorem ipsum", type: "bus" },
      { code: "BUR", name: "Lorem ipsum", type: "train" },
    ],
  },
};

export const NonExistingCarrier: Story = {
  args: {
    carriers: [{ code: "LAL", name: "Lorem ipsum", type: CARRIER_TYPE_OPTIONS.AIRLINE }],
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <CarrierLogo
        rounded
        inlineStacked
        size="large"
        carriers={[
          { code: "FR", name: "Lorem ipsum", type: "airline" },
          { code: "TO", name: "Lorem ipsum", type: "train" },
        ]}
      />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
