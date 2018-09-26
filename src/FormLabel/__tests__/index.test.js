// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormLabel from "../index";

describe("FormLabel", () => {
  const dataTest = "test";
  const component = shallow(
    <FormLabel filled={false} dataTest={dataTest}>
      FormLabel
    </FormLabel>,
  );

  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
