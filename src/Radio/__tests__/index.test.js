// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import Radio from '../index';

const label = 'Radio';
const onChange = jest.fn();
const value = 'option';
const tabIndex = '-1';
const dataTest = 'test';
const name = 'name';

describe(`Default Radio`, () => {
  const component = shallow(
    <Radio
      label={label}
      onChange={onChange}
      value={value}
      dataTest={dataTest}
      name={name}
      tabIndex={tabIndex}
    />,
  );
  const radio = component.find('Radio__Input');
  it('should contain a label', () => {
    expect(
      component
        .find('Radio__LabelText')
        .render()
        .text(),
    ).toBe(label);
  });
  it('should have data-test', () => {
    expect(radio.render().prop('data-test')).toBe(dataTest);
  });

  it('should have data-state', () => {
    expect(radio.render().prop('data-state')).toBe('ok');
  });

  it('should have tabindex', () => {
    expect(radio.render().prop('tabindex')).toBe(tabIndex);
  });
  it('should have name', () => {
    expect(radio.render().prop('attribs').name).toBe(name);
  });
  it('input value should match', () => {
    expect(radio.prop('value')).toBe(value);
  });
  it('should execute onChange method', () => {
    radio.simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
