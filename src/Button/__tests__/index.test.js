// @flow

import * as React from "react";
import { shallow, mount } from "enzyme";

import Button from "../";
import Text from "../../Text";
import Airplane from "../../icons/Airplane";

describe("Button", () => {
  const title = "Title";
  const component = shallow(
    <Button title={title} size="normal" type="filled" theme="secondary" onClick={jest.fn()} />,
  );

  const button = component.find("button");
  it("Should contain a title ", () => {
    expect(button.render().text()).toBe(title);
  });
});

describe("When button is clicked", () => {
  const onClick = jest.fn();
  const title = "title";
  const component = shallow(
    <Button type="bordered" size="normal" title={title} onClick={onClick} />,
  );
  const button = component.find("button");

  it("should execute onClick method", () => {
    button.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Rendered with icon", () => {
  const title = "title";
  const component = mount(
    <Button type="link" size="normal" title={title} Icon={Airplane} onClick={jest.fn()} />,
  );
  const button = component.find("button");
  it("Should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(true);
  });
});

describe("Rendered with children", () => {
  const component = shallow(
    <Button type="bordered" theme="primary" onClick={jest.fn()} size="large">
      <Text type="primary" variant="bold">
        Typo children
      </Text>
      <Airplane fill="#F2473F" size="32" />
    </Button>,
  );
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
