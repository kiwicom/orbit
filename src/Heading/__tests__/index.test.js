// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Heading from "../index";
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "../consts";

describe("Heading in H2, type Title1, not inverted", () => {
  const element = ELEMENT_OPTIONS.H2;
  const type = TYPE_OPTIONS.TITLE1;
  const children = "My lovely heading";
  const inverted = false;

  const component = shallow(
    <Heading element={element} type={type} inverted={inverted}>
      {children}
    </Heading>,
  );
  it("should contain children", () => {
    expect(
      component
        .find("Heading__StyledHeading")
        .render()
        .text(),
    ).toBe(children);
  });
  it("should have passed props", () => {
    expect(component.prop("type")).toBe(type);
    expect(component.prop("element")).toBe(element);
    expect(component.prop("inverted")).toBe(inverted);
  });
  it(`should have been rendered in ${type}`, () => {
    expect(component.render().prop("name")).toBe(element);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
