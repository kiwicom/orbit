// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Badge from "../index";
import Sightseeing from "../../icons/Sightseeing";

describe("Badge", () => {
  const content = "badge";
  const type = "info";
  const dataTest = "test";
  const icon = <Sightseeing />;
  const ariaLabel = content;

  const component = shallow(
    <Badge icon={icon} type={type} dataTest={dataTest} ariaLabel={ariaLabel}>
      {content}
    </Badge>,
  );

  it("should have passed props", () => {
    expect(component.prop("background")).toBe("#E5F7FF");
    expect(component.prop("foregroundColor")).toBe("#0172CB");
    expect(component.render().prop("data-test")).toBe(dataTest);
    expect(component.render().prop("aria-label")).toBe(ariaLabel);
    expect(component.prop("icon")).toBe(icon);
  });
  it("should contain a content", () => {
    expect(component.render().text()).toBe(content);
  });
});
