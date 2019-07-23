// @flow

import * as React from "react";
import { mount, shallow } from "enzyme";

import { PureSlider as Slider } from "../index";

describe("Slider", () => {
  beforeEach(() => {
    // $FlowExpected
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 400,
        height: 0,
        top: 0,
        left: 28,
        bottom: 0,
        right: 428,
      };
    });
  });
  const onChange = jest.fn();
  const onChangeBefore = jest.fn();
  const onChangeAfter = jest.fn();
  const component = mount(
    <Slider onChange={onChange} onChangeBefore={onChangeBefore} onChangeAfter={onChangeAfter} />,
  );
  const instance = component.instance();
  test("calculateValue should return proper value", () => {
    expect(instance.calculateValue(0.52, false, false)).toEqual(52);
    expect(instance.calculateValue(0.52, true, false)).toEqual(53);
    expect(instance.calculateValue(0.52, false, true)).toEqual(51);
    expect(instance.calculateValue(0.52, true, true)).toEqual(52);
  });
  test("calculateValueFromPosition should return proper value", () => {
    expect(instance.calculateValueFromPosition(52)).toEqual(7);
    expect(instance.calculateValueFromPosition(352)).toEqual(81);
    expect(instance.calculateValueFromPosition(400)).toEqual(93);
    expect(instance.calculateValueFromPosition(428)).toEqual(100);
  });
  test("findClosestKey should return proper key", () => {
    expect(instance.findClosestKey(1, [1, 12])).toEqual(0);
    expect(instance.findClosestKey(2, [1, 12])).toEqual(0);
    expect(instance.findClosestKey(6, [1, 12])).toEqual(0);
    expect(instance.findClosestKey(7, [1, 12])).toEqual(1);
    expect(instance.findClosestKey(11, [1, 12])).toEqual(1);
    expect(instance.findClosestKey(11, [1, 12, 24])).toEqual(1);
    expect(instance.findClosestKey(20, [1, 12, 24])).toEqual(2);
  });
  test("moveValueByStep should return proper value", () => {
    expect(instance.moveValueByStep(1)).toEqual(2);
    expect(instance.moveValueByStep(-1)).toEqual(1);
    expect(instance.moveValueByStep(5)).toEqual(6);
    expect(instance.moveValueByStep(-5)).toEqual(1);
    expect(instance.moveValueByStep(-10)).toEqual(1);
    instance.setState({ value: 100 });
    expect(instance.moveValueByStep(1)).toEqual(100);
    expect(instance.moveValueByStep(5)).toEqual(100);
  });
  test("alignValueToStep should return proper value", () => {
    component.setProps({ step: 5 });
    expect(instance.alignValueToStep(92)).toEqual(90);
    expect(instance.alignValueToStep(1)).toEqual(0);
    expect(instance.alignValueToStep(105)).toEqual(105);
    expect(instance.alignValueToStep(40)).toEqual(40);
    expect(instance.alignValueToStep(98)).toEqual(100);
  });
  test("alignValueToMaxMin should return proper value", () => {
    expect(instance.alignValueToMaxMin(105)).toEqual(100);
    expect(instance.alignValueToMaxMin(95)).toEqual(95);
    expect(instance.alignValueToMaxMin(0)).toEqual(1);
  });
  test("replaceValue should return plain number", () => {
    expect(instance.replaceValue(10, null)).toEqual(10);
  });
  test("handleMove should return proper value", () => {
    expect(instance.handleMove(1)).toEqual(1);
    expect(instance.handleMove(null)).toEqual(null);
    expect(instance.handleMove(101)).toEqual(100);
    expect(instance.handleMove(-10)).toEqual(1);
  });
  test("injectCallbackAndSetState should call", () => {
    instance.injectCallbackAndSetState(onChange, 95);
    expect(onChange).toHaveBeenCalled();
    instance.injectCallbackAndSetState(onChangeBefore, 90);
    expect(onChangeBefore).toHaveBeenCalled();
    instance.injectCallbackAndSetState(onChangeAfter, 90, true);
    expect(onChangeAfter).toHaveBeenCalled();
  });
  it("handleBarMouseDown execute onChange", () => {
    instance.setState({ value: 50 });
    component.setProps({ step: 1 });
    instance.handleBarMouseDown({ pageX: 52 });
    expect(instance.state.value).toEqual(7);
    expect(onChange).toHaveBeenCalled();
  });
  test("defaultValue changes the value state", () => {
    component.setProps({ defaultValue: 20 });
    expect(instance.state.value).toEqual(20);
  });
});

describe("Range Slider", () => {
  beforeEach(() => {
    // $FlowExpected
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 400,
        height: 0,
        top: 0,
        left: 28,
        bottom: 0,
        right: 428,
      };
    });
  });
  const eventMap = {};
  window.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
  });
  window.removeEventListener = jest.fn(event => {
    eventMap[event] = null;
  });
  const min = 1;
  const max = 100;
  const onChange = jest.fn();
  const onChangeBefore = jest.fn();
  const onChangeAfter = jest.fn();
  const component = mount(
    <Slider
      min={min}
      max={max}
      defaultValue={[12, 12]}
      label="Depart from Prague"
      onChange={onChange}
      onChangeBefore={onChangeBefore}
      onChangeAfter={onChangeAfter}
      histogramData={[10, 20, 30]}
    />,
  );
  const instance = component.instance();
  test("calculateValueFromPosition should return proper value", () => {
    expect(instance.calculateValueFromPosition(52)).toEqual(7);
    expect(instance.calculateValueFromPosition(150)).toEqual(31);
    instance.setState({ value: [15, 12], handleIndex: 0 });
    expect(instance.calculateValueFromPosition(140)).toEqual(28);
    instance.setState({ handleIndex: null });
    expect(instance.calculateValueFromPosition(140)).toEqual(29);
    instance.setState({ value: [12, 15], handleIndex: 0 });
    expect(instance.calculateValueFromPosition(140)).toEqual(29);
    instance.setState({ handleIndex: null });
    expect(instance.calculateValueFromPosition(140, true)).toEqual(28);
    instance.setState({ handleIndex: 1 });
    expect(instance.calculateValueFromPosition(140, true)).toEqual(28);
  });
  test("moveValueByStep should return proper value", () => {
    instance.setState({ handleIndex: 0 });
    expect(instance.moveValueByStep(1)).toEqual([13, 15]);
    expect(instance.moveValueByStep(-1)).toEqual([11, 15]);
    expect(instance.moveValueByStep(3)).toEqual([15, 15]);
    expect(instance.moveValueByStep(-3)).toEqual([9, 15]);
    expect(instance.moveValueByStep(-15)).toEqual([1, 15]);
    expect(instance.moveValueByStep(100)).toEqual([100, 15]);
  });
  test("defaultValue changes the value state", () => {
    component.setProps({ defaultValue: [1, 100] });
    expect(instance.state.value).toEqual([1, 100]);
  });
  it("should execute keyDown event with arrow up", () => {
    instance.setState({ handleIndex: 0, value: [50, 60] });
    instance.handleKeyDown({
      stopPropagation: () => {},
      preventDefault: () => {},
      keyCode: 38,
    });
    expect(instance.state.value).toEqual([51, 60]);
    expect(onChange).toHaveBeenCalled();
  });
  it("should execute keyDown event with arrow right", () => {
    instance.setState({ handleIndex: 0, value: [50, 60] });
    instance.handleKeyDown({
      stopPropagation: () => {},
      preventDefault: () => {},
      keyCode: 39,
    });
    expect(instance.state.value).toEqual([51, 60]);
    expect(onChange).toHaveBeenCalled();
  });
  it("should execute keyDown event with arrow down", () => {
    instance.setState({ handleIndex: 1, value: [50, 60] });
    instance.handleKeyDown({
      stopPropagation: () => {},
      preventDefault: () => {},
      keyCode: 40,
    });
    expect(instance.state.value).toEqual([50, 59]);
    expect(onChange).toHaveBeenCalled();
  });
  it("should execute keyDown event with arrow left", () => {
    instance.setState({ handleIndex: 1, value: [50, 60] });
    instance.handleKeyDown({
      stopPropagation: () => {},
      preventDefault: () => {},
      keyCode: 37,
    });
    expect(instance.state.value).toEqual([50, 59]);
    expect(onChange).toHaveBeenCalled();
  });
  it("should execute keyDown event with home key", () => {
    instance.setState({ handleIndex: 0, value: [50, 60] });
    instance.handleKeyDown({
      stopPropagation: () => {},
      preventDefault: () => {},
      keyCode: 36,
    });
    expect(instance.state.value).toEqual([1, 60]);
    expect(onChange).toHaveBeenCalled();
    instance.setState({ handleIndex: 1, value: [50, 60] });
    instance.handleKeyDown({
      stopPropagation: () => {},
      preventDefault: () => {},
      keyCode: 36,
    });
    expect(instance.state.value).toEqual([50, 1]);
    expect(onChange).toHaveBeenCalled();
  });
  it("should execute keyDown event with end key", () => {
    instance.setState({ handleIndex: 0, value: [50, 60] });
    instance.handleKeyDown({
      stopPropagation: () => {},
      preventDefault: () => {},
      keyCode: 35,
    });
    expect(instance.state.value).toEqual([100, 60]);
    expect(onChange).toHaveBeenCalled();
    instance.setState({ handleIndex: 1, value: [50, 60] });
    instance.handleKeyDown({
      stopPropagation: () => {},
      preventDefault: () => {},
      keyCode: 35,
    });
    expect(instance.state.value).toEqual([50, 100]);
    expect(onChange).toHaveBeenCalled();
  });
  it("handleKeyDown should not change the state when ctrl, shift or alt key", () => {
    instance.setState({ value: [50, 60] });
    instance.handleKeyDown({
      keyCode: 35,
      ctrlKey: true,
      stopPropagation: () => {},
      preventDefault: () => {},
    });
    expect(instance.state.value).toEqual([50, 60]);
    instance.handleKeyDown({
      keyCode: 35,
      shiftKey: true,
      stopPropagation: () => {},
      preventDefault: () => {},
    });
    expect(instance.state.value).toEqual([50, 60]);
    instance.handleKeyDown({
      keyCode: 35,
      altKey: true,
      stopPropagation: () => {},
      preventDefault: () => {},
    });
    expect(instance.state.value).toEqual([50, 60]);
  });
  it("handleBarMouseDown should execute onChange", () => {
    instance.setState({ value: [50, 60] });
    instance.handleBarMouseDown({ pageX: 52 });
    expect(instance.state.value).toEqual([7, 60]);
    expect(onChange).toHaveBeenCalled();
  });
  it("handleOnFocus should execute onChangeBefore and add listeners", () => {
    instance.setState({ value: [50, 60] });
    instance.handleOnFocus(0)({});
    expect(typeof eventMap.keydown === "function").toBe(true);
    expect(typeof eventMap.focusout === "function").toBe(true);
    expect(instance.state.focused).toBe(true);
    expect(onChangeBefore).toHaveBeenCalled();
  });
  it("handleBlur should call onChangeAfter and remove listeners", () => {
    instance.handleBlur();
    expect(typeof eventMap.keydown !== "function").toBe(true);
    expect(typeof eventMap.focusout !== "function").toBe(true);
    expect(onChangeAfter).toHaveBeenCalled();
  });
  it("handleOnTouchStart should execute onChangeBefore and add listeners", () => {
    instance.setState({ value: [50, 60] });
    instance.handleOnTouchStart(0)({ touches: [{ pageX: 109 }] });
    expect(typeof eventMap.touchmove === "function").toBe(true);
    expect(typeof eventMap.touchend === "function").toBe(true);
    expect(instance.state.focused).toBe(true);
    expect(onChangeBefore).toHaveBeenCalled();
  });
  it("handleTouchEnd should call onChangeAfter and remove listeners", () => {
    instance.handleTouchEnd();
    expect(typeof eventMap.touchmove !== "function").toBe(true);
    expect(typeof eventMap.touchend !== "function").toBe(true);
    expect(instance.state.focused).toBe(false);
    expect(onChangeAfter).toHaveBeenCalled();
  });
  it("handleTouchMove should call onChange and set value", () => {
    instance.setState({ value: [50, 60], handleIndex: 0 });
    instance.handleOnTouchMove({ stopPropagation: () => {}, touches: [{ pageX: 109 }] });
    expect(instance.state.value).toEqual([21, 60]);
    expect(onChange).toHaveBeenCalled();
  });
  it("handleTouchMove should not set value when touches > 1", () => {
    instance.setState({ value: [50, 60] });
    instance.handleOnTouchMove({
      touches: [{ pageX: 109 }, { pageX: 110 }],
    });
    expect(instance.state.value).toEqual([50, 60]);
  });
  it("handleMouseDown should execute onChangeBefore and add listeners", () => {
    instance.setState({ value: [50, 60] });
    instance.handleMouseDown(0)({ button: 0, buttons: 1 });
    expect(typeof eventMap.mousemove === "function").toBe(true);
    expect(typeof eventMap.mouseup === "function").toBe(true);
    expect(instance.state.focused).toBe(true);
    expect(onChangeBefore).toHaveBeenCalled();
  });
  it("handleMouseUp should call onChangeAfter and remove listeners", () => {
    instance.handleMouseUp();
    expect(typeof eventMap.mousemove !== "function").toBe(true);
    expect(typeof eventMap.mouseup !== "function").toBe(true);
    expect(instance.state.focused).toBe(false);
    expect(onChangeAfter).toHaveBeenCalled();
  });
  it("handleMouseMove should call onChange and set value", () => {
    instance.setState({ value: [50, 60], handleIndex: 0 });
    instance.handleMouseMove({ pageX: 152 });
    expect(instance.state.value).toEqual([32, 60]);
    expect(onChange).toHaveBeenCalled();
  });
  test("replaceValue should return number or array number", () => {
    instance.setState({ value: [50, 60] });
    expect(instance.replaceValue(10, 1)).toEqual([50, 10]);
  });
});

describe("Range Slider in render", () => {
  beforeEach(() => {
    // $FlowExpected
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: 400,
        height: 0,
        top: 0,
        left: 28,
        bottom: 0,
        right: 428,
      };
    });
  });
  const min = 1;
  const max = 24;
  const dataTest = "test";
  const component = shallow(
    <Slider
      min={min}
      max={max}
      defaultValue={[1, 24]}
      label="Depart from Prague"
      histogramData={[10, 20, 30]}
      dataTest={dataTest}
    />,
  );
  const slider = component.find("Slider__StyledSlider");
  test("should have data-test", () => {
    expect(slider.render().prop("data-test")).toBe(dataTest);
  });
  test("should have Hide component", () => {
    expect(slider.find("Hide").exists()).toBe(true);
  });
  test("should have two Handles", () => {
    const children = slider.find("Slider__StyledSliderInput").find("Handle");
    children.forEach((node, index) => {
      expect(node.prop("valueMax")).toBe(max);
      expect(node.prop("valueMin")).toBe(min);
      expect(node.prop("value")).toEqual([1, 24]);
      expect(node.prop("index")).toBe(index);
    });
  });
  test("should have Bar component", () => {
    const children = slider.find("Slider__StyledSliderInput").find("Bar");
    children.forEach(node => {
      expect(node.prop("max")).toBe(max);
      expect(node.prop("min")).toBe(min);
      expect(node.prop("value")).toEqual([1, 24]);
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
