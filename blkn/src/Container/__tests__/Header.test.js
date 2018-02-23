// @flow

import * as React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  it("should contain title", () => {
    const title = "Title";
    const component = shallow(<Header title={title} />);
    const typography = component.find("Typography");

    expect(typography).toHaveLength(1);
    expect(typography.children().text()).toBe(title);
  });

  it("should contain title and description", () => {
    const title = "Title";
    const description = "Header description";
    const component = shallow(<Header title={title} description={description} />);
    const typography = component.find("Typography");

    expect(typography).toHaveLength(2);
  });
});
