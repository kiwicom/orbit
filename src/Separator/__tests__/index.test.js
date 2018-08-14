// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Separator from "../index";

describe("Separator", () => {
  it("should match snapshot", () => {
    const component = shallow(<Separator />);
    expect(component).toMatchSnapshot();
  });
});
