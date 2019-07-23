// @flow

import * as React from "react";
import { mount, shallow } from "enzyme";

import { PureSlider as Slider } from "../index";

describe("Slider", () => {
  beforeEach(() => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 0,
        height: 0,
        top: 0,
        left: 400,
        bottom: 0,
        right: 400,
      };
    });
  });
  const min = 1;
  const max = 100;
  const component = mount(<Slider min={min} max={max} />);
  const instance = component.instance();
  test("calculateValue should return proper value", () => {
    expect(instance.calculateValue(0.52, false, false)).toEqual(52);
    expect(instance.calculateValue(0.52, true, false)).toEqual(53);
    expect(instance.calculateValue(0.52, false, true)).toEqual(51);
    expect(instance.calculateValue(0.52, true, true)).toEqual(52);
  });
  test("calculateValueFromPosition should return proper value", () => {
    console.log(instance.bar.current.getBoundingClientRect());
    expect(instance.calculateValueFromPosition(52)).toEqual(52);
  });
});
