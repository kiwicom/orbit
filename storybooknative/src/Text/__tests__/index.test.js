// @flow

import * as React from "react";
import renderer from "react-test-renderer";

import Text from "../index";

describe("Text", () => {
  const children = "Lorem ipsum";
  const component = renderer.create(<Text>{children}</Text>);
  const instance = component.root;
  it("should have correct children props", () => {
    expect(instance.props.children).toBe(children);
  });
  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
