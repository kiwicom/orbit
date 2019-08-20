// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import Pagination from '../index';

const dataTest = 'test';
const pageCount = 9;
const selectedPage = 3;
const onPageChange = jest.fn();

describe('Pagination', () => {
  const component = shallow(
    <Pagination
      dataTest={dataTest}
      pageCount={pageCount}
      selectedPage={selectedPage}
      onPageChange={onPageChange}
    />,
  );
  it('Stack should have passed dataTest', () => {
    expect(component.prop('dataTest')).toBe(dataTest);
  });
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
