import * as React from "react";
import { action } from "@storybook/addon-actions";

import StatelessStepper from "./StepperStateless";

import Stepper from ".";

export default {
  title: "Stepper",
};

export const Default = ({ titleIncrement, titleDecrement }) => {
  return (
    <Stepper
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      onChange={action("onChange")}
    />
  );
};

Default.story = {
  parameters: {
    info: "Some description about this type of Stepper in general.",
  },
};

Default.args = {
  titleIncrement: "Add a passenger",
  titleDecrement: "Remove a passenger",
};

export const Stateless = ({
  min,
  max,
  value,
  name,
  disabled,
  dataTest,
  disabledIncrement,
  disabledDecrement,
  titleIncrement,
  titleDecrement,
  active,
}) => {
  return (
    <StatelessStepper
      dataTest={dataTest}
      value={value}
      active={active}
      name={name}
      maxValue={max}
      minValue={min}
      disabled={disabled}
      disabledIncrement={disabledIncrement}
      disabledDecrement={disabledDecrement}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onChange={action("onChange")}
      onKeyDown={action("onKeyDown")}
      onIncrement={action("onIncrement")}
      onDecrement={action("onDecrement")}
    />
  );
};

Stateless.story = {
  parameters: {
    info: "Here you can try StatelessStepper component with additional functionality.",
  },
};

Stateless.args = {
  min: 1,
  max: 10,
  value: "2 adults",
  name: "name",
  disabled: false,
  dataTest: "test",
  disabledIncrement: false,
  disabledDecrement: false,
  titleIncrement: "Add a passenger",
  titleDecrement: "Remove a passenger",
  active: false,
};

export const Playground = ({
  min,
  max,
  step,
  defaultValue,
  name,
  disabled,
  dataTest,
  titleIncrement,
  titleDecrement,
  active,
}) => {
  return (
    <Stepper
      defaultValue={defaultValue}
      step={step}
      active={active}
      name={name}
      maxValue={max}
      minValue={min}
      disabled={disabled}
      dataTest={dataTest}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
    />
  );
};
Playground.story = {
  parameters: {
    info: "Here you can try Stepper component with additional functionality.",
  },
};

Playground.args = {
  min: 1,
  max: 10,
  step: 2,
  defaultValue: 4,
  name: "name",
  disabled: false,
  dataTest: "test",
  titleIncrement: "Add a passenger",
  titleDecrement: "Remove a passenger",
  active: false,
};
