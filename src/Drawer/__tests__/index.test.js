// @flow
import * as React from "react";
import { mount } from "enzyme";

import Drawer from "../index";
import LinkList from "../../LinkList";
import TextLink from "../../TextLink";

describe("Drawer", () => {
  const dataTest = "test";
  const onClose = jest.fn();
  const shown = true;
  const width = "400px";
  const component = mount(
    <Drawer dataTest={dataTest} onClose={onClose} shown={shown} width={width}>
      <LinkList>
        <TextLink onClick={jest.fn()}>Hello world!</TextLink>
      </LinkList>
    </Drawer>,
  );
  const wrapper = component.find("Drawer__StyledDrawer");
  const side = component.find("Drawer__StyledDrawerSide");
  it("should not execute onClose method", () => {
    const link = side.find("LinkList");
    link.simulate("click");
    expect(onClose).not.toHaveBeenCalled();
  });
  it("should execute onClose method", () => {
    wrapper.simulate("click");
    expect(onClose).toHaveBeenCalled();
  });
  it("should have data-test", () => {
    expect(wrapper.render().prop("data-test")).toBe(dataTest);
  });
  it("the overlay and side content should be hidden", () => {
    component.setProps({ shown: false });
    expect(wrapper.render().prop("aria-hidden")).toBe("true");
    setTimeout(() => {
      expect(side).toHaveStyleRule("transform", `translate3d(${width},0,0)`);
      expect(wrapper).toHaveStyleRule("visibility", "hidden");
      expect(wrapper).toHaveStyleRule("background-color", "transparent");
    }, 200);
  });
  it("the overlay and side content should be visible once more", () => {
    component.setProps({ shown: true });
    expect(side).toHaveStyleRule("transform", `translate3d(0,0,0)`);
    expect(wrapper).toHaveStyleRule("visibility", "visible");
    expect(wrapper.render().prop("aria-hidden")).toBe("false");
  });
});
