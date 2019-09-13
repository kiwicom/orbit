// @flow

import * as React from "react";
import { shallow } from "enzyme";

import NavigationLink from "../index";
import Airplane from "../../icons/Airplane";

describe("NavigationLink horizontal", () => {
  const onClick = jest.fn();
  const children = "Content";
  const dataTest = "test";
  const tabIndex = "0";
  const ariaLabel = "some label";
  const selectable = true;
  const selected = true;
  const component = shallow(
    <NavigationLink
      onClick={onClick}
      icon={<Airplane />}
      tabIndex={tabIndex}
      ariaLabel={ariaLabel}
      selectable={selectable}
      selected={selected}
      dataTest={dataTest}
    >
      {children}
    </NavigationLink>,
  );
  const navigationLink = component.find("NavigationLink__StyledNavigationLink");
  const icon = component.find("NavigationLink__StyledNavigationLinkIcon");
  const content = component.find("NavigationLink__StyledNavigationLinkContent");
  it("should contain the children", () => {
    expect(content.render().text()).toBe(children);
  });
  it("should contain the icon", () => {
    expect(icon.find("Airplane").exists()).toBe(true);
  });
  it("should execute onClick callback", () => {
    navigationLink.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("should have data-test", () => {
    expect(navigationLink.render().prop("data-test")).toBe(dataTest);
  });
  it("should have aria-label", () => {
    expect(navigationLink.render().prop("aria-label")).toBe(ariaLabel);
  });
  it("should have data-test", () => {
    expect(navigationLink.render().prop("tabindex")).toBe(tabIndex);
  });
});
