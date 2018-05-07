// @flow

import * as React from "react";
import { shallow, mount } from "enzyme";

import Button from "../";
import Airplane from "../../icons/Airplane";

const title = "title";
const onClick = jest.fn();

describe("Button", () => {
  const component = shallow(
    <Button title={title} size="normal" variation="filled" type="secondary" onClick={onClick} />,
  );

  const button = component.find("button");
  it("Should contain a title ", () => {
    expect(button.render().text()).toBe(title);
  });
});

describe("When button is clicked", () => {
  const component = shallow(
    <Button variation="bordered" size="normal" title={title} onClick={onClick} />,
  );
  const button = component.find("button");

  it("Should execute onClick method", () => {
    button.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Button with icon", () => {
  const component = mount(
    <Button variation="link" size="normal" title={title} Icon={Airplane} onClick={onClick} />,
  );
  const button = component.find("button");
  it("Should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(true);
  });
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
