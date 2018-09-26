// @flow
import * as React from "react";
import { mount } from "enzyme";

import Accommodation from "../../icons/Accommodation";
import { ICON_SIZES, ICON_COLORS } from "../consts";

const size = "large";
const defaultSize = ICON_SIZES.medium;
const color = "attention";
const customColor = "#FF0000";

describe("Icon with color", () => {
  const component = mount(<Accommodation color={color} />);
  it("Renders SVG", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
  it("SVG contains default sizing", () => {
    const svg = component.find("svg");
    expect(svg.prop("height")).toBe(defaultSize);
    expect(svg.prop("width")).toBe(defaultSize);
  });
  it("SVG contains a color", () => {
    const svg = component.find("svg");
    expect(svg.prop("style")).toEqual({ color: ICON_COLORS[color], verticalAlign: "middle" });
  });
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
describe("Icon with props", () => {
  const dataTest = "test";
  const component = mount(
    <Accommodation size={size} customColor={customColor} dataTest={dataTest} />,
  );
  it("Renders SVG", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
  it("SVG contains default sizing", () => {
    const svg = component.find("svg");
    expect(svg.prop("height")).toBe(ICON_SIZES[size]);
    expect(svg.prop("width")).toBe(ICON_SIZES[size]);
    expect(svg.render().prop("data-test")).toBe(dataTest);
  });
  it("SVG contains default color", () => {
    const svg = component.find("svg");
    expect(svg.prop("style")).toEqual({ color: customColor, verticalAlign: "middle" });
  });
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
