// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Text from "../";

describe("Rendered with children", () => {
  it("Should contain text", () => {
    const text = "Children text";
    const component = shallow(
      <Text type="primary" size="small">
        {text}
      </Text>,
    );
    expect(component).toMatchSnapshot();
  });
});
