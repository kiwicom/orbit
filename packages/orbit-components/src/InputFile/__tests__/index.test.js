// @flow
import * as React from "react";
import { shallow } from "enzyme";

import InputFile from "../index";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe(`InputFile with help`, () => {
  const label = "Select file";
  const buttonLabel = "Click on me";
  const name = "name";
  const placeholder = "Not file has been selected";
  const fileName = "fileName.png";
  const dataTest = "test";
  const tabIndex = "-1";
  const allowedFileTypes = [".png", ".jpg", ".pdf"];
  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();
  const onRemoveFile = jest.fn();
  const spaceAfter = SPACINGS_AFTER.NORMAL;

  const component = shallow(
    <InputFile
      name={name}
      label={label}
      buttonLabel={buttonLabel}
      placeholder={placeholder}
      fileName={fileName}
      dataTest={dataTest}
      allowedFileTypes={allowedFileTypes}
      spaceAfter={spaceAfter}
      help={
        <div>
          Supported files: <strong>PNG, JPG, PDF</strong>
        </div>
      }
      tabIndex={tabIndex}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onRemoveFile={onRemoveFile}
    />,
  );
  const input = component.find("InputFile__Input");
  const field = component.find("InputFile__Field");
  const closeButton = component.find("ButtonLink");

  it("should contain a label", () => {
    expect(component.find("FormLabel").render().text()).toBe(label);
  });
  it("should contain an input", () => {
    expect(input.exists()).toBe(true);
  });
  it("should have passed props", () => {
    expect(component.find("InputFile__Input").render().prop("attribs").name).toBe(name);
    expect(input.prop("accept")).toBe(allowedFileTypes);
    expect(field.prop("spaceAfter")).toBe(spaceAfter);
    expect(input.render().prop("tabindex")).toBe(tabIndex);
    expect(input.render().prop("data-test")).toBe(dataTest);
    expect(input.render().prop("data-state")).toBe("ok");
  });
  it("should contain a input Button", () => {
    expect(component.find("InputFile__FakeInput").find("Button").exists()).toBe(true);
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
    closeButton.simulate("click", { preventDefault() {} });
    expect(onRemoveFile).toHaveBeenCalled();
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

  it("should has data-state error", () => {
    expect(component.find("InputFile__Input").render().prop("data-state")).toBe("error");
  });
});
