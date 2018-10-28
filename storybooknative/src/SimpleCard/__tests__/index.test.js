// @flow

import * as React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";

import SimpleCard from "../index";

describe("SimpleCard", () => {
  const onPressEvent = jest.fn();
  const children = <Text>Simple Card</Text>;
  const component = renderer.create(<SimpleCard onPress={onPressEvent}>{children}</SimpleCard>);
  const instance = component.root;
  it("should have correct children props", () => {
    expect(instance.props.children).toBe(children);
  });
  it("should have been pressed", () => {
    expect(onPressEvent).not.toHaveBeenCalled();
    instance.props.onPress();
    expect(onPressEvent).toHaveBeenCalled();
  });
  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
