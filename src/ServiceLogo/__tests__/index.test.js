// @flow

import * as React from 'react';
import { mount } from 'enzyme';

import defaultTheme from '../../defaultTheme';
import { NAME_OPTIONS, SIZE_OPTIONS, baseURL } from '../consts';
import ServiceLogo from '../index';

const name = NAME_OPTIONS.AIRHELP;
const size = SIZE_OPTIONS.LARGE;
const grayScale = true;

const SIZE = defaultTheme.orbit.heightServiceLogoLarge;

describe(`ServiceLogo: ${name}`, () => {
  const component = mount(<ServiceLogo name={name} size={size} />).find('img');
  it('should have props', () => {
    const IMAGE_PATH = `${baseURL}/logos/0x${parseInt(SIZE, 10)}/${name}.png`;
    const IMAGE_PATH_RETINA = `${baseURL}/logos/0x${parseInt(SIZE, 10) * 2}/${name}.png`;

    expect(component.prop('src')).toBe(IMAGE_PATH);
    expect(component.prop('srcSet')).toBe(`${IMAGE_PATH_RETINA} 2x`);
    expect(component.prop('alt')).toBe(name);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

describe(`ServiceLogo: ${name}`, () => {
  const dataTest = 'test';
  const component = mount(
    <ServiceLogo name={name} size={size} grayScale={grayScale} dataTest={dataTest} />,
  ).find('img');

  const IMAGE_PATH = `${baseURL}/logos-grayscale/0x${parseInt(SIZE, 10)}/${name}.png`;
  const IMAGE_PATH_RETINA = `${baseURL}/logos-grayscale/0x${parseInt(SIZE, 10) * 2}/${name}.png`;

  it('should have props', () => {
    expect(component.prop('src')).toBe(IMAGE_PATH);
    expect(component.prop('srcSet')).toBe(`${IMAGE_PATH_RETINA} 2x`);
    expect(component.prop('alt')).toBe(name);
    expect(component.render().prop('data-test')).toBe(dataTest);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
