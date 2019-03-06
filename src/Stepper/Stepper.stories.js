// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, boolean } from "@storybook/addon-knobs";

import Stepper from "./index";

storiesOf("Stepper", module)
  .add("Default", () => <Stepper onChange={action("onChange")} />)
  .add("Playground", () => {
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
  });
