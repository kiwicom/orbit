// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import Popover from '../index';
import ContentWrapper from '../components/ContentWrapper';
import Button from '../../Button';

describe('Popover', () => {
  const content = 'Message for a user';
  const position = 'bottom';
  const opened = true;
  const component = shallow(
    <Popover content={content} preferredPosition={position} opened={opened}>
      <Button>Open</Button>
    </Popover>,
  );

  it('it should create portal', () => {
    component.find('Portal');
    expect(component.find('Portal').exists()).toBe(true);
  });

  it('Should pass props', () => {
    expect(
      component
        .find('PopoverContentWrapper')
        .children()
        .exists(),
    ).toBe(true);
    expect(component.find('PopoverContentWrapper').prop('preferredPosition')).toBe(position);
  });

  it('it should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

describe('ContentWrapper', () => {
  const content = <Button>Content</Button>;
  const handleClose = jest.fn();
  const ref = React.createRef();
  const position = 'bottom';
  const component = shallow(
    <ContentWrapper containerRef={ref} preferredPosition={position} onClose={handleClose}>
      {content}
    </ContentWrapper>,
  );

  it('Should have a child', () => {
    expect(component.find('Button').exists()).toBe(true);
  });

  it('it should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
