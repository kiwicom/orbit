// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import InputField from "../index";
import ButtonLink from "../../ButtonLink";
import TextLink from "../../TextLink";
import Visibility from "../../icons/Visibility";
import Search from "../../icons/Search";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import { INPUTMODE } from "../consts";

describe(`InputField with help, prefix and suffix`, () => {
  const size = "normal";
  const type = "text";
  const name = "name";
  const label = "Label";
  const value = "value";
  const placeholder = "placeholder";
  const dataTest = "test";
  const tabIndex = "-1";
  const readOnly = true;
  const minLength = 1;
  const maxLength = 10;
  const autoComplete = "off";
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const onSelect = jest.fn();
  const onMouseUp = jest.fn();
  const onMouseDown = jest.fn();

  const spaceAfter = SPACINGS_AFTER.NORMAL;
  const id = "id";
  const inputMode = INPUTMODE.NUMERIC;
  const dataAttrs = {
    "data-recording-ignore": true,
  };

  const component = shallow(
    <InputField
      id={id}
      size={size}
      type={type}
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      dataTest={dataTest}
      tabIndex={tabIndex}
      readOnly={readOnly}
      autoComplete={autoComplete}
      spaceAfter={spaceAfter}
      inputMode={inputMode}
      prefix={<Search />}
      suffix={<ButtonLink type="primary" compact iconLeft={<Visibility />} />}
      help={
        <div>
          Did you mean <TextLink>something</TextLink>?
        </div>
      }
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSelect={onSelect}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      dataAttrs={dataAttrs}
    />,
  );
  const prefix = component.find("InputField__Prefix");
  const input = component.find("InputField__Input");
  const suffix = component.find("InputField__Suffix");
  const field = component.find("InputField__Field");

  it("should contain a label", () => {
    expect(component.find("FormLabel").render().text()).toBe(label);
  });
  it("should contain a icon as prefix", () => {
    expect(prefix.find("Search").exists()).toBe(true);
  });
  it("should contain an input", () => {
    expect(input.exists()).toBe(true);
  });
  it("should have passed props", () => {
    expect(input.prop("size")).toBe(size);
    expect(field.prop("spaceAfter")).toBe(spaceAfter);
    expect(input.prop("type")).toBe(type);
    expect(component.find("InputField__Input").render().prop("attribs").name).toBe(name);
    expect(input.prop("value")).toBe(value);
    expect(input.prop("placeholder")).toBe(placeholder);
    expect(input.prop("maxLength")).toBe(maxLength);
    expect(input.prop("minLength")).toBe(minLength);
    expect(input.render().prop("data-recording-ignore")).toBe("true");
    expect(input.render().prop("tabindex")).toBe(tabIndex);
    expect(input.render().prop("data-test")).toBe(dataTest);
    expect(input.render().prop("data-state")).toBe("ok");
    expect(input.render().prop("inputmode")).toBe(inputMode);
    expect(input.render().prop("autocomplete")).toBe(autoComplete);
    expect(input.prop("readOnly")).toBe(readOnly);
    expect(input.prop("id")).toBe(id);
  });
  it("should contain a Button as suffix", () => {
    expect(suffix.find("ButtonLink").exists()).toBe(true);
  });
  it("should contain a fake div with styling", () => {
    expect(component.find("InputField__FakeInput").exists()).toBe(true);
  });
  it("should contain FeedBack", () => {
    expect(component.find(`FormFeedback`).exists()).toBe(true);
  });
  it("should execute onChange method", () => {
    input.simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  it("should execute onSelect method", () => {
    input.simulate("select");
    expect(onSelect).toHaveBeenCalled();
  });
  it("should execute onMouseUp method", () => {
    input.simulate("mouseup");
    expect(onMouseUp).toHaveBeenCalled();
  });
  it("should execute onMouseDown method", () => {
    input.simulate("mousedown");
    expect(onMouseDown).toHaveBeenCalled();
  });
  it("should execute onFocus method", () => {
    input.simulate("focus");
    expect(onFocus).toHaveBeenCalled();
  });
  it("should execute onBlur method", () => {
    input.simulate("focus");
    input.simulate("blur");
    expect(onBlur).toHaveBeenCalled();
  });
});

describe(`Compact input`, () => {
  const component = shallow(<InputField label="Label" inlineLabel />);

  it("should render FormLabel in prefix", () => {
    expect(component.find("InputField__StyledInlineLabel").exists()).toBe(true);
  });
});

describe(`Required field`, () => {
  const label = "Label";
  const ref = React.createRef();
  const component = mount(<InputField label={label} required ref={ref} />);
  it("should render asterisk", () => {
    expect(component.find("FormLabel__StyledAsterisk").exists()).toBe(true);
  });
  it("should have ref", () => {
    expect(ref.current).toBeDefined();
  });
});

describe(`InputField number with error and help`, () => {
  const size = "normal";
  const type = "number";
  const minValue = 1;
  const maxValue = 5;

  const component = shallow(
    <InputField
      size={size}
      type={type}
      minValue={minValue}
      maxValue={maxValue}
      help={<div>Everything is fine.</div>}
      error={<div>Something went wrong.</div>}
    />,
  );

  it("should NOT contain a label", () => {
    expect(component.find("FormLabel").exists()).toBe(false);
  });
  it("should have passed props", () => {
    expect(component.find("InputField__Input").prop("size")).toBe(size);
    expect(component.find("InputField__Input").prop("type")).toBe(type);
    expect(component.find("InputField__Input").prop("min")).toBe(minValue);
    expect(component.find("InputField__Input").prop("max")).toBe(maxValue);
  });
  it("should contain FeedBack", () => {
    expect(component.find(`FormFeedback`).exists()).toBe(true);
  });
  it("should has data-state error", () => {
    expect(component.find("InputField__Input").render().prop("data-state")).toBe("error");
  });
});
