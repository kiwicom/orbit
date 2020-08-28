// @flow
import React from "react";
import { shallow } from "enzyme/build";

import Seat from "../index";
import { SIZE_OPTIONS, TYPES } from "../consts";

describe("Seat", () => {
  const dataTest = "test";
  const component = shallow(
    <Seat type={TYPES.UNAVAILABLE} size={SIZE_OPTIONS.SMALL} dataTest={dataTest} />,
  );
  it("should have data-test rendered", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
});
