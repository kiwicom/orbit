// @flow

import applyGap from './applyGap';

describe('applyGap function', () => {
  it('with gap and cellIndex greater than 1, should return proper cell index', () => {
    expect(applyGap(2, true)).toBe(3);
  });
  it('with gap and cellIndex equals to 1, should return proper cell index', () => {
    expect(applyGap(1, true)).toBe(1);
  });
  it('without gap and cellIndex greater than 1, should return proper cell index', () => {
    expect(applyGap(2, false)).toBe(2);
  });
  it('without gap and cellIndex equals to 1, should return proper cell index', () => {
    expect(applyGap(1, false)).toBe(1);
  });
});
