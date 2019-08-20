// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import RatingStars from '../index';
import StarFull from '../../icons/StarFull';
import StarEmpty from '../../icons/StarEmpty';
import { ICON_COLORS, ICON_SIZES } from '../../Icon/consts';

describe('RatingStars', () => {
  const dataTest = 'test';
  const rating = 2.4;
  const color = ICON_COLORS.ATTENTION;
  const size = ICON_SIZES.LARGE;
  const component = shallow(
    <RatingStars rating={rating} size={size} color={color} showEmpty dataTest={dataTest} />,
  );
  const hotel = shallow(
    <RatingStars rating={rating} size={size} color={color} dataTest={dataTest} />,
  );
  it('should have data-test', () => {
    expect(component.render().prop('data-test')).toBe(dataTest);
  });

  it('stars should have size and color', () => {
    component.children().forEach(node => {
      expect(node.prop('size')).toBe(size);
      expect(node.prop('color')).toBe(color);
    });
  });
  it('should render 2 full stars and 3 empty', () => {
    component.children().forEach((node, key) => {
      expect(node.type()).toBe(key <= Math.round(rating) - 1 ? StarFull : StarEmpty);
    });
  });
  it('should render only 2 full stars', () => {
    expect(hotel.children()).toHaveLength(Math.round(rating));
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
