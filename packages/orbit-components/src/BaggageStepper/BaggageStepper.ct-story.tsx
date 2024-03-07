import * as React from "react";

import BaggageStepper from ".";

export default function BaggageStepperStory() {
  return (
    <div className="p-md">
      <BaggageStepper />
      <BaggageStepper minValue={0} maxValue={10} />
      <BaggageStepper minValue={0} defaultValue={5} maxValue={10} />
      <BaggageStepper minValue={0} defaultValue={10} maxValue={10} />
      <BaggageStepper disabled />
      <BaggageStepper disabled selected />
      <BaggageStepper selected minValue={0} maxValue={10} />
      <BaggageStepper selected minValue={0} defaultValue={5} maxValue={10} />
      <BaggageStepper selected minValue={0} defaultValue={10} maxValue={10} />
    </div>
  );
}
