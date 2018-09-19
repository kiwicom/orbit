// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Select from "../index";

const mockChange = jest.fn();
const placeholder = "Default placeholder";
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
    <Select value="1" placeholder={placeholder} options={objectOptions} onChange={mockChange} />,
  );

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
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
