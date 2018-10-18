// @flow
import * as React from "react";
import renderer from "react-test-renderer";

import InputField from "../index";

describe("InputField", () => {
  const size = "normal";
  const type = "text";
  const label = "Label";
  const value = "value";
  const placeholder = "placeholder";
  const maxLength = 10;
  const onChangeText = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const component = renderer.create(
    <InputField
      size={size}
      type={type}
      label={label}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      help="Help text"
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
    />,
  );
  const instance = component.root;
  it("should have passed props", () => {
    expect(instance.props.size).toBe(size);
    expect(instance.props.type).toBe(type);
    expect(instance.props.value).toBe(value);
    expect(instance.props.placeholder).toBe(placeholder);
    expect(instance.props.maxLength).toBe(maxLength);
  });
  it("should execute onChangeText", () => {
    expect(onChangeText).not.toHaveBeenCalled();
    instance.props.onChangeText();
    expect(onChangeText).toHaveBeenCalled();
  });
  it("should execute onFocus", () => {
    expect(onFocus).not.toHaveBeenCalled();
    instance.props.onFocus();
    expect(onFocus).toHaveBeenCalled();
  });
  it("should execute onBlur", () => {
    expect(onBlur).not.toHaveBeenCalled();
    instance.props.onBlur();
    expect(onBlur).toHaveBeenCalled();
  });
  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("should match the snapshot with inlineLabel", () => {
    const component2 = renderer.create(<InputField label="inlineLabel" inlineLabel required />);
    expect(component2.toJSON()).toMatchSnapshot();
  });
});
