// @flow
import * as React from "react";
import { shallow } from "enzyme";

import TileExpandable from "../index";
import TileHeader from "../../TileHeader/index";
import KEY_CODE_MAP from "../../../../common/keyMaps";

describe("TileExpandable", () => {
  const children = "Lorem ipsum dolor sit amet";
  const title = "Lorem ipsum dolor sit amet";
  const description = "Lorem ipsum dolor sit amet";
  const onClick = jest.fn();
  const component = shallow(
    <TileExpandable
      title={title}
      description={description}
      onClick={onClick}
      noPadding={false}
      initialExpanded={false}
    >
      {children}
    </TileExpandable>,
  );
  const header = component.find(TileHeader);
  it("should return TileHeader with props", () => {
    expect(header.exists()).toBe(true);
    expect(header.prop("title")).toBe(title);
    expect(header.prop("description")).toBe(description);
    expect(header.prop("tabIndex")).toBe("0");
    expect(header.prop("role")).toBe("button");
  });
  it("should execute onClick method", () => {
    header.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("should execute onClick method onKeyDown ENTER", () => {
    header.simulate("keydown", { keyCode: KEY_CODE_MAP.ENTER });
    expect(onClick).toHaveBeenCalled();
  });
  it("should execute onClick method onKeyDown SPACE", () => {
    header.simulate("keydown", { keyCode: KEY_CODE_MAP.SPACE, preventDefault: () => {} });
    expect(onClick).toHaveBeenCalled();
  });
});
