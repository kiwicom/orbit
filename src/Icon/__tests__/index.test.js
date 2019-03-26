// @flow
import * as React from "react";
import { mount } from "enzyme";

import Accommodation from "../../icons/Accommodation";
import { ICON_SIZES, ICON_COLORS } from "../consts";
import defaultTheme from "../../defaultTheme";

describe("Icon", () => {
  const color = ICON_COLORS.ATTENTION;
  const component = mount(<Accommodation color={color} />);
  const svg = component.find("svg");
  it("should render SVG", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
  it("should have default sizing", () => {
    expect(svg).toHaveStyleRule("height", defaultTheme.orbit.widthIconMedium);
    expect(svg).toHaveStyleRule("width", defaultTheme.orbit.widthIconMedium);
  });
  it("should have selected color", () => {
    expect(svg).toHaveStyleRule("color", defaultTheme.orbit.colorIconAttention);
  });
  it("should have CSS properties", () => {
    expect(svg).toHaveStyleRule("vertical-align", "middle");
    expect(svg).toHaveStyleRule("fill", "currentColor");
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("Icon with custom props", () => {
  const dataTest = "test";
  const size = ICON_SIZES.LARGE;
  const customColor = "#FF0000";
  const component = mount(
    <Accommodation size={size} customColor={customColor} dataTest={dataTest} />,
  );
  const svg = component.find("svg");
  it("should render SVG", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
  it("should render data-test", () => {
    expect(svg.render().prop("data-test")).toBe(dataTest);
  });
  it("should have default sizing", () => {
    expect(svg).toHaveStyleRule("height", defaultTheme.orbit.widthIconLarge);
    expect(svg).toHaveStyleRule("width", defaultTheme.orbit.widthIconLarge);
  });
  it("should have selected color", () => {
    expect(svg).toHaveStyleRule("color", customColor);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
