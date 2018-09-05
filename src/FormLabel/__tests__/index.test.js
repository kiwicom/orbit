// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormLabel from "../index";

describe("FormLabel", () => {
  const component = shallow(<FormLabel filled={false}>FormLabel</FormLabel>);

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
