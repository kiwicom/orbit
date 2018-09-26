// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Badge from "../index";
import Sightseeing from "../../icons/Sightseeing";

describe("Badge", () => {
  const content = "badge";
  const type = "info";
  const circled = true;
  const dataTest = "test";
  const icon = <Sightseeing />;

  const component = shallow(
    <Badge type={type} icon={icon} circled={circled} dataTest={dataTest}>
      {content}
    </Badge>,
  );
  it("should have passed props", () => {
    expect(component.prop("type")).toBe(type);
    expect(component.prop("circled")).toBe(circled);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should contain a content", () => {
    expect(component.render().text()).toBe(content);
  });
  it("should contain a icon", () => {
    expect(component.find("Sightseeing").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
