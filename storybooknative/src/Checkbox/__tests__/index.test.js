// @flow

import * as React from "react";
import renderer from "react-test-renderer";

import Checkbox from "../index";

describe("Checkbox", () => {
  const label = "Checkbox";
  const onChange = jest.fn();
  const component = renderer.create(
    <Checkbox onChange={onChange} label={label} hasError checked />,
  );
  const instance = component.root;
  it("should have been pressed", () => {
    expect(onChange).not.toHaveBeenCalled();
    instance.props.onChange();
    expect(onChange).toHaveBeenCalled();
  });
  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  it("should match the snapshot", () => {
    const info = "some info";
    const component2 = renderer.create(
      <Checkbox onChange={onChange} label={label} disabled info={info} />,
    );
    expect(component2.toJSON()).toMatchSnapshot();
  });
});
