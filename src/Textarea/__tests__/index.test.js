// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Textarea from "../index";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "../consts";

describe(`Textarea with help`, () => {
  const size = SIZE_OPTIONS.NORMAL;
  const name = "name";
  const label = "Label";
  const value = "value";
  const placeholder = "placeholder";
  const maxLength = 200;
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  const component = shallow(
    <Textarea
      size={size}
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      help={<div>Something useful.</div>}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />,
  );
  const area = component.find("Textarea__StyledTextArea");

  it("should contain a label", () => {
    expect(
      component
        .find("FormLabel")
        .render()
        .text(),
    ).toBe(label);
  });
  it("should contain a textarea", () => {
    expect(area.exists()).toBe(true);
  });
  it("should have passed props", () => {
    expect(area.prop("size")).toBe(size);
    expect(area.prop("name")).toBe(name);
    expect(area.prop("value")).toBe(value);
    expect(area.prop("placeholder")).toBe(placeholder);
    expect(area.prop("maxLength")).toBe(maxLength);
  });
  it("should contain FeedBack help", () => {
    expect(component.find(`FormFeedback[type="help"]`).exists()).toBe(true);
  });
  it("should execute onChange method", () => {
    area.simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("should execute onFocus method", () => {
    area.simulate("focus");
    expect(onFocus).toHaveBeenCalled();
  });
  it("should execute onBlur method", () => {
    area.simulate("focus");
    area.simulate("blur");
    expect(onBlur).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
describe(`Textarea number with error and help`, () => {
  const size = SIZE_OPTIONS.SMALL;
  const resize = RESIZE_OPTIONS.NONE;

  const component = shallow(
    <Textarea
      size={size}
      resize={resize}
      help={<div>Everything is fine.</div>}
      error={<div>Something went wrong.</div>}
    />,
  );

  it("should NOT contain a label", () => {
    expect(component.find("FormLabel").exists()).toBe(false);
  });
  it("should have size prop", () => {
    expect(component.find("Textarea__StyledTextArea").prop("size")).toBe(size);
  });
  it("should have size prop", () => {
    expect(component.find("Textarea__StyledTextArea").prop("resize")).toBe(resize);
  });
  it("should NOT contain FeedBack help", () => {
    expect(component.find(`FormFeedback[type="help"]`).exists()).toBe(false);
  });
  it("should contain FeedBack error", () => {
    expect(component.find(`FormFeedback[type="error"]`).exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
