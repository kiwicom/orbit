import * as React from "react";
import { shallow } from "enzyme";
import Button from "../";

describe("Button", () => {
  const title = "Title";
  const component = shallow(<Button title={title} />);
  const button = component.find("button");
  it("Should contain a title ", () => {
    expect(button.render().text()).toBe(title);
  });
});

describe("When button is clicked", () => {
  const onClick = jest.fn();
  const title = "title";
  const component = shallow(<Button title={title} onClick={onClick} />);
  const button = component.find("button");
<<<<<<< HEAD
  beforeEach(() => {
    button.simulate("click");
  });
  it("should execute onClick method", () => {
=======

  it("should execute onClick method", () => {
    button.simulate("click");
>>>>>>> 2464380... test cleared
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Rendered with icon", () => {
  const title = "title";
  const icon = jest.fn();
  const component = shallow(<Button title={title} icon={icon} />);
  const button = component.find("button");
  it("Should contain IconWrapper", () => {
    expect(button.find("IconWrapper").exists()).toBe(true);
  });
});
