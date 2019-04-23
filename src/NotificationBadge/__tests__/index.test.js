// @flow

import * as React from "react";
import { shallow } from "enzyme";

import NotificationBadge from "../index";
import Sightseeing from "../../icons/Sightseeing";

describe("NotificationBadge", () => {
  const content = "badge";
  const type = "info";
  const dataTest = "test";
  const icon = <Sightseeing />;

  const wrapped = shallow(
    <NotificationBadge type={type} icon={icon} dataTest={dataTest}>
      {content}
    </NotificationBadge>,
  );

  const component = wrapped.find("Badge");

  it("should have passed props", () => {
    expect(component.prop("type")).toBe(type);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
