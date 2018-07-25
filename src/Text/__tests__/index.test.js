// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Text from "../index";

describe("Text", () => {
  const text = "Children text";
  const component = shallow(
    <Text type="primary" size="small">
      {text}
    </Text>,
  );
  it("should contain children", () => {
    expect(component.children().text()).toBe(text);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
