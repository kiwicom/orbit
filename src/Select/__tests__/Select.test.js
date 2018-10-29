// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Select from "../index";

const mockChange = jest.fn();
const placeholder = "Default placeholder";
const dataTest = "test";
const name = "name";
const objectOptions = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
  { value: "4", label: "Four" },
  { value: "hidden-five", label: "Hidden Five" },
  { disabled: true, value: "disabled-six", label: "Disabled Six" },
];

describe("Select", () => {
  const component = shallow(
    <Select
      value="1"
      name={name}
      placeholder={placeholder}
      options={objectOptions}
      onChange={mockChange}
      dataTest={dataTest}
    />,
  );
  it("should have data-test", () => {
    expect(component.prop("data-test")).toBe(dataTest);
  });
  it("should have name", () => {
    expect(
      component
        .find("Select__StyledSelect")
        .render()
        .prop("attribs").name,
    ).toBe(name);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });

  it("should have placeholder", () => {
    expect(
      component
        .find("Select__StyledSelect")
        .childAt(0)
        .text(),
    ).toBe(placeholder);
  });
});
