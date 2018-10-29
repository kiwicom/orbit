// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Radio from "../index";

const label = "Radio";
const onChange = jest.fn();
const value = "option";
const dataTest = "test";
const name = "name";

describe(`Default CheckBox`, () => {
  const component = shallow(
    <Radio label={label} onChange={onChange} value={value} dataTest={dataTest} name={name} />,
  );
  it("should contain a label", () => {
    expect(
      component
        .find("Radio__LabelText")
        .render()
        .text(),
    ).toBe(label);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have name", () => {
    expect(
      component
        .find("Radio__Input")
        .render()
        .prop("attribs").name,
    ).toBe(name);
  });
  it("input value should match", () => {
    expect(component.find("Radio__Input").prop("value")).toBe(value);
  });
  it("should execute onChange method", () => {
    component.find("Radio__Input").simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
