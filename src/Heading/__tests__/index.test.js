// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Heading from "../index";

const children = "Children title";

describe("Heading with defaultProps", () => {
  const component = shallow(<Heading>{children}</Heading>);
  it("should contain children", () => {
    expect(
      component
        .find("Heading__StyledHeading")
        .render()
        .text(),
    ).toBe(children);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
