// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Layout, { LayoutColumn } from "..";

import { LAYOUT_OPTIONS, LAYOUT_SETTINGS } from "../consts";

describe("Button with icon", () => {
  const dataTest = "test";
  const component = shallow(
    <Layout type={LAYOUT_OPTIONS.SEARCH} dataTest={dataTest}>
      <LayoutColumn>Lorem ipsum dolor sit amet</LayoutColumn>
      <LayoutColumn>Lorem ipsum dolor sit amet</LayoutColumn>
      <LayoutColumn>Lorem ipsum dolor sit amet</LayoutColumn>
    </Layout>,
  );
  it("should render data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("columns should have hide props", () => {
    component.children().forEach((node, key) => {
      expect(node.prop("hideOn")).toBe(LAYOUT_SETTINGS[LAYOUT_OPTIONS.SEARCH].hideOn[key]);
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
