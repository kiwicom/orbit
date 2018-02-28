import * as React from "react";
import { shallow } from "enzyme";
import { Money } from "@kiwicom/icons";
import Icon from "../Icon";

describe("Icon", () => {
  const component = shallow(<Icon icon={Money} />);

  it("should be moiunted with svg element", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
});
