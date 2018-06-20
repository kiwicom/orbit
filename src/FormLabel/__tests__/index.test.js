// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormLabel from "../FormLabel";

describe("FormLabel", () => {
  const component = shallow(<FormLabel>FormLabel</FormLabel>);

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
