// @flow

import * as React from "react";
import { shallow } from "enzyme";

import NavigationBar from "../index";

describe("NavigationBar", () => {
  const onOpen = jest.fn();
  const children = "Content";
  const dataTest = "test";
  const component = shallow(
    <NavigationBar onOpen={onOpen} dataTest={dataTest}>
      {children}
    </NavigationBar>,
  );
  const bar = component.find("NavigationBar__StyledNavigationBar");
  const hamburgerMenu = component.find("NavigationLink");
  it("should contain the children", () => {
    expect(bar.render().text()).toBe(children);
  });
  it("should execute onClick callback", () => {
    hamburgerMenu.simulate("click");
    expect(onOpen).toHaveBeenCalled();
  });
  it("should have data-test", () => {
    expect(bar.render().prop("data-test")).toBe(dataTest);
  });
});
