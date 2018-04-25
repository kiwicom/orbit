// @flow
import * as React from "react";
import { mount } from "enzyme";

import Accomodation from "../../icons/Accomodation";
import { iconColors, iconSizes } from "../index";

const size = "large";
const defaultSize = iconSizes.medium;
const color = "attention";
const customColor = "#FF0000";

describe("Icon with color", () => {
  const component = mount(<Accomodation color={color} />);
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
    expect(svg.prop("style")).toEqual({ color: iconColors[color], verticalAlign: "middle" });
  });
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
describe("Icon with props", () => {
  const component = mount(<Accomodation size={size} customColor={customColor} />);
  it("Renders SVG", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
  it("SVG contains default sizing", () => {
    const svg = component.find("svg");
    expect(svg.prop("height")).toBe(iconSizes[size]);
    expect(svg.prop("width")).toBe(iconSizes[size]);
  });
  it("SVG contains default color", () => {
    const svg = component.find("svg");
    expect(svg.prop("style")).toEqual({ color: customColor, verticalAlign: "middle" });
  });
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
