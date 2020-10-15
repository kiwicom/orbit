// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Textarea from "../index";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "../consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe(`Textarea with help`, () => {
  const size = SIZE_OPTIONS.NORMAL;
  const name = "name";
  const label = "Label";
  const value = "value";
  const placeholder = "placeholder";
  const tabIndex = "-1";
  const dataTest = "test";
  const maxLength = 200;
  const fullHeight = true;
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const spaceAfter = SPACINGS_AFTER.NORMAL;

  const component = shallow(
    <Textarea
      size={size}
      name={name}
      label={label}
      value={value}
      fullHeight={fullHeight}
      placeholder={placeholder}
      maxLength={maxLength}
      help={<div>Something useful.</div>}
      tabIndex={tabIndex}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    />,
  );

  const area = component.find("Textarea__StyledTextArea");
  const field = component.find("Textarea__Field");

  it("should contain a label", () => {
    expect(component.find("FormLabel").render().text()).toBe(label);
  });
  it("should contain a textarea", () => {
    expect(area.exists()).toBe(true);
  });
  it("should have passed props", () => {
    expect(area.prop("size")).toBe(size);
    expect(field.prop("spaceAfter")).toBe(spaceAfter);
    expect(area.prop("name")).toBe(name);
    expect(area.prop("value")).toBe(value);
    expect(area.prop("placeholder")).toBe(placeholder);
    expect(area.prop("maxLength")).toBe(maxLength);
    expect(area.prop("fullHeight")).toBe(fullHeight);
    expect(area.render().prop("data-test")).toBe(dataTest);
    expect(area.render().prop("tabindex")).toBe(tabIndex);
    expect(component.find("Textarea__StyledTextArea").render().prop("attribs").name).toBe(name);
  });
  it("should contain FeedBack", () => {
    expect(component.find(`FormFeedback`).exists()).toBe(true);
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
  it("should have resize prop", () => {
    expect(component.find("Textarea__StyledTextArea").prop("resize")).toBe(resize);
  });
  it("renders FormFeedback", () => {
    expect(component.find(`FormFeedback`).exists()).toBe(true);
  });
});
