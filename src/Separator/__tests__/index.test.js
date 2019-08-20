// @flow

import * as React from 'react';
import { shallow } from 'enzyme';

import Separator from '../index';
import SPACINGS_AFTER from '../../common/getSpacingToken/consts';

describe('Separator', () => {
  const spaceAfter = SPACINGS_AFTER.LARGE;
  const component = shallow(<Separator spaceAfter={spaceAfter} />);
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
