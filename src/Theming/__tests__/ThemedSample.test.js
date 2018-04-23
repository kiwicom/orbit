// @flow

import * as React from "react";
import { shallow } from "enzyme";
import * as tokens from "@kiwicom/orbit-design-tokens";

import { RawComponent } from "../ThemedSample";

describe("RawComponent", () => {
  const component = shallow(<RawComponent />);
  const div = component.find("div");

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should contain a default style", () => {
    const expected = `color:${tokens.colorTextPrimary};font-family:${tokens.fontFamily}`;
    expect(div.render().attr("style")).toBe(expected);
  });

  it("Should contain a color", () => {
    expect(div.render().text()).toBe(tokens.colorTextPrimary);
  });
});
