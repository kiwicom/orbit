// @flow

import * as React from "react";
import { shallow } from "enzyme";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { RawComponent } from "../ThemedSample";

describe("RawComponent", () => {
  const component = shallow(<RawComponent />);
  const style = component.prop("style");
  const div = component.find("div");

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should contain a default style", () => {
    expect(style.color).toBe(defaultTokens.colorTextPrimary);
    expect(style.fontFamily).toBe(defaultTokens.fontFamily);
    expect(style.lineHeight).toBe(defaultTokens.lineHeightText);
  });

  it("Should contain a colorTextPrimary value", () => {
    expect(div.render().text()).toContain(defaultTokens.colorTextPrimary);
  });

  it("Should contain a fontFamily value", () => {
    expect(div.render().text()).toContain(defaultTokens.fontFamily);
  });

  it("Should contain a lineHeightText value", () => {
    expect(div.render().text()).toContain(defaultTokens.lineHeightText);
  });
});
