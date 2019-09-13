// @flow

import * as React from "react";
import { shallow } from "enzyme";

import NavigationList from "../index";

describe("NavigationList", () => {
  const children = "Content";
  const dataTest = "test";
  const title = "Hello World";
  const component = shallow(
    <NavigationList title={title} dataTest={dataTest}>
      {children}
    </NavigationList>,
  );
  const groupTitle = component.find("NavigationList__StyledNavigationListTitle");
  const content = component.find("NavigationList__StyledNavigationListChild");
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
