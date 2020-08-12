// @flow

import * as React from "react";
import { shallow } from "enzyme";

import NavigationBar from "../index";

describe("NavigationBar", () => {
  const onMenuOpen = jest.fn();
  const children = "Content";
  const dataTest = "test";
  const component = shallow(
    <NavigationBar onMenuOpen={onMenuOpen} dataTest={dataTest}>
      {children}
    </NavigationBar>,
  );
  const bar = component.find("NavigationBar__StyledNavigationBar");
  const hamburgerMenu = component.find("ButtonLink");
  it("should contain the children", () => {
    expect(bar.render().text()).toBe(children);
  });
  it("should execute onClick callback", () => {
    hamburgerMenu.simulate("click");
    expect(onMenuOpen).toHaveBeenCalled();
  });
  it("should have data-test", () => {
    expect(bar.render().prop("data-test")).toBe(dataTest);
  });
});
