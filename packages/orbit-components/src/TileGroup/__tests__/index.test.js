// @flow
import * as React from "react";
import { shallow } from "enzyme";

import TileGroup from "../index";
import Tile from "../../Tile";

describe("Tile clickable", () => {
  const dataTest = "test";
  const onClick = jest.fn();
  const component = shallow(
    <TileGroup dataTest={dataTest}>
      <Tile title="Lorem ipsum dolor sit amet" onClick={onClick} />
      <Tile title="Lorem ipsum dolor sit amet" onClick={onClick} />
      <Tile title="Lorem ipsum dolor sit amet" onClick={onClick} />
      <Tile title="Lorem ipsum dolor sit amet" onClick={onClick} />
    </TileGroup>,
  );
  it("should render dataTest properly", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
});
