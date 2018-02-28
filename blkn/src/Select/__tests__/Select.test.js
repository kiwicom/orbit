// @flow

import * as React from "react";
import { shallow } from "enzyme";
import Select from "../";

const objectOptions = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
  { value: "4", label: "Four" },
  { visible: false, value: "hidden-five", label: "Hidden Five" },
  { disabled: true, value: "disabled-six", label: "Disabled Six" },
];

const mockChange = jest.fn();
describe("Select", () => {
  const component = shallow(<Select value="1" options={objectOptions} onChange={mockChange} />);
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("should set component state and run onChange callback", () => {
    component.find("select").simulate("change", { target: { value: objectOptions[0].value } });
    expect(component.state().value).toBe(objectOptions[0].value);
    expect(mockChange.mock.calls.length).toBe(1);
  });
});
