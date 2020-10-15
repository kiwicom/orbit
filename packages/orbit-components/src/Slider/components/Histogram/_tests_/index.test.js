// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Histogram from "../index";

describe("Histogram in Slider", () => {
  const data = [11, 25, 37, 2];
  const component = shallow(<Histogram data={data} value={2} min={1} step={1} />);
  it("should have four columns", () => {
    const dataHeight = [29.7, 67.6, 100, 5.4];
    const dataActive = [true, true, false, false];
    const children = component
      .find("Histogram__StyledHistogram")
      .find("Histogram__StyledHistogramColumn");
    children.forEach((node, index) => {
      expect(node.prop("height")).toBe(dataHeight[index]);
      expect(node.prop("active")).toBe(dataActive[index]);
    });
  });
  it("should have four columns (value: [3, 4])", () => {
    component.setProps({ value: [3, 4] });
    const dataActive = [false, false, true, true];
    const children = component
      .find("Histogram__StyledHistogram")
      .find("Histogram__StyledHistogramColumn");
    children.forEach((node, index) => {
      expect(node.prop("active")).toBe(dataActive[index]);
    });
  });
  it("should render loading", () => {
    component.setProps({ data: undefined, loading: true, loadingText: "Loading..." });
    expect(component.find("Histogram__StyledLoadingContainer").find("Loading").exists()).toBe(true);
  });
});
