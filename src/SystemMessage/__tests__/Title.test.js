// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Title from "../Title";

describe("System Message", () => {
  const component = shallow(<Title type="success">title</Title>);

  it("Should contain h4 with title", () => {
    const title = "title";
    expect(component.find("h4").text()).toBe(title);
  });
});
