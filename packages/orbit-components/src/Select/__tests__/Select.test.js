// @flow

import * as React from "react";
import { shallow, mount } from "enzyme";

import Select from "../index";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

const mockChange = jest.fn();
const placeholder = "Default placeholder";
const dataTest = "test";
const tabIndex = "-1";
const name = "name";
const id = "test-id";
const objectOptions = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
  { value: "4", label: "Four" },
  { value: "hidden-five", label: "Hidden Five" },
  { disabled: true, value: "disabled-six", label: "Disabled Six" },
];
const spaceAfter = SPACINGS_AFTER.NORMAL;
const dataAttrs = {
  "data-recording-ignore": true,
};

describe("Select", () => {
  const component = shallow(
    <Select
      id={id}
      value="1"
      name={name}
      placeholder={placeholder}
      options={objectOptions}
      onChange={mockChange}
      tabIndex={tabIndex}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
      dataAttrs={dataAttrs}
    />,
  );
  const select = component.find("Select__StyledSelect");
  const label = component.find("Select__Label");
  it("should have data-test", () => {
    expect(select.render().prop("data-test")).toBe(dataTest);
  });
  it("should have data-state", () => {
    expect(select.render().prop("data-state")).toBe("ok");
    expect(select.render().prop("data-recording-ignore")).toBe("true");
  });
  it("should have name", () => {
    expect(select.render().prop("attribs").name).toBe(name);
  });
  it("should have spaceAfter", () => {
    expect(label.prop("spaceAfter")).toBe(spaceAfter);
  });
  it("should have tabindex", () => {
    expect(select.render().prop("tabindex")).toBe(tabIndex);
  });
  it("should have placeholder", () => {
    expect(select.childAt(0).text()).toBe(placeholder);
    expect(select.render().prop("id")).toBe(id);
  });
});

describe(`Required field`, () => {
  const label = "Label";
  const component = mount(
    <Select options={objectOptions} label={label} required onChange={mockChange} />,
  );
  it("should render asterisk", () => {
    expect(component.find("FormLabel__StyledAsterisk").exists()).toBe(true);
  });
});
