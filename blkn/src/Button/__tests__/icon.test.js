import * as React from "react";
import { shallow } from "enzyme";
import { Money } from "@kiwicom/icons";
import IconWrapper from "../IconWrapper";

describe("Icon", () => {
  const component = shallow(<IconWrapper icon={Money} />);

  it("should be moiunted with svg element", () => {
    expect(component.find("svg").exists()).toBe(true);
  });
});
