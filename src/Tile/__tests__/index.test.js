// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import Tile from "../index";
import Airplane from "../../icons/Airplane";

const title = "Tile title";
const description = "Description";
const href = "https://www.kiwi.com/";
const external = true;
const onClick = jest.fn();
const dataTest = "test";

describe("Tile Default", () => {
  const component = (
    <Tile
      icon={<Airplane />}
      title={title}
      description={description}
      href={href}
      external={external}
      onClick={onClick}
      dataTest={dataTest}
    />
  );
  const shallowedComponent = shallow(component);
  const mountedComponent = mount(component);

  it("should contain icon, title and description", () => {
    const tileHeader = mountedComponent.find("TileHeader");
    expect(tileHeader.find("TileHeader__StyledTileTitle").exists()).toBe(true);
    expect(tileHeader.find("TileHeader__StyledTileDescription").exists()).toBe(true);
    expect(
      tileHeader
        .find("Icon__StyledIcon")
        .find("svg")
        .exists(),
    ).toBe(true);
  });

  it("should render rel when external", () => {
    expect(shallowedComponent.render().prop("rel")).toBe("noopener noreferrer");
  });

  it("should render proper element", () => {
    expect(shallowedComponent.render().prop("name")).toBe("a");
  });

  it("should execute onClick method", () => {
    shallowedComponent.find("TileHeader").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Tile Expandable", () => {
  const children = "This is sample content of expandable tile";

  const notDefaultExpandedTile = (
    <Tile
      icon={<Airplane />}
      title={title}
      href={undefined}
      description={description}
      onClick={onClick}
      dataTest={dataTest}
    >
      {children}
    </Tile>
  );

  const shallowednotDefaultExpandedTile = shallow(notDefaultExpandedTile);

  const defaultExpandedTile = (
    <Tile
      icon={<Airplane />}
      title={title}
      description={description}
      onClick={onClick}
      dataTest={dataTest}
      initialExpanded
    >
      {children}
    </Tile>
  );

  it("should call onClick on Expandable Tile", () => {
    shallowednotDefaultExpandedTile.find("TileHeader").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("should render proper element", () => {
    expect(shallowednotDefaultExpandedTile.render().prop("name")).toBe("div");
  });

  it("should contain children", () => {
    expect(shallowednotDefaultExpandedTile.find("TileExpandable").exists()).toBe(true);
  });

  it("is default expanded children visible", () => {
    const shallowedDefaultExpandedTile = mount(defaultExpandedTile);
    expect(shallowedDefaultExpandedTile.find("TileExpandable")).toHaveStyleRule(
      "max-height",
      undefined,
    );
    expect(shallowedDefaultExpandedTile.find("TileExpandable")).toHaveStyleRule(
      "animation",
      undefined,
    );
  });
});
