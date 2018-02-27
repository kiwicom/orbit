import * as React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Icon from "../Icon";
import Adapter from "enzyme-adapter-react-16";
import { Money } from "@kiwicom/icons";

Enzyme.configure({ adapter: new Adapter() });

describe("Icon", () => {
  //   const icon = jest.fn();
  const component = mount(<Icon icon={Money} />);

  it("should be moiunted with svg element", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
});
