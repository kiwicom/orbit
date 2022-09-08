import * as React from "react";
import { action } from "@storybook/addon-actions";
import { text, number, select, boolean } from "@storybook/addon-knobs";

import { SIZE_OPTIONS } from "../InputField/consts";
import RenderInRtl from "../../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import InputStepperStateless from "./InputStepperStateless";

import InputStepper from ".";

export default {
  title: "InputStepper",
};

export const Default = () => {
  return <InputStepper onChange={action("onChange")} />;
};

Default.story = {
  parameters: {
    info: "Some description about this type of InputStepper in general.",
  },
};

export const WithHelp = () => {
  const label = text("Label", "Adults");
  const help = text("help", "You need to enter count of adults");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");

  return (
    <InputStepper
      label={label}
      size={size}
      help={help}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
    />
  );
};

WithHelp.story = {
  name: "With help",

  parameters: {
    info: "Here you can try InputStepper component with additional functionality.",
  },
};

export const WithDifferentSize = () => {
  const label = text("Label", "Adults");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");
  return (
    <InputStepper
      label={label}
      size={size}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
    />
  );
};

WithDifferentSize.story = {
  name: "With different size",

  parameters: {
    info: "Here you can try InputStepper component with additional functionality.",
  },
};

export const Stateless = () => {
  const min = number("minValue", 1);
  const max = number("maxValue", 10);
  const step = number("step", 2);
  const label = text("Label", "Label");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const help = text("Help", "");
  const name = text("Name", "name");
  const error = text("Error", "");
  const disabled = boolean("disabled", false);
  const required = boolean("required", false);
  const disabledIncrement = boolean("Disabled Increment", false);
  const disabledDecrement = boolean("Disabled Decrement", false);
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");
  const dataTest = text("dataTest", "test");
  const spaceAfter = select(
    "spaceAfter",
    [undefined, ...Object.values(SPACINGS_AFTER)],
    SPACINGS_AFTER.NORMAL,
  );
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
      disabledIncrement={disabledIncrement}
      disabledDecrement={disabledDecrement}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
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
};

Stateless.story = {
  parameters: {
    info: "Standalone stateless version of a InputStepper, mainly used for working with string",
  },
};

export const Playground = () => {
  const min = number("minValue", 1);
  const max = number("maxValue", 10);
  const step = number("step", 2);
  const defaultValue = number("defaultValue", 4);
  const label = text("Label", "Label");
  const size = select("Size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.NORMAL);
  const help = text("Help", "");
  const name = text("Name", "name");
  const error = text("Error", "Error message (explain how to solve it)");
  const disabled = boolean("disabled", false);
  const required = boolean("required", false);
  const dataTest = text("dataTest", "test");
  const spaceAfter = select(
    "spaceAfter",
    [undefined, ...Object.values(SPACINGS_AFTER)],
    SPACINGS_AFTER.NORMAL,
  );
  const titleIncrement = text("Title increment", "Add a passenger");
  const titleDecrement = text("Title decrement", "Remove a passenger");
  const readOnly = boolean("readOnly", false);
  const width = text("width", "");

  return (
    <InputStepper
      label={label}
      defaultValue={defaultValue}
      size={size}
      step={step}
      error={error}
      help={help}
      name={name}
      width={width}
      maxValue={max}
      minValue={min}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      dataTest={dataTest}
      onChange={action("onChange")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      spaceAfter={spaceAfter}
      titleIncrement={titleIncrement}
      titleDecrement={titleDecrement}
    />
  );
};

Playground.story = {
  parameters: {
    info: "InputStepper with all possible options",
  },
};

export const Rtl = () => {
  return (
    <RenderInRtl>
      <InputStepper label="My label" />
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
