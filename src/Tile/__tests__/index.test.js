// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Tile from "../index";

describe("Tile", () => {
  const title = "Tile title";
  const href = "https://www.kiwi.com/";
  const external = true;
  const onClick = jest.fn();
  const dataTest = "test";
  const component = shallow(
    <Tile title={title} href={href} external={external} onClick={onClick} dataTest={dataTest} />,
  );

  const tile = component;
  const tileHeading = component
    .find("Tile__StyledTileHeadingWrapper")
    .children()
    .render()
    .text();

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should execute onClick method", () => {
    tile.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a tag when href prop is passed", () => {
    expect(component.find("Tile__StyledTile").html()).toContain('<a class="Tile__StyledTile');
  });

  it("should render NewWindow icon when external prop is passed", () => {
    expect(
      component
        .find("Tile__StyledIconRight")
        .children()
        .name(),
    ).toBe("Tile__StyledNewWindow");
  });

  it("should have passed props", () => {
    expect(tileHeading).toBe(title);
    expect(tile.prop("onClick")).toBe(onClick);
    expect(tile.prop("href")).toBe(href);
    expect(tile.prop("target")).toBe("_blank");
    expect(tile.render().prop("data-test")).toBe(dataTest);
  });
});
