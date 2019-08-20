// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import FormFeedback from '../index';

describe('FormFeedback', () => {
  const dataTest = 'test';
  const component = shallow(<FormFeedback dataTest={dataTest}>FormFeedback</FormFeedback>);

  it('should have data-test', () => {
    expect(component.render().prop('data-test')).toBe(dataTest);
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
