// @flow

import * as React from "react";
import { shallow } from "enzyme";

import BadgePrimitive from "../index";
import Sightseeing from "../../../icons/Sightseeing";

describe("Badge", () => {
  const content = "badge";
  const type = "info";
  const dataTest = "test";
  const icon = <Sightseeing />;
  const ariaLabel = content;
  const background = "red";
  const foregroundColor = "blue";

  const component = shallow(
    <BadgePrimitive
      type={type}
      icon={icon}
      background={background}
      foregroundColor={foregroundColor}
      dataTest={dataTest}
      ariaLabel={ariaLabel}
    >
      {content}
    </BadgePrimitive>,
  );
  it("should have passed props", () => {
    expect(component.prop("type")).toBe(type);
    expect(component.prop("background")).toBe(background);
    expect(component.prop("foregroundColor")).toBe(foregroundColor);
    expect(component.render().prop("data-test")).toBe(dataTest);
    expect(component.render().prop("aria-label")).toBe(ariaLabel);
  });
  it("should contain a content", () => {
    expect(component.render().text()).toBe(content);
  });
  it("should contain a icon", () => {
    expect(component.find("Sightseeing").exists()).toBe(true);
  });
});
