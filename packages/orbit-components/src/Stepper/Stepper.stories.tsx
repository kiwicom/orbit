import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import StatelessStepper from "./StepperStateless";

import Stepper from ".";

const meta: Meta<typeof Stepper> = {
  title: "Stepper",
  component: Stepper,
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  parameters: {
    info: "Default settings of Stepper component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },

  args: {
    ariaLabelValue: "Number of passengers",
    titleIncrement: "Add a passenger",
    titleDecrement: "Remove a passenger",
  },
};

export const Playground: Story = {
  args: {
    ...Default.args,
    id: "stepper-ID",
    name: "Number of passengers",
    step: 1,
    minValue: 0,
    maxValue: 20,
    defaultValue: 0,
    active: false,
    disabled: false,
    maxWidth: 120,
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
  },

  parameters: {
    info: "Playground of Stepper component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["onFocus", "onBlur", "onChange"],
    },
  },
};

export const Stateless: Story & StoryObj<typeof StatelessStepper> = {
  render: args => <StatelessStepper {...args} />,

  args: {
    ...Playground.args,
    defaultValue: undefined,
    onChange: undefined,
    value: 0,
    disabledIncrement: false,
    disabledDecrement: false,
    onKeyDown: action("onKeyDown"),
    onIncrement: action("onIncrement"),
    onDecrement: action("onDecrement"),
  },

  parameters: {
    info: "Stepper stateless component. Check Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "onFocus",
        "onBlur",
        "onChange",
        "onKeyDown",
        "onIncrement",
        "onDecrement",
        "defaultValue",
      ],
    },
  },
};

export const Rtl: Story = {
  render: args => (
    <RenderInRtl>
      <Stepper {...args} />
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of Stepper component in RTL setup.",
    controls: {
      disable: true,
    },
  },

  args: {
    ...Default.args,
  },
};
