// @flow

import * as React from "react";
import renderer from "react-test-renderer";

import Button from "../index";

describe("Button", () => {
  const children = "Lorem ipsum";
  const onPressEvent = jest.fn();
  const component = renderer.create(<Button onPress={onPressEvent}>{children}</Button>);
  const instance = component.root;
  it("shoud have title", () => {
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
