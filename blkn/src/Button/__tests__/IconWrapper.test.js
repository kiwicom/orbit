import * as React from "react";
import { shallow } from "enzyme";
import { Money } from "@kiwicom/icons";
import IconWrapper from "../IconWrapper";

describe("IconWrapper", () => {
  const component = shallow(<IconWrapper icon={Money} />);

  it("should contain component named the same as imported icon", () => {
    expect(component.find("Money").exists()).toBe(true);
  });
});
