// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Handle, { calculateLeftPosition, isFirst } from "../index";

describe("Handle in Slider", () => {
  const onMouseDown = jest.fn();
  const onFocus = jest.fn();
  const onTouchStart = jest.fn();
  const tabIndex = "0";
  const value = [6, 12];
  const min = 1;
  const max = 24;
  const index = 0;
  const hasHistogram = true;
  const ariaLabel = ["Label 1", "Label 2"];
  const ariaValueText = "Lorem ipsum dolor sit amet";
  const component = shallow(
    <Handle
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      onTouchStart={onTouchStart}
      tabIndex={tabIndex}
      value={value}
      valueMin={min}
      valueMax={max}
      index={index}
      onTop={false}
      hasHistogram={hasHistogram}
      ariaLabel={ariaLabel}
      ariaValueText={ariaValueText}
    />,
  );
  const handle = component.find("Handle__StyledHandle");
  it("should execute onMouseDown", () => {
    handle.simulate("mousedown");
    expect(onMouseDown).toHaveBeenCalled();
  });
  it("should execute onFocus", () => {
    handle.simulate("focus");
    expect(onFocus).toHaveBeenCalled();
  });
  it("should execute onTouchStart", () => {
    handle.simulate("touchstart");
    expect(onTouchStart).toHaveBeenCalled();
  });
  it("should have correct left", () => {
    expect(handle.prop("left")).toBe(20.8);
  });
  it("should render aria attributes", () => {
    const renderedHandle = handle.render();
    expect(renderedHandle.prop("role")).toBe("slider");
    expect(renderedHandle.prop("aria-valuemax")).toBe(max.toString());
    expect(renderedHandle.prop("aria-valuemin")).toBe(min.toString());
    expect(renderedHandle.prop("aria-valuenow")).toBe(value[index].toString());
    expect(renderedHandle.prop("aria-label")).toBe(ariaLabel[index]);
    expect(renderedHandle.prop("aria-valuetext")).toBe(ariaValueText);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("Handle in Slider: calculateLeftPosition", () => {
  it("simple Slider without Histogram", () => {
    expect(calculateLeftPosition(1, 1, 24, true, true)).toEqual(0);
    expect(calculateLeftPosition(12, 1, 24, true, true)).toEqual(47.8);
    expect(calculateLeftPosition(12, 1, 24, false, true)).toEqual(50.0);
    expect(calculateLeftPosition(24, 1, 24, false, true)).toEqual(100.0);
  });
  it("simple Slider with Histogram or range Slider", () => {
    expect(calculateLeftPosition(1, 1, 24, true, false)).toEqual(0);
    expect(calculateLeftPosition(12, 1, 24, true, false)).toEqual(45.8);
    expect(calculateLeftPosition(12, 1, 24, false, false)).toEqual(50);
    expect(calculateLeftPosition(24, 1, 24, false, false)).toEqual(100.0);
  });
});

describe("Handle in Slider: isFirst", () => {
  it("simple Slider without Histogram", () => {
    expect(isFirst(1, 1, 0, false)).toBe(true);
    expect(isFirst(1, 12, 0, false)).toBe(true);
  });
  it("simple Slider with Histogram", () => {
    expect(isFirst(1, 1, 0, true)).toBe(false);
    expect(isFirst(1, 12, 0, true)).toBe(false);
  });
  it("range Slider with or without Histogram", () => {
    expect(isFirst([12, 24], 12, 0, false)).toBe(true);
    expect(isFirst([12, 24], 12, 1, true)).toBe(true);
    expect(isFirst([12, 12], 12, 0, true)).toBe(true);
    expect(isFirst([12, 12], 12, 1, false)).toBe(false);
  });
});
