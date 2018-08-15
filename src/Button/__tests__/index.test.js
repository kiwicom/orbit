// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Button from "../index";
import Airplane from "../../icons/Airplane";
import ChevronDown from "../../icons/ChevronDown";

const children = "button";
const onClick = jest.fn();

describe("Button", () => {
  const component = shallow(
    <Button size="normal" type="secondary" onClick={onClick}>
      {children}
    </Button>,
  );
  const button = component.find("Button__StyledButton");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should execute onClick method", () => {
    button.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
describe("Button with icon", () => {
  const component = shallow(
    <Button size="normal" iconLeft={<Airplane />} iconRight={<ChevronDown />} onClick={onClick}>
      {children}
    </Button>,
  );
  it("should contain icons", () => {
    const button = component.find("Button__StyledButton");
    expect(button.find("Airplane").exists()).toBe(true);
    expect(button.find("ChevronDown").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
