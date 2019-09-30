// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Button from "../index";
import Airplane from "../../icons/Airplane";
import ChevronDown from "../../icons/ChevronDown";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

const children = "button";
const onClick = jest.fn();

describe("Button", () => {
  const submit = true;
  const ref = React.createRef();
  const spaceAfter = SPACINGS_AFTER.NORMAL;
  const component = shallow(
    <Button
      size="normal"
      type="secondary"
      onClick={onClick}
      submit={submit}
      ref={ref}
      spaceAfter={spaceAfter}
    >
      {children}
    </Button>,
  );
  const button = component.find("Button__StyledButton");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should have type submit", () => {
    expect(button.prop("submit")).toBe(submit);
  });
  it("should have spaceAfter", () => {
    expect(button.prop("spaceAfter")).toBe(spaceAfter);
  });
  it("should execute onClick method", () => {
    button.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("should have ref", () => {
    expect(ref.current).toBeDefined();
  });
});
describe("Button with icon", () => {
  const dataTest = "test";
  const tabIndex = "-1";
  const href = "https://kiwi.com";
  const ariaExpanded = true;
  const ariaControls = "element";
  const role = "button";
  const title = "With left and right icon";
  const ariaLabelledBy = "my-aria-span";
  const component = shallow(
    <Button
      size="normal"
      iconLeft={<Airplane />}
      iconRight={<ChevronDown />}
      onClick={onClick}
      dataTest={dataTest}
      external
      tabIndex={tabIndex}
      href={href}
      ariaExpanded={ariaExpanded}
      ariaControls={ariaControls}
      role={role}
      title={title}
      ariaLabelledBy={ariaLabelledBy}
    >
      {children}
    </Button>,
  );
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have rel attribute", () => {
    expect(component.render().prop("rel")).toBe("noopener noreferrer");
  });
  it("should have tabindex", () => {
    expect(component.render().prop("tabindex")).toBe(tabIndex);
  });
  it("should have href", () => {
    expect(component.render().prop("href")).toBe(href);
  });
  it("should have aria attributes", () => {
    expect(component.render().prop("aria-controls")).toBe(ariaControls);
    expect(component.render().prop("aria-expanded")).toBe(String(ariaExpanded));
    expect(component.render().prop("aria-label")).toBe(title);
    expect(component.render().prop("aria-labelledby")).toBe(ariaLabelledBy);
  });
  it("should have role", () => {
    expect(component.render().prop("role")).toBe(role);
  });
  it("should contain icons", () => {
    const button = component.find("Button__StyledButton");
    expect(button.find("Airplane").exists()).toBe(true);
    expect(button.find("ChevronDown").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
