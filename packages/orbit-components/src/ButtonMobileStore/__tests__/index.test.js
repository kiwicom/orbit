// @flow

import * as React from "react";
import { shallow } from "enzyme";

import ButtonMobileStore from "../index";
import { TYPE_OPTIONS } from "../consts";

describe("ButtonMobileStore", () => {
  const dataTest = "test";
  const type = TYPE_OPTIONS.APPSTORE;
  const href = "link";
  const onClick = jest.fn();

  const component = shallow(
    <ButtonMobileStore onClick={onClick} dataTest={dataTest} type={type} href={href} />,
  );

  it("should contain an href", () => {
    expect(component.render().prop("href")).toBe(href);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have noopener in attribute", () => {
    expect(component.render().prop("rel").split(" ").includes("noopener")).toBe(true);
  });
  it("should have noreferrer in attribute", () => {
    expect(component.render().prop("rel").split(" ").includes("noreferrer")).toBe(true);
  });
  it("should contain an external href", () => {
    expect(component.render().prop("target")).toBe("_blank");
  });
  it("should execute onClick method", () => {
    component.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
