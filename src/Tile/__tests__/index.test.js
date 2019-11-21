// @flow
import * as React from "react";
import { shallow } from "enzyme";

import KEY_CODE_MAP from "../../common/keyMaps";
import Tile from "../index";
import TileContent from "../components/TileContent";
import TileHeader from "../components/TileHeader";
import TileExpandable from "../components/TileExpandable";
import Text from "../../Text";
import Stack from "../../Stack";
import Airplane from "../../icons/Airplane";

describe("Tile clickable", () => {
  const dataTest = "test";
  const title = "Lorem ipsum dolor sit amet";
  const description = "Lorem ipsum dolor sit amet";
  const onClick = jest.fn();
  const component = shallow(
    <Tile
      dataTest={dataTest}
      icon={<Airplane />}
      title={title}
      description={description}
      onClick={onClick}
    />,
  );
  it("should render proper attributes", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
    expect(component.render().prop("role")).toBe("button");
    expect(component.prop("as")).toBe("div");
  });
  it("should return TileHeader with props", () => {
    const header = component.find(TileHeader);
    expect(header.exists()).toBe(true);
    expect(header.prop("title")).toBe(title);
    expect(header.prop("description")).toBe(description);
    expect(header.prop("icon")).toBeDefined();
    expect(header.prop("onClick")).toBe(onClick);
    expect(header.prop("tabIndex")).toBe("0");
  });
});

describe("Tile as anchor with custom header", () => {
  const href = "https://kiwi.com";
  const header = (
    <Stack>
      <Text>Lorem ipsum dolor sit amet</Text>
    </Stack>
  );
  const component = shallow(<Tile href={href} external header={header} />);
  it("should render proper attributes", () => {
    expect(component.prop("as")).toBe("a");
    expect(component.prop("href")).toBe(href);
    expect(component.prop("target")).toBe("_blank");
    expect(component.prop("rel")).toBe("noopener noreferrer");
  });
  it("should return TileHeader with props", () => {
    const headerComponent = component.find(TileHeader);
    expect(headerComponent.exists()).toBe(true);
    expect(headerComponent.prop("header")).toBe(header);
    expect(headerComponent.prop("tabIndex")).toBe(undefined);
  });
});

describe("Tile just with children", () => {
  const children = "Lorem ipsum dolor sit amet";
  const onClick = jest.fn();
  const noPadding = true;
  const component = shallow(
    <Tile onClick={onClick} noPadding={noPadding}>
      {children}
    </Tile>,
  );
  it("should return TileContent with props", () => {
    const headerComponent = component.find(TileContent);
    expect(headerComponent.exists()).toBe(true);
    expect(headerComponent.prop("noPadding")).toBe(noPadding);
    expect(headerComponent.prop("withPointer")).toBe(true);
    expect(headerComponent.prop("withBorder")).toBe(false);
  });
  it("should execute onClick method", () => {
    component.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("should execute onClick method onKeyDown ENTER", () => {
    component.simulate("keydown", { keyCode: KEY_CODE_MAP.ENTER });
    expect(onClick).toHaveBeenCalled();
  });
  it("should execute onClick method onKeyDown SPACE", () => {
    component.simulate("keydown", { keyCode: KEY_CODE_MAP.SPACE, preventDefault: () => {} });
    expect(onClick).toHaveBeenCalled();
  });
});

describe("Tile expandable with header and children", () => {
  const children = "Lorem ipsum dolor sit amet";
  const header = (
    <Stack>
      <Text>Lorem ipsum dolor sit amet</Text>
    </Stack>
  );
  const component = shallow(
    <Tile header={header} expandable initialExpanded>
      {children}
    </Tile>,
  );
  it("should return TileExpandable with props", () => {
    const headerComponent = component.find(TileExpandable);
    expect(headerComponent.exists()).toBe(true);
    expect(headerComponent.prop("header")).toBe(header);
    expect(headerComponent.prop("initialExpanded")).toBe(true);
  });
});
