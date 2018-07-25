// @flow

import * as React from "react";
import { shallow } from "enzyme";

import CheckBox from "../index";

const label = "Checkbox";
const onChange = jest.fn();
const value = "option";

describe(`Default CheckBox`, () => {
  const component = shallow(<CheckBox label={label} onChange={onChange} value={value} />);
  it("should contain a label", () => {
    expect(
      component
        .find("Checkbox__LabelText")
        .render()
        .text(),
    ).toBe(label);
  });
  it("inputs value should match", () => {
    expect(component.find("Checkbox__Input").prop("value")).toBe(value);
  });
  it("should execute onChange method", () => {
    component.find("Checkbox__Input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
