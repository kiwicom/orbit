// @flow

import * as React from "react";
import { shallow } from "enzyme";
import tokens from "@kiwicom/orbit-design-tokens";

import { RawComponent } from "../ThemedSample";

describe("RawComponent", () => {
  const component = shallow(<RawComponent />);
  const div = component.find("div");

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should contain a default style", () => {
    const expected = `color:${tokens.colorTextPrimary};font-family:${
      tokens.fontFamily
    };line-height:${tokens.lineHeightText}`;
    expect(div.render().attr("style")).toBe(expected);
  });

  it("Should contain a colorTextPrimary value", () => {
    expect(div.render().text()).toContain(tokens.colorTextPrimary);
  });

  it("Should contain a fontFamily value", () => {
    expect(div.render().text()).toContain(tokens.fontFamily);
  });

  it("Should contain a lineHeightText value", () => {
    expect(div.render().text()).toContain(tokens.lineHeightText);
  });
});
