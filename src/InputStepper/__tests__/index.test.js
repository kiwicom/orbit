// @flow
import * as React from "react";
import { shallow } from "enzyme";

import InputStepper from "../index";
import { SIZE_OPTIONS } from "../../InputField/consts";

describe(`InputField with help, prefix and suffix`, () => {
  const size = SIZE_OPTIONS.NORMAL;
  const label = "Label";
  const defaultValue = 1;
  const step = 2;
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

  const component = shallow(
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
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,
  );
  const input = component.find("InputField");
  const InitialState = { value: 0 };

  it("Initialize with the state", () => {
    component.setState(InitialState);
    expect(component.state()).toEqual(InitialState);
  });

  it("should contain an input", () => {
    expect(input.exists()).toBe(true);
  });

  it("should have passed props", () => {
    expect(input.prop("size")).toBe(size);
    expect(input.prop("label")).toBe(label);
    expect(input.prop("value")).toBe(defaultValue);
    expect(input.prop("help")).toBe(help);
    expect(input.prop("error")).toBe(error);
    expect(input.prop("disabled")).toBe(disabled);
    expect(input.prop("maxValue")).toBe(maxValue);
    expect(input.prop("minValue")).toBe(minValue);
    expect(input.prop("required")).toBe(required);
  });

  it("should execute onChange method", () => {
    input.simulate("change");
    expect(onChange).toHaveBeenCalled();
  });

  it("should execute onFocus method", () => {
    input.simulate("focus");
    expect(onFocus).toHaveBeenCalled();
  });

  it("should execute onBlur method", () => {
    input.simulate("focus");
    input.simulate("blur");
    expect(onBlur).toHaveBeenCalled();
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
