// @flow

import * as React from 'react';
import { mount } from 'enzyme';

import Truncate from '..';

describe('Truncate', () => {
  const dataTest = 'test';
  const maxWidth = '10rem';
  const content = 'Lorem ipsum dolor sit amet';
  const component = mount(
    <Truncate maxWidth={maxWidth} dataTest={dataTest}>
      {content}
    </Truncate>,
  );
  const truncate = component.find('Truncate__StyledTruncate');
  it('should have data-test', () => {
    expect(truncate.render().prop('data-test')).toBe(dataTest);
  });
  it('main wrapper should have styles', () => {
    expect(truncate).toHaveStyleRule('min-width', '0');
    expect(truncate).toHaveStyleRule('max-width', maxWidth);
  });
  it('content should have styles', () => {
    const truncateContent = component.find('Truncate__StyledTruncateContent');
    expect(truncateContent).toHaveStyleRule('white-space', 'nowrap');
    expect(truncateContent).toHaveStyleRule('overflow', 'hidden');
    expect(truncateContent).toHaveStyleRule('text-overflow', 'ellipsis');
  });
});
