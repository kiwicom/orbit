// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import Loading from '../index';
import TYPE_OPTIONS from '../consts';

describe('Loading', () => {
  const dataTest = 'test';
  it('should match snapshot', () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
  });
  it('should render type', () => {
    const type = TYPE_OPTIONS.BOX_LOADER;
    const component = shallow(<Loading type={type} />);
    const loader = component.find('Loading__StyledLoader');
    expect(
      component
        .find('Loading__StyledLoader')
        .childAt(0)
        .parent(),
    ).toEqual(loader);
  });
  it('should render type with text', () => {
    const text = 'Test test';
    const type = TYPE_OPTIONS.BOX_LOADER;
    const component = shallow(<Loading type={type} text={text} />);
    const loader = component.find('Loading__StyledLoader');
    const loadingText = component.find('Loading__StyledLoadingText').render();
    expect(
      component
        .find('Loading__StyledLoader')
        .childAt(0)
        .parent(),
    ).toEqual(loader);
    expect(loadingText.text()).toBe(text);
  });

  it('should have data-test', () => {
    const component = shallow(<Loading dataTest={dataTest} />);
    expect(component.render().prop('data-test')).toBe(dataTest);
  });

  it('should render text', () => {
    const text = 'Test test';
    const component = shallow(<Loading text={text} />);
    const loadingText = component.find('Loading__StyledLoadingText').render();
    expect(loadingText.text()).toBe(text);
  });
});
