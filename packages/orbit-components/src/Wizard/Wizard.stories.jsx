// @flow

import * as React from "react";
import { number, array, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import RenderInRtl from "../utils/rtl/RenderInRtl";

import Wizard, { WizardStep } from ".";

export default {
  title: "Wizard",
};

export const Default = (): React.Node => {
  const direction = select("direction", ["row", "column"], "row");

  return (
    <Wizard
      id="wizard"
      direction={direction}
      completedSteps={3}
      activeStep={3}
      onChangeStep={action("onChangeStep")}
    >
      <WizardStep title="Search" />
      <WizardStep title="Passenger details" />
      <WizardStep title="Ticket fare" />
      <WizardStep title="Customize your trip" />
      <WizardStep title="Overview & Payment" />
    </Wizard>
  );
};

export const Rtl = (): React.Node => {
  return (
    <RenderInRtl>
      <Wizard id="wizard" completedSteps={3} activeStep={3} onChangeStep={action("onChangeStep")}>
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

export const Playground = (): React.Node => {
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
