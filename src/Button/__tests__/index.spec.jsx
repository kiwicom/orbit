import * as React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import Button from "../";

describe("#Button", () => {
  test("render", () => {
    const wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveStyleRule("background-color", "dodgerblue");
  });
});
