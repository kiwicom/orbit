// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Heading from "../";

describe("Rendered with children", () => {
  it("Should contain title", () => {
    const title = "Children title";
    const component = shallow(<Heading>{title}</Heading>);
    expect(component).toMatchSnapshot();
  });
});
