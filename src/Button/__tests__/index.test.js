// @flow

import * as React from "react";
import { shallow, mount } from "enzyme";

import Button from "../";
import Airplane from "../../icons/Airplane";

const children = "button";
const onClick = jest.fn();

describe("Button", () => {
  const component = shallow(
    <Button size="normal" variation="filled" type="secondary" onClick={onClick}>
      {children}
    </Button>,
  );

  const button = component.find("button");
  it("Should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
});

describe("When button is clicked", () => {
  const component = shallow(
    <Button variation="bordered" size="normal" onClick={onClick}>
      {children}
    </Button>,
  );
  const button = component.find("button");

  it("Should execute onClick method", () => {
    button.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Button with icon", () => {
  const component = mount(
    <Button variation="link" size="normal" Icon={Airplane} onClick={onClick}>
      {children}
    </Button>,
  );
  const button = component.find("button");
  it("Should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(true);
  });
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
