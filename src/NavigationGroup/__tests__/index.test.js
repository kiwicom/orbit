// @flow

import * as React from "react";
import { shallow } from "enzyme";

import NavigationGroup from "../index";

describe("NavigationGroup", () => {
  const children = "Content";
  const dataTest = "test";
  const title = "Hello World";
  const component = shallow(
    <NavigationGroup title={title} dataTest={dataTest}>
      {children}
    </NavigationGroup>,
  );
  const groupTitle = component.find("NavigationGroup__StyledNavigationGroupTitle");
  const content = component.find("NavigationGroup__StyledNavigationGroupChild");
  it("should contain the children", () => {
    expect(content.render().text()).toBe(children);
  });
  it("should contain the title", () => {
    expect(groupTitle.render().text()).toBe(title);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
});
