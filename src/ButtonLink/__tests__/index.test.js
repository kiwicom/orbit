// @flow

import * as React from "react";
import { mount } from "enzyme";

import ButtonLink from "../index";
import Airplane from "../../icons/Airplane";
import ChevronDown from "../../icons/ChevronDown";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

const children = "ButtonLink";
const href = "https://kiwi.com";

describe("ButtonLink with Icon", () => {
  const dataTest = "test";
  const tabIndex = "-1";
  const submit = true;
  const ref = React.createRef();
  const ariaExpanded = true;
  const ariaControls = "element";
  const role = "button";
  const spaceAfter = SPACINGS_AFTER.NORMAL;
  const component = mount(
    <ButtonLink
      href={href}
      external
      dataTest={dataTest}
      submit={submit}
      tabIndex={tabIndex}
      ref={ref}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      spaceAfter={spaceAfter}
      role={role}
    >
      {children}
    </ButtonLink>,
  );
  const button = component.find("ButtonLink__StyledButtonLink");
  it("should have data-test", () => {
    expect(button.render().prop("data-test")).toBe(dataTest);
  });
  it("should have rel attribute", () => {
    expect(button.render().prop("rel")).toBe("noopener noreferrer");
  });
  it("should have tabindex", () => {
    expect(component.render().prop("tabindex")).toBe(tabIndex);
  });
  it("should have type submit", () => {
    expect(button.prop("submit")).toBe(submit);
  });
  it("should have spaceAfter", () => {
    expect(button.prop("spaceAfter")).toBe(spaceAfter);
  });
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(false);
  });
  it("should have ref", () => {
    expect(ref.current).toBeDefined();
  });
  it("should have aria attributes", () => {
    expect(component.render().prop("aria-controls")).toBe(ariaControls);
    expect(component.render().prop("aria-expanded")).toBe(String(ariaExpanded));
  });
  it("should be external", () => {
    expect(button.prop("target")).toBe("_blank");
  });
  it("should be role", () => {
    expect(button.prop("role")).toBe(role);
  });
});

describe("ButtonLink with Icon", () => {
  const title = "With left and right icon";
  const ariaExpanded = true;
  const ariaControls = "element";
  const component = mount(
    <ButtonLink
      iconLeft={<Airplane />}
      iconRight={<ChevronDown />}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      href={href}
      title={title}
    >
      {children}
    </ButtonLink>,
  );
  const button = component.find("ButtonLink__StyledButtonLink");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should have href", () => {
    expect(button.render().prop("href")).toBe(href);
  });
  it("should have aria attributes", () => {
    expect(component.render().prop("aria-controls")).toBe(ariaControls);
    expect(component.render().prop("aria-expanded")).toBe(String(ariaExpanded));
    expect(component.render().prop("aria-label")).toBe(title);
  });
  it("should contain icons", () => {
    expect(button.find("Airplane").exists()).toBe(true);
    expect(button.find("ChevronDown").exists()).toBe(true);
  });
});
