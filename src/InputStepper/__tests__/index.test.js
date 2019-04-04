// @flow
import * as React from "react";
import { mount, shallow } from "enzyme";

import InputStepper from "../index";
import { SIZE_OPTIONS } from "../../InputField/consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe(`InputStepper with help, prefix and suffix`, () => {
  const size = SIZE_OPTIONS.NORMAL;
  const label = "Label";
  const defaultValue = 1;
  const step = 2;
  const tabIndex = "-1";
  const help = "Help message";
  const error = "Error message";
  const name = "name";
  const disabled = false;
  const maxValue = 100;
  const minValue = 1;
  const required = false;
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const spaceAfter = SPACINGS_AFTER.NORMAL;

  const component = mount(
    <InputStepper
      size={size}
      label={label}
      defaultValue={defaultValue}
      step={step}
      help={help}
      error={error}
      name={name}
      disabled={disabled}
      maxValue={maxValue}
      minValue={minValue}
      tabIndex={tabIndex}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      spaceAfter={spaceAfter}
    />,
  );
  const input = component.find("InputField");
  const stepper = component.find("InputStepper__StyledInputStepper");
  const inputFieldInput = component.find("InputField__Input");

  it("should contain an input", () => {
    expect(input.exists()).toBe(true);
  });

  it("should have passed props", () => {
    expect(stepper.prop("spaceAfter")).toBe(spaceAfter);
    expect(input.prop("size")).toBe(size);
    expect(input.prop("label")).toBe(label);
    expect(input.prop("value")).toBe(defaultValue);
    expect(input.prop("help")).toBe(help);
    expect(input.prop("error")).toBe(error);
    expect(input.prop("disabled")).toBe(disabled);
    expect(input.prop("maxValue")).toBe(maxValue);
    expect(input.prop("minValue")).toBe(minValue);
    expect(input.prop("required")).toBe(required);
    expect(inputFieldInput.render().prop("tabindex")).toBe(tabIndex);
  });
  const shallowed = shallow(
    <InputStepper
      size={size}
      label={label}
      defaultValue={defaultValue}
      step={step}
      help={help}
      error={error}
      name={name}
      disabled={disabled}
      maxValue={maxValue}
      minValue={minValue}
      tabIndex={tabIndex}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,
  );
  it("should match snapshot", () => {
    expect(shallowed).toMatchSnapshot();
  });
});
