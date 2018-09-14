// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Text from "../index";

describe("Text", () => {
  const text = "Children text";
  const dataTest = "test";
  const component = shallow(
    <Text type="primary" size="small" dataTest={dataTest}>
      {text}
    </Text>,
  );
  it("should contain children", () => {
    expect(component.children().text()).toBe(text);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
