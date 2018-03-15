// @flow

import * as React from "react";
import { shallow } from "enzyme";
import Button from "../";
import { Typography } from "../../";
import Airplane from "../../icons/Airplane";

describe("Button", () => {
  const title = "Title";
  const component = shallow(
    <Button title={title} size="normal" type="primary" onClick={jest.fn()} />,
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
    <Button type="primary" size="normal" title={title} onClick={onClick} />,
  );
  const button = component.find("button");

  it("should execute onClick method", () => {
    button.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Rendered with icon", () => {
  const title = "title";
  const icon = () => <i />;
  const component = shallow(
    <Button type="primary" size="normal" title={title} Icon={icon} onClick={jest.fn()} />,
  );
  const button = component.find("button");
  it("Should contain IconWrapper", () => {
    expect(button.find("IconWrapper").exists()).toBe(true);
  });
});

describe("Rendered with children", () => {
  const component = shallow(
    <Button type="primary" onClick={jest.fn()} size="large">
      <Typography type="primary" variant="bold">
        Typo children
      </Typography>
      <Airplane fill="#F2473F" size="32" />
    </Button>,
  );
  it("Should contain IconWrapper", () => {
    expect(component).toMatchSnapshot();
  });
});
