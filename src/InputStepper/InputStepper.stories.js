// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, number, select, boolean } from "@storybook/addon-knobs";

import { SIZE_OPTIONS } from "../InputField/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";
import InputStepperStateless from "./InputStepperStateless";

import InputStepper from "./index";

storiesOf("InputStepper", module)
  .add("Default", () => <InputStepper onChange={action("onChange")} />, {
    info: "Some description about this type of InputStepper in general.",
  })
  .add(
    "With help",
    () => {
      const label = text("Label", "Adults");
      const help = text("help", "You need to enter count of adults");
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);

      return (
        <InputStepper
          label={label}
          size={size}
          help={help}
          onChange={action("onChange")}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
        />
      );
    },
    {
      info: "Here you can try InputStepper component with additional functionality.",
    },
  )
  .add(
    "With different size",
    () => {
      const label = text("Label", "Adults");
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      return (
        <InputStepper
          label={label}
          size={size}
          onChange={action("onChange")}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
        />
      );
    },
    {
      info: "Here you can try InputStepper component with additional functionality.",
    },
  )
  .add(
    "Stateless",
    () => {
      const min = number("minValue", 1);
      const max = number("maxValue", 10);
      const step = number("step", 2);
      const label = text("Label", "Label");
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      const help = text("Help", undefined);
      const name = text("Name", "name");
      const error = text("Error", "");
      const disabled = boolean("disabled", false);
      const required = boolean("required", false);
      const dataTest = text("dataTest", "test");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      const value = text("Value", "2 Adults");

      return (
        <InputStepperStateless
          value={value}
          label={label}
          size={size}
          step={step}
          error={error}
          help={help}
          name={name}
          maxValue={max}
          minValue={min}
          disabled={disabled}
          required={required}
          dataTest={dataTest}
          onChange={action("onChange")}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
          onKeyDown={action("onKeyDown")}
          onDecrement={action("onDecrement")}
          onIncrement={action("onIncrement")}
          spaceAfter={spaceAfter}
        />
      );
    },
    {
      info: "Standalone stateless version of a InputStepper, mainly used for working with string",
    },
  )
  .add(
    "Playground",
    () => {
      const min = number("minValue", 1);
      const max = number("maxValue", 10);
      const step = number("step", 2);
      const defaultValue = number("defaultValue", 4);
      const label = text("Label", "Label");
      const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
      const help = text("Help", undefined);
      const name = text("Name", "name");
      const error = text("Error", "Error message (explain how to solve it)");
      const disabled = boolean("disabled", false);
      const required = boolean("required", false);
      const dataTest = text("dataTest", "test");
      const spaceAfter = select("spaceAfter", [null, ...Object.values(SPACINGS_AFTER)]);
      return (
        <InputStepper
          label={label}
          defaultValue={defaultValue}
          size={size}
          step={step}
          error={error}
          help={help}
          name={name}
          maxValue={max}
          minValue={min}
          disabled={disabled}
          required={required}
          dataTest={dataTest}
          onChange={action("onChange")}
          onFocus={action("onFocus")}
          onBlur={action("onBlur")}
          spaceAfter={spaceAfter}
        />
      );
    },
    {
      info: "InputStepper with all possible options",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <InputStepper label="My label" />
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
