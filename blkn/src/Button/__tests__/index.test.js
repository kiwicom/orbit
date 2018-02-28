import * as React from "react";
import { shallow } from "enzyme";
import Button from "../";

describe("Button", () => {
  const title = "Title";
  let component = shallow(<Button title={title} />);

  it("Should contain a title ", () => {
    const button = component.find("button");
    expect(button.render().text()).toBe(title);
  });

  describe("Rendered with icon", () => {
    const icon = jest.fn();
    component = shallow(<Button title={title} icon={icon} />);
    const button = component.find("button");
    it("Should contain an IconWrapper", () => {
      //   expect(button.find("Icon").exists()).toBe(true);
      expect(button.find("IconWrapper").exists()).toBe(true);
    });
  });

  describe("When button is clicked", () => {
    const onClick = jest.fn();
    component = shallow(<Button title={title} onClick={onClick} />);
    const button = component.find("button");
    beforeEach(() => {
      button.simulate("click");
    });
    it("should execute onClick method", () => {
      expect(onClick).toHaveBeenCalled();
    });
  });
});
