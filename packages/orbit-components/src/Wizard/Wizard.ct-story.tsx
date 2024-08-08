import * as React from "react";

import Wizard, { WizardStep } from ".";

export function WizardStory() {
  return (["row", "column"] as const).map(direction => (
    <>
      <div className="p-400">
        <Wizard
          id={`wizard-single-${direction}`}
          dataTest={`wizard-single-${direction}`}
          direction={direction}
          activeStep={0}
          completedSteps={0}
        >
          <WizardStep title="Search" />
        </Wizard>
      </div>
      <div className="p-400">
        <Wizard
          id={`wizard-completed-0-${direction}`}
          direction={direction}
          activeStep={1}
          completedSteps={0}
        >
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" isCompleted />
          <WizardStep title="Overview & Payment" />
        </Wizard>
      </div>
      <div className="p-400">
        <Wizard
          id={`wizard-completed-2-${direction}`}
          direction={direction}
          activeStep={1}
          completedSteps={2}
        >
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" isCompleted />
          <WizardStep title="Overview & Payment" />
        </Wizard>
      </div>
      <div className="p-400">
        <Wizard
          id={`wizard-completed-5-${direction}`}
          direction={direction}
          activeStep={4}
          completedSteps={5}
          labelClose="CLOSE"
          labelProgress="PROGRESS"
        >
          <WizardStep title="Search" />
          <WizardStep title="Passenger details" />
          <WizardStep title="Ticket fare" />
          <WizardStep title="Customize your trip" isCompleted />
          <WizardStep title="Overview & Payment" />
        </Wizard>
      </div>
    </>
  ));
}

export function WizardStoryHover({ direction }: { direction: "row" | "column" }) {
  return (
    <div className="p-400">
      <Wizard id={React.useId()} direction={direction} activeStep={1} completedSteps={2}>
        <WizardStep title="Search" />
        <WizardStep title="Passenger details" />
        <WizardStep title="Ticket fare" />
        <WizardStep title="Customize your trip" isCompleted />
        <WizardStep title="Overview & Payment" />
      </Wizard>
    </div>
  );
}
