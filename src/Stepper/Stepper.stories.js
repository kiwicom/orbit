// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean } from "@storybook/addon-knobs";

import StatelessStepper from "./StepperStateless";

import Stepper from "./index";

storiesOf("Stepper", module)
  .add("Default", () => <Stepper onChange={action("onChange")} />, {
    info: "Some description about this type of Stepper in general.",
  })
  .add(
    "Stateless",
    () => {
      const min = number("minValue", 1);
      const max = number("maxValue", 10);
      const value = text("value", "2 adults");
      const name = text("Name", "name");
      const disabled = boolean("disabled", false);
      const dataTest = text("dataTest", "test");
      return (
        <StatelessStepper
          dataTest={dataTest}
          value={value}
          name={name}
          maxValue={max}
          minValue={min}
          disabled={disabled}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
          onChange={action("onChange")}
          onKeyDown={action("onKeyDown")}
          onIncrement={action("onIncrement")}
          onDecrement={action("onDecrement")}
        />
      );
    },
    {
      info: "Here you can try StatelessStepper component with additional functionality.",
    },
  )
  .add(
    "Playground",
    () => {
      const min = number("minValue", 1);
      const max = number("maxValue", 10);
      const step = number("step", 2);
      const defaultValue = number("defaultValue", 4);
      const name = text("Name", "name");
      const disabled = boolean("disabled", false);
      const dataTest = text("dataTest", "test");
      return (
        <Stepper
          defaultValue={defaultValue}
          step={step}
          name={name}
          maxValue={max}
          minValue={min}
          disabled={disabled}
          dataTest={dataTest}
          onChange={action("onChange")}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
        />
      );
    },
    {
      info: "Here you can try Stepper component with additional functionality.",
    },
  );
