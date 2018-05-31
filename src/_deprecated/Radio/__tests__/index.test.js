// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Radio from "../Radio";

describe("Radio", () => {
  const label = "label";
  const component = shallow(<Radio label={label} onChange={jest.fn()} />);

  it("Should contain label", () => {
    expect(
      component
        .find("Typography")
        .render()
        .text(),
    ).toBe(label);
  });
});

describe("When radio is clicked", () => {
  const onChange = jest.fn();
  const label = "label";
  const component = shallow(<Radio label={label} onChange={onChange} />)
    .first()
    .shallow();

  it("should execute onChange method", () => {
    component.find("input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
});
