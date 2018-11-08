// @flow

import * as React from "react";
import renderer from "react-test-renderer";
import { Text } from "react-native";

import Icon from "../index";

describe("Icon", () => {
  const component = renderer.create(<Icon name="check" />);
  const instance = component.root;
  it("should have correct icon character for icon name", () => {
    expect(instance.findByType(Text).props.children).toBe("V");
  });
  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
