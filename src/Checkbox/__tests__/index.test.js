// @flow

import * as React from "react";
import { shallow } from "enzyme";

import CheckBox from "../index";

const label = "Checkbox";
const onChange = jest.fn();
const value = "option";
const dataTest = "test";
const tabIndex = "-1";
const name = "name";

describe(`Default CheckBox`, () => {
  const component = shallow(
    <CheckBox
      label={label}
      onChange={onChange}
      value={value}
      dataTest={dataTest}
      name={name}
      tabIndex={tabIndex}
    />,
  );
  const checkbox = component.find("Checkbox__Input");
  it("should contain a label", () => {
    expect(
      component
        .find("Checkbox__LabelText")
        .render()
        .text(),
    ).toBe(label);
  });
  it("inputs value should match", () => {
    expect(checkbox.prop("value")).toBe(value);
  });
  it("should have data-test", () => {
    expect(checkbox.render().prop("data-test")).toBe(dataTest);
  });

  it("should have data-state", () => {
    expect(checkbox.render().prop("data-state")).toBe("ok");
  });

  it("should have tabindex", () => {
    expect(checkbox.render().prop("tabindex")).toBe(tabIndex);
  });

  it("should have name", () => {
    expect(checkbox.render().prop("attribs").name).toBe(name);
  });
  it("should execute onChange method", () => {
    checkbox.simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
});
