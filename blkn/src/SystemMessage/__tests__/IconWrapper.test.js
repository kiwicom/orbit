import * as React from "react";
import { shallow } from "enzyme";
import IconWrapper from "../IconWrapper";

describe("System Message", () => {
  const component = shallow(<IconWrapper type="success" Icon="Icon" />);

  it("Should contain Icon", () => {
    expect(component.find("Icon").exists()).toBe(true);
  });
});
