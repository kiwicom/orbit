// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import Heading from "../index";
import { ELEMENT_OPTIONS, TYPE_OPTIONS } from "../consts";
import defaultTheme from "../../defaultTheme";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe("Heading in H2, type Title1, not inverted", () => {
  const as = ELEMENT_OPTIONS.H2;
  const type = TYPE_OPTIONS.TITLE1;
  const children = "My lovely heading";
  const inverted = false;
  const dataTest = "test";
  const id = "id";

  const component = shallow(
    <Heading as={as} type={type} inverted={inverted} dataTest={dataTest} id={id}>
      {children}
    </Heading>,
  );
  it("should contain children", () => {
    expect(component.find("Heading__StyledHeading").render().text()).toBe(children);
  });
  it("should have passed props", () => {
    expect(component.prop("type")).toBe(type);
    expect(component.prop("element")).toBe(as);
    expect(component.prop("inverted")).toBe(inverted);
    expect(component.prop("id")).toBe(id);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it(`should have been rendered in ${type}`, () => {
    expect(component.render().prop("name")).toBe(as);
  });
  it("should have margin-bottom", () => {
    const mounted = mount(<Heading spaceAfter={SPACINGS_AFTER.NORMAL}>{children}</Heading>);
    expect(mounted).toHaveStyleRule("margin-bottom", defaultTheme.orbit.spaceSmall);
  });
});
describe("Heading in DIV, type Title5", () => {
  const as = ELEMENT_OPTIONS.DIV;
  const type = TYPE_OPTIONS.TITLE5;
  const children = "My lovely heading";

  const component = mount(
    <Heading as={as} type={type}>
      {children}
    </Heading>,
  );
  it("should have text-transform uppercase", () => {
    expect(component.render().prop("name")).toBe(as);
    expect(component).toHaveStyleRule("text-transform", "uppercase");
  });
});
