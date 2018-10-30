// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Button from "../index";
import Airplane from "../../icons/Airplane";
import ChevronDown from "../../icons/ChevronDown";

const children = "button";
const onClick = jest.fn();

describe("Button", () => {
  const submit = true;
  const component = shallow(
    <Button size="normal" type="secondary" onClick={onClick} submit={submit}>
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
  it("should execute onClick method", () => {
    button.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
describe("Button with icon", () => {
  const dataTest = "test";
  const href = "https://kiwi.com";
  const component = shallow(
    <Button
      size="normal"
      iconLeft={<Airplane />}
      iconRight={<ChevronDown />}
      onClick={onClick}
      dataTest={dataTest}
      href={href}
    >
      {children}
    </Button>,
  );
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have href", () => {
    expect(component.render().prop("href")).toBe(href);
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
