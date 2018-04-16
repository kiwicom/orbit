// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Button from "../";

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
