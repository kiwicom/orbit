// @flow

import * as React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import renderer from "react-test-renderer";
import { Text } from "react-native";

import Icon from "../index";

describe("Icon", () => {
  const component = renderer.create(<Icon name="check" />);
  const instance = component.root;

  it("should have correct icon character for icon name", () => {
    expect(instance.findByType(Text).props.children).toBe("V");
  });

  it("should have correct size and color", () => {
    const customComponent = renderer.create(<Icon name="check" size={40} color="red" />);
    const customInstance = customComponent.root;

    expect(customInstance.findByType(Text).props.size).toBe(40);
    expect(customInstance.findByType(Text).props.color).toBe("red");
  });

  it("should match the snapshot", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("throws an error if icon name is invalid", () => {
    // $FlowExpectedError we are able to mock it in Jest
    console.error = jest.fn(); // Just don't print it for this test where error is expected
    expect(() => renderer.create(<Icon name="__invalid-name__" />)).toThrowError(
      'Icon with name "__invalid-name__" does not exist.',
    );
  });
});
