// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import { LABEL_ELEMENTS, LABEL_SIZES } from '../consts';
import Radio from '../../Radio';
import Checkbox from '../../Checkbox';

import ChoiceGroup from '..';

const label = 'Label';
const labelSize = LABEL_SIZES.LARGE;
const labelElement = LABEL_ELEMENTS.H5;
const onChange = jest.fn();
const onOnlySelection = jest.fn();
const filter = true;
const choices = [
  { value: 'one', label: 'Reason one' },
  { value: 'two', label: 'Reason two' },
  { value: 'three', label: 'Reason three' },
];

describe('RadioGroup', () => {
  const dataTest = 'test';
  const component = shallow(
    <ChoiceGroup
      dataTest={dataTest}
      label={label}
      onChange={onChange}
      labelSize={labelSize}
      labelElement={labelElement}
    >
      <Radio value="one" label="Reason one" />
      <Radio value="two" label="Reason two" />
      <Radio value="three" label="Reason three" />
    </ChoiceGroup>,
  );
  const heading = component.find('Heading');
  it('should contain a label', () => {
    expect(heading.render().text()).toBe(label);
    expect(heading.prop('type')).toBe('title2');
  });
  it('should render children', () => {
    component.find('Radio').forEach((node, key) => {
      expect(node.type()).toBe(Radio);
      expect(node.prop('value')).toBe(choices[key].value);
      expect(node.prop('label')).toBe(choices[key].label);
    });
  });
  it('should have data-test', () => {
    expect(component.render().prop('data-test')).toBe(dataTest);
  });
  it('should execute onChange method', () => {
    const instance = component.instance();
    const ev = { persist: () => {}, target: <Radio value="one" label="Reason one" /> };
    instance.handleChange(ev);
    expect(onChange).toHaveBeenCalled();
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('RadioGroup Filters', () => {
  const dataTest = 'test';
  const component = shallow(
    <ChoiceGroup
      dataTest={dataTest}
      label={label}
      onChange={onChange}
      labelSize={labelSize}
      labelElement={labelElement}
      filter={filter}
      onOnlySelection={onOnlySelection}
    >
      <Checkbox value="one" label="Reason one" />
      <Checkbox value="two" label="Reason two" />
      <Checkbox value="three" label="Reason three" />
    </ChoiceGroup>,
  );
  const heading = component.find('Heading');
  it('should contain a label', () => {
    expect(heading.render().text()).toBe(label);
    expect(heading.prop('type')).toBe('title2');
  });
  it('should have data-test', () => {
    expect(component.render().prop('data-test')).toBe(dataTest);
  });
  it('should render children', () => {
    component.find('Radio').forEach((node, key) => {
      expect(node.type()).toBe(Radio);
      expect(node.prop('value')).toBe(choices[key].value);
      expect(node.prop('label')).toBe(choices[key].label);
    });
  });
  it('should execute onOnlySelection method', () => {
    const instance = component.instance();
    const ev = { persist: () => {}, target: <button type="button">Only</button> };
    instance.handleChange(ev);
    expect(onChange).toHaveBeenCalled();
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
