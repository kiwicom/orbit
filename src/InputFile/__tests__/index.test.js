// @flow
import * as React from "react";
import { shallow } from "enzyme";

import InputFile from "../index";

describe(`InputFiInputFile with help`, () => {
  const label = "Select file";
  const title = "Click on me";
  const name = "name";
  const placeholder = "Not file has been selected";
  const fileName = "fileName.png";
  const allowedFileTypes = [".png", ".jpg", ".pdf"];
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const onRemoveFile = jest.fn();

  const component = shallow(
    <InputFile
      name={name}
      label={label}
      title={title}
      placeholder={placeholder}
      fileName={fileName}
      allowedFileTypes={allowedFileTypes}
      help={
        <div>
          Supported files: <strong>PNG, JPG, PDF</strong>
        </div>
      }
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onRemoveFile={onRemoveFile}
    />,
  );
  const input = component.find("InputFile__Input");
  const closeButton = component.find("InputFile__CloseButton");

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
  it("should have passed props", () => {
    expect(input.prop("name")).toBe(name);
    expect(input.prop("accept")).toBe(allowedFileTypes);
  });
  it("should contain a input Button", () => {
    expect(component.find("InputFile__InputButton").exists()).toBe(true);
  });
  it("should contain a close Button", () => {
    expect(closeButton.exists()).toBe(true);
  });
  it("should contain a fake div with styling", () => {
    expect(component.find("InputFile__FakeInput").exists()).toBe(true);
  });
  it("should contain FeedBack help", () => {
    expect(component.find(`FormFeedback[type="help"]`).exists()).toBe(true);
  });
  it("should execute onChange method", () => {
    input.simulate("change");
    expect(onChange).toHaveBeenCalled();
  });
  // we can not check if onFocus has been called on input[type="file"]
  // we also need to convert it
  it("should have onFocus method", () => {
    expect(input.prop("onFocus").toString()).toBe(onFocus.toString());
  });
  it("should execute onBlur method", () => {
    input.simulate("blur");
    expect(onBlur).toHaveBeenCalled();
  });
  it("should have onRemoveFile method", () => {
    closeButton.simulate("click");
    expect(onRemoveFile).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
describe(`InputFiInputFile with error`, () => {
  const component = shallow(
    <InputFile error={<div>Error message (explain how to solve it)</div>} />,
  );

  it("should NOT contain a label", () => {
    expect(component.find("FormLabel").exists()).toBe(false);
  });
  it("should contain FeedBack error", () => {
    expect(component.find(`FormFeedback[type="error"]`).exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
