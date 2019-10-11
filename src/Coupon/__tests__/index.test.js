// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Coupon from "../index";

describe("Coupon", () => {
  const dataTest = "test";
  const children = "code";
  const component = shallow(<Coupon dataTest={dataTest}>{children}</Coupon>);
  it("should have props", () => {
    expect(component.prop("data-test")).toBe(dataTest);
    expect(component.children().text()).toBe(children);
  });
});
