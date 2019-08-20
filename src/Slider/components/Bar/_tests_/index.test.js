// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import Bar, { calculateBarPosition } from '../index';

describe('Bar in Slider', () => {
  const ref = React.createRef();
  const onMouseDown = jest.fn();
  const value = [1, 12];
  const min = 1;
  const max = 24;
  const hasHistogram = true;
  const component = shallow(
    <Bar onMouseDown={onMouseDown} value={value} min={min} max={max} hasHistogram={hasHistogram} />,
  );
  const bar = component.find('Bar__StyledBar');
  it('should execute onMouseDown', () => {
    bar.simulate('mousedown');
    expect(onMouseDown).toHaveBeenCalled();
  });
  it('each bar should have proper width and left', () => {
    const positions = [{ left: 0, width: 100 }, calculateBarPosition(value, max, min, true)];
    bar.children().forEach((node, index) => {
      expect(node.prop('left')).toBe(positions[index].left);
      expect(node.prop('width')).toBe(positions[index].width);
    });
  });
  it('should have ref', () => {
    expect(ref.current).toBeDefined();
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
describe('Bar in Slider: calculateBarPosition', () => {
  it('simple Slider without Histogram, should return proper left and width', () => {
    expect(calculateBarPosition(24, 24, 1, false)).toEqual({ left: 0, width: 100.0 });
    expect(calculateBarPosition(1, 24, 1, false)).toEqual({ left: 0, width: 0 });
    expect(calculateBarPosition(6, 24, 1, false)).toEqual({ left: 0, width: 21.7 });
  });
  it('simple Slider with Histogram, should return proper left and width', () => {
    expect(calculateBarPosition(12, 12, 1, true)).toEqual({ left: 0, width: 100.0 });
    expect(calculateBarPosition(1, 12, 1, true)).toEqual({ left: 0, width: 8.3 });
    expect(calculateBarPosition(6, 12, 1, true)).toEqual({ left: 0, width: 50.0 });
  });
  it('range Slider, should return proper left and width', () => {
    expect(calculateBarPosition([1, 24], 24, 1, true)).toEqual({ left: 0, width: 100.0 });
    expect(calculateBarPosition([12, 24], 24, 1, true)).toEqual({ left: 45.8, width: 54.2 });
    expect(calculateBarPosition([6, 24], 24, 1, true)).toEqual({ left: 20.8, width: 79.2 });
    expect(calculateBarPosition([1, 1], 24, 1, true)).toEqual({ left: 0, width: 4.2 });
  });
});
