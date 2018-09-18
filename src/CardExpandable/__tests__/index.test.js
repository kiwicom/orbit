// @flow
import * as React from "react";
import { shallow } from "enzyme";

import TileExpandable from "../index";
import TileExpandableHeader from "../TileExpandableHeader";
import TileExpandableContent from "../TileExpandableContent";
import Text from "../../Text";
import Airplane from "../../icons/Airplane";

describe("TileExpandable", () => {
  const icon = <Airplane />;
  const title = "Tile title";
  const text = "Text for testing";
  const children = <Text>{text}</Text>;
  const shown = true;

  const component = shallow(
    <TileExpandable shown={shown}>
      <TileExpandableHeader title={title} icon={icon} />
      <TileExpandableContent>{children}</TileExpandableContent>
    </TileExpandable>,
  );

  const tile = component.find("TileExpandable__StyledTileExpandable");
  const tileHeader = component.find("TileExpandableHeader");

  it("should contain TileHeader", () => {
    expect(
      component
        .find("TileExpandable__StyledTileExpandable")
        .children()
        .first()
        .name(),
    ).toBe(TileExpandableHeader.name);
  });

  it("should contain TileContent", () => {
    expect(
      tile
        .children()
        .last()
        .name(),
    ).toBe(TileExpandableContent.name);
  });

  it("should change toggle state", () => {
    const node = component.instance();
    node.setState({ toggle: false });
    expect(component.state("toggle")).toEqual(false);
  });

  it("should render props", () => {
    expect(tile.prop("shown")).toBe(shown);
    expect(tileHeader.prop("title")).toBe(title);
    expect(tileHeader.prop("icon")).toBe(icon);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
