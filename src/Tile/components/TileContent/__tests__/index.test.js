// @flow
import * as React from "react";
import { mount } from "enzyme";

import TileContent from "../index";
import defaultTheme from "../../../../defaultTheme";

describe("TileContent", () => {
  const children = "Lorem ipsum dolor sit amet";
  const ref = React.createRef();
  const component = mount(
    <TileContent withPointer withBorder ref={ref} noPadding={false}>
      {children}
    </TileContent>,
  );
  it("should render children", () => {
    expect(component.render().text()).toBe(children);
  });
  it("should have proper styles without additional props", () => {
    expect(component.find("TileContent__StyledTileContent")).toHaveStyleRule("cursor", "pointer");
    expect(component.find("TileContent__StyledTileContent")).toHaveStyleRule(
      "border-top",
      `1px solid ${defaultTheme.orbit.paletteCloudNormal}`,
    );
    expect(component.find("TileContent__StyledTileContent")).toHaveStyleRule(
      "padding",
      `${defaultTheme.orbit.spaceMedium} 0`,
    );
    expect(component.find("TileContent__StyledTileContent")).toHaveStyleRule(
      "margin",
      `0 ${defaultTheme.orbit.spaceMedium}`,
    );
  });
  it("should have proper styles without additional props", () => {
    component.setProps({ withPointer: false, withBorder: false, noPadding: true });
    expect(component.find("TileContent__StyledTileContent")).not.toHaveStyleRule(
      "cursor",
      expect.any(String),
    );
    expect(component.find("TileContent__StyledTileContent")).not.toHaveStyleRule(
      "border-top",
      expect.any(String),
    );
    expect(component.find("TileContent__StyledTileContent")).not.toHaveStyleRule(
      "padding",
      expect.any(String),
    );
    expect(component.find("TileContent__StyledTileContent")).not.toHaveStyleRule(
      "margin",
      expect.any(String),
    );
  });
  it("should have ref", () => {
    expect(ref.current).toBeDefined();
  });
});
