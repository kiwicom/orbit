// @flow
import * as React from "react";
import { shallow } from "enzyme";

import InputGroup from "../index";
import Select from "../../Select";
import InputField from "../../InputField";
import CountryFlag from "../../CountryFlag";
import { CODES } from "../../CountryFlag/consts";

describe(`InputGroup - Phone number`, () => {
  const label = "Phone number";
  const dataTest = "test";
  const flex = ["0 0 130px", "1 1 100%"];
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  const selectOptions = [{ value: 1, label: "+420" }, { value: 2, label: "+421" }];
  const selectValue = 1;

  const countryFlagCode = CODES.CZ;

  const inputPlaceholder = "e.g. 123 456 789";
  const inputMaxLength = 11;
  const inputValue = "777 888 999";
  const component = shallow(
    <InputGroup
      label={label}
      flex={flex}
      help={
        <div>
          Enter your <strong>phone number</strong>
        </div>
      }
      onChange={onChange}
      dataTest={dataTest}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <Select
        options={selectOptions}
        value={selectValue}
        prefix={<CountryFlag code={countryFlagCode} />}
      />
      <InputField placeholder={inputPlaceholder} maxLength={inputMaxLength} value={inputValue} />
    </InputGroup>,
  );
  const input = component.find("InputField");
  const select = component.find("Select");

  it("should contain a label", () => {
    expect(
      component
        .find("FormLabel")
        .render()
        .text(),
    ).toBe(label);
  });
  it("should contain an input", () => {
    expect(input.exists()).toBe(true);
  });
  it("should contain a select", () => {
    expect(select.exists()).toBe(true);
  });
  it("should contain a select", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should contain a fake div with styling", () => {
    expect(component.find("InputGroup__FakeGroup").exists()).toBe(true);
  });
  it("should contain FeedBack help", () => {
    expect(component.find(`FormFeedback[type="help"]`).exists()).toBe(true);
  });
  it("input should execute onChange method", () => {
    input.simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("select should execute onChange method", () => {
    select.simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("input should execute onFocus method", () => {
    input.simulate("focus");
    expect(onFocus).toHaveBeenCalled();
  });
  it("select should execute onFocus method", () => {
    select.simulate("focus");
    expect(onFocus).toHaveBeenCalled();
  });
  it("input should execute onBlur method", () => {
    input.simulate("focus");
    input.simulate("blur");
    expect(onBlur).toHaveBeenCalled();
  });
  it("select should execute onBlur method", () => {
    select.simulate("focus");
    select.simulate("blur");
    expect(onBlur).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
