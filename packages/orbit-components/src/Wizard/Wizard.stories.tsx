import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import Stack from "../Stack";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Wizard, { WizardStep } from ".";

type WizardPropsAndCustomArgs = React.ComponentProps<typeof Wizard> & {
  steps: string[];
};

const meta: Meta<WizardPropsAndCustomArgs> = {
  title: "Wizard",
  component: Wizard,

  parameters: {
    controls: {
      exclude: ["steps", "onChangeStep", "direction", "lockScrolling", "labelClose"],
    },
  },

  args: {
    id: "wizard",
    completedSteps: 2,
    activeStep: 2,
    steps: [
      "Search",
      "Passenger details",
      "Ticket fare",
      "Customize your trip",
      "Kiwi.com guarantee",
      "Seating",
      "Overview & payment",
    ],
    onChangeStep: action("onChangeStep"),
  },

  argTypes: {
    direction: {
      options: ["row", "column"],
      control: {
        type: "select",
      },
    },
    completedSteps: {
      control: {
        type: "range",
        min: 0,
        max: 7,
        step: 1,
      },
    },
    activeStep: {
      control: {
        type: "range",
        min: 0,
        max: 6,
        step: 1,
      },
    },
  },
};

export default meta;
type Story = StoryObj<WizardPropsAndCustomArgs>;

export const Default: Story = {
  render: ({ activeStep, completedSteps, steps, ...args }) => (
    <Wizard
      {...args}
      activeStep={activeStep > completedSteps ? completedSteps : activeStep}
      completedSteps={completedSteps}
    >
      {steps.map(step => (
        <WizardStep key={step} title={step} />
      ))}
    </Wizard>
  ),

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground: Story = {
  render: ({ activeStep, completedSteps, labelProgress, steps, ...args }) => (
    <Wizard
      {...args}
      labelProgress={`${completedSteps} ${labelProgress} ${steps.length}`}
      activeStep={activeStep > completedSteps ? completedSteps : activeStep}
      completedSteps={completedSteps}
    >
      {steps.map(step => (
        <WizardStep key={step} title={step} />
      ))}
    </Wizard>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: ["steps", "onChangeStep"],
    },
  },

  args: {
    direction: "row",
    labelClose: "Close",
    labelProgress: "of",
    lockScrolling: true,
  },
};

export const Rtl: Story = {
  render: ({ activeStep, completedSteps, steps, ...args }) => (
    <RenderInRtl>
      <Wizard
        {...args}
        labelProgress={
          <Stack flex spacing="100">
            <div>3</div>
            <div>of</div>
            <div>3</div>
          </Stack>
        }
        activeStep={activeStep > completedSteps ? completedSteps : activeStep}
        completedSteps={completedSteps}
      >
        {steps.map(step => (
          <WizardStep key={step} title={step} />
        ))}
      </Wizard>
    </RenderInRtl>
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      exclude: ["steps", "onChangeStep", "labelProgress"],
    },
  },

  args: {
    ...Playground.args,
  },

  argTypes: {
    ...Playground.argTypes,
  },
};
