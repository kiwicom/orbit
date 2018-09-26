// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Illustration from "../index";
import { SIZE_OPTIONS } from "../consts";

const size = SIZE_OPTIONS.SMALL;
const name = "Accommodation";
const dataTest = "test";

describe(`Illustration of ${name}`, () => {
  const component = shallow(<Illustration size={size} name={name} dataTest={dataTest} />);
  it("should have passed props", () => {
    expect(component.prop("size")).toBe(size);
    expect(component.prop("src")).toContain(name);
    expect(component.prop("srcSet")).toContain(name);
    expect(component.prop("alt")).toBe(name);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
