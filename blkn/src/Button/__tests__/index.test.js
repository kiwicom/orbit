import * as React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Button from "../";

Enzyme.configure({ adapter: new Adapter() });

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
    it("Should contain an Icon", () => {
      //   expect(button.find("Icon").exists()).toBe(true);
      expect(button.find("Icon").exists()).toBe(true);
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
