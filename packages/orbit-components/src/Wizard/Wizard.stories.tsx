import * as React from "react";
import { number, array, select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Wizard, { WizardStep } from ".";

export default {
  title: "Wizard",
};

export const Default = () => {
  const direction = select("direction", ["row", "column"], "row");
  const labelClose = text("labelClose", "Close");
  const labelProgress = text("labelProgress", "of");

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

export const Rtl = () => {
  return (
    <RenderInRtl>
      <Wizard
        id="wizard"
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

export const Playground = () => {
  const labelClose = text("labelClose", "Close");
  const labelProgress = text("labelProgress", "of");
  const steps = array("Steps", [
    "Search",
    "Passenger details",
    "Ticket fare",
    "Customize your trip",
    "Overview & payment",
  ]);
  const completedSteps = number("completedSteps", 3, {
    range: true,
    min: 0,
    max: steps.length,
    step: 1,
  });
  const activeStep = number("activeStep", 3, {
    range: true,
    min: 0,
    max: Math.min(completedSteps, steps.length - 1),
    step: 1,
  });
  return (
    <Wizard
      id="wizard"
      labelClose={labelClose}
      labelProgress={`${activeStep} ${labelProgress} ${steps.length}`}
      completedSteps={completedSteps}
      activeStep={activeStep}
      onChangeStep={action("onChangeStep")}
    >
      {steps.map(step => (
        <WizardStep key={step} title={step} />
      ))}
    </Wizard>
  );
};

Playground.story = {
  parameters: { knobs: { escapeHTML: false } },
};
