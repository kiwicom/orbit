// @flow

import * as React from "react";
import { shallow } from "enzyme";

import NavigationListItem from "../index";
import Airplane from "../../../icons/Airplane";

describe("NavigationListItem horizontal", () => {
  const onClick = jest.fn();
  const children = "Content";
  const dataTest = "test";
  const tabIndex = "0";
  const ariaLabel = "some label";
  const selectable = true;
  const selected = true;
  const component = shallow(
    <NavigationListItem
      onClick={onClick}
      icon={<Airplane />}
      tabIndex={tabIndex}
      ariaLabel={ariaLabel}
      selectable={selectable}
      selected={selected}
      dataTest={dataTest}
    >
      {children}
    </NavigationListItem>,
  );
  const listItem = component.find("NavigationListItem__StyledNavigationListItem");
  const icon = component.find("NavigationListItem__StyledNavigationListItemIcon");
  const content = component.find("NavigationListItem__StyledNavigationListItemContent");
  it("should contain the children", () => {
    expect(content.render().text()).toBe(children);
  });
  it("should contain the icon", () => {
    expect(icon.find("Airplane").exists()).toBe(true);
  });
  it("should execute onClick callback", () => {
    listItem.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("should have data-test", () => {
    expect(listItem.render().prop("data-test")).toBe(dataTest);
  });
  it("should have aria-label", () => {
    expect(listItem.render().prop("aria-label")).toBe(ariaLabel);
  });
  it("should have data-test", () => {
    expect(listItem.render().prop("tabindex")).toBe(tabIndex);
  });
});
