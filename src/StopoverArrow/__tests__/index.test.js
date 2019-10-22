// @flow
import * as React from "react";
import { mount } from "enzyme";

import StopoverArrow from "../index";
import STOPS from "../consts";
import defaultTheme from "../../defaultTheme";

describe("StopoverArrow", () => {
  const stops = STOPS.THREE;
  const dataTest = "test";
  const component = mount(<StopoverArrow stops={stops} dataTest={dataTest} />);

  it("should have passed props", () => {
    expect(component.find("Stops").prop("stops")).toBe(stops);
    expect(component.render().prop("preserveAspectRatio")).toBe("xMidYMid meet");
    expect(component.render().prop("viewBox")).toBe("0 0 36 7");
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have styles", () => {
    expect(component).toHaveStyleRule("color", defaultTheme.orbit.paletteInkLight);
  });
});
