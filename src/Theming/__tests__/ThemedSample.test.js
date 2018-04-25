// @flow

import * as React from "react";
import { shallow } from "enzyme";
import defaultTheme from "@kiwicom/orbit-design-tokens";

import { RawComponent } from "../ThemedSample";

describe("RawComponent", () => {
  const component = shallow(<RawComponent />);
  const div = component.find("div");

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should contain a default style", () => {
    const expected = `color:${defaultTheme.colorTextPrimary};font-family:${
      defaultTheme.fontFamily
    }`;
    expect(div.render().attr("style")).toBe(expected);
  });

  it("Should contain a color", () => {
    expect(div.render().text()).toBe(defaultTheme.colorTextPrimary);
  });
});
