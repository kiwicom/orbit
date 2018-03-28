// @flow

import * as React from "react";
import { shallow } from "enzyme";

import { RawComponent } from "../ThemedSample";
// import defaultTheme from "../defaultTheme";

describe("RawComponent", () => {
  const component = shallow(<RawComponent />);
  const div = component.find("div");

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("Should contain a correct style", () => {
    expect(div.render().attr("style")).toBe("color:blue;font-family:Courier");
    // expect(div.render().attr("style").fontFamily).toBe(defaultTheme.fontFamily);
  });

  it("Should contain a color", () => {
    expect(div.render().text()).toBe("blue");
  });
});
