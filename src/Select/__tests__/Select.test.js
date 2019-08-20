// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import Select from '../index';
import SPACINGS_AFTER from '../../common/getSpacingToken/consts';

const mockChange = jest.fn();
const placeholder = 'Default placeholder';
const dataTest = 'test';
const tabIndex = '-1';
const name = 'name';
const objectOptions = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three' },
  { value: '4', label: 'Four' },
  { value: 'hidden-five', label: 'Hidden Five' },
  { disabled: true, value: 'disabled-six', label: 'Disabled Six' },
];
const spaceAfter = SPACINGS_AFTER.NORMAL;

describe('Select', () => {
  const component = shallow(
    <Select
      value="1"
      name={name}
      placeholder={placeholder}
      options={objectOptions}
      onChange={mockChange}
      tabIndex={tabIndex}
      dataTest={dataTest}
      spaceAfter={spaceAfter}
    />,
  );
  const select = component.find('Select__StyledSelect');
  const label = component.find('Select__Label');
  it('should have data-test', () => {
    expect(select.render().prop('data-test')).toBe(dataTest);
  });
  it('should have data-state', () => {
    expect(select.render().prop('data-state')).toBe('ok');
  });
  it('should have name', () => {
    expect(select.render().prop('attribs').name).toBe(name);
  });
  it('should have spaceAfter', () => {
    expect(label.prop('spaceAfter')).toBe(spaceAfter);
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
  it('should have tabindex', () => {
    expect(select.render().prop('tabindex')).toBe(tabIndex);
  });
  it('should have placeholder', () => {
    expect(select.childAt(0).text()).toBe(placeholder);
  });
});
