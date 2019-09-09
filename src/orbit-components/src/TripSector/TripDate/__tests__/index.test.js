// @flow
import * as React from "react";
import { shallow } from "enzyme";

import TripDate from "../index";

describe("TripDate", () => {
  const children = "Fri 13 Nov";
  const dataTest = "test";

  const component = shallow(<TripDate dataTest={dataTest}>{children}</TripDate>);

  it("should contain children", () => {
    expect(
      component
        .find("Text")
        .children()
        .text(),
    ).toBe(children);
  });

  it("should contain Calendar icon", () => {
    expect(component.find("Calendar").exists()).toBe(true);
  });

  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
