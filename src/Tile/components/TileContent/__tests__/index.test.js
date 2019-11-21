// @flow
import * as React from "react";
import { mount } from "enzyme";

import TileContent from "../index";

describe("Tile clickable", () => {
  const children = "Lorem ipsum dolor sit amet";
  const component = mount(<TileContent>{children}</TileContent>);
  it("should render children", () => {
    expect(component.render().text()).toBe(children);
  });
  console.log(component.debug());
  it("should have proper styles without additional props", () => {
    expect(component.find("TileContent__StyledTileContent")).toHaveStyleRule();
  });
});
