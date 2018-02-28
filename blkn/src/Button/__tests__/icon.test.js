import * as React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Money } from "@kiwicom/icons";
import Icon from "../Icon";

Enzyme.configure({ adapter: new Adapter() });

describe("Icon", () => {
  //   const icon = jest.fn();
  const component = mount(<Icon icon={Money} />);

  it("should be moiunted with svg element", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
});
