import * as React from "react";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Wizard, { WizardStep } from ".";

export default {
  title: "Wizard",
};

export const Default = ({ direction, labelClose, labelProgress }) => {
  return (
    <Wizard
      id="wizard"
      direction={direction}
      completedSteps={2}
      activeStep={1}
      labelClose={labelClose}
      labelProgress={`2 ${labelProgress} 6`}
      onChangeStep={action("onChangeStep")}
    >
      <WizardStep title="Search" />
      <WizardStep title="Passenger details" />
      <WizardStep title="Ticket fare" />
      <WizardStep title="Kiwi.com guarantee" isCompleted />
      <WizardStep title="Seating" />
      <WizardStep title="Overview & Payment" />
    </Wizard>
  );
};

Default.args = {
  direction: "row",
  labelClose: "Close",
  labelProgress: "of",
};

Default.argTypes = {
  direction: {
    options: ["row", "column"],
    control: {
      type: "select",
    },
  },
};

export const Rtl = ({ direction }) => {
  return (
    <RenderInRtl>
      <Wizard
        id="wizard"
        direction={direction}
        completedSteps={3}
        activeStep={3}
        onChangeStep={action("onChangeStep")}
        labelProgress={
          <Stack flex spacing="XXSmall">
            <div>3</div>
            <div>of</div>
            <div>3</div>
          </Stack>
        }
      >
        <WizardStep title="Search" />
        <WizardStep title="Passenger details" />
        <WizardStep title="Ticket fare" />
        <WizardStep title="Customize your trip" />
        <WizardStep title="Overview & Payment" />
      </Wizard>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",
};

Rtl.args = {
  direction: "row",
};

Rtl.argTypes = {
  direction: {
    options: ["row", "column"],
    control: {
      type: "select",
    },
  },
};

export const Playground = ({
  labelClose,
  labelProgress,
  steps,
  activeStep,
  completedSteps,
  direction,
}) => {
  return (
    <Wizard
      id="wizard"
      labelClose={labelClose}
      labelProgress={`${activeStep} ${labelProgress} ${steps.length}`}
      completedSteps={completedSteps}
      activeStep={activeStep}
      onChangeStep={action("onChangeStep")}
      direction={direction}
    >
      {steps.map(step => (
        <WizardStep key={step} title={step} />
      ))}
    </Wizard>
  );
};

Playground.args = {
  labelClose: "Close",
  labelProgress: "of",
  steps: [
    "Search",
    "Passenger details",
    "Ticket fare",
    "Customize your trip",
    "Overview & payment",
  ],
  activeStep: 3,
  completedSteps: 3,
  direction: "row",
};

Playground.argTypes = {
  direction: {
    options: ["row", "column"],
    control: {
      type: "select",
    },
  },
  activeStep: {
    control: {
      type: "range",
      min: 0,
      max: Math.min(Playground.args.completedSteps, Playground.args.steps.length - 1),
      step: 1,
    },
  },
  completedSteps: {
    control: {
      type: "range",
      min: 0,
      max: Playground.args.steps.length,
      step: 1,
    },
  },
};
