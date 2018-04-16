// @flow

import * as React from "react";
import { shallow } from "enzyme";

import { Icons } from "../../";
import IconWrapper from "../IconWrapper";

const { Money } = Icons;

describe("IconWrapper", () => {
  const component = shallow(<IconWrapper size="normal" type="primary" Icon={Money} />);

  it("should contain component named the same as imported icon", () => {
    expect(component.find("Money").exists()).toBe(true);
  });
});
