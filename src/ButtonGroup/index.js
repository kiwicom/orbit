// @flow

import * as React from 'react';
import styled from 'styled-components';
import { warning } from '@kiwicom/js';

import defaultTheme from '../defaultTheme';
import { StyledButtonLink } from '../ButtonLink';
import { StyledButton } from '../Button';
import { borderRadius, rtlSpacing } from '../utils/rtl';
import type { Props } from './index.js.flow';

const StyledButtonGroup = styled.div`
  display: flex;

  & ${StyledButtonLink}, & ${StyledButton} {
    border-radius: ${({ connected }) => connected && '0'};
    margin: ${({ theme, connected }) =>
      rtlSpacing(
        connected ? theme.orbit.marginButtonGroupConnected : theme.orbit.marginButtonGroup,
      )};

    &:first-child {
      border-radius: ${({ connected, theme }) =>
        connected &&
        borderRadius(`${theme.orbit.borderRadiusNormal} 0 0 ${theme.orbit.borderRadiusNormal}`)};
    }

    &:last-child {
      border-radius: ${({ connected, theme }) =>
        connected &&
        borderRadius(`0 ${theme.orbit.borderRadiusNormal} ${theme.orbit.borderRadiusNormal} 0`)};
      margin: 0;
    }
  }
`;

StyledButtonGroup.defaultProps = {
  theme: defaultTheme,
};

const ButtonGroup = ({ children, connected, dataTest }: Props) => {
  warning(
    !connected,
    'Warning: connected property of ButtonGroup component is deprecated. In the next major release, the connected variant will be the default. For unconnected variant, please use Stack component. Check https://orbit.kiwi/roadmap/road-to-1-0-0/#buttongroup-component for more information',
  );
  return (
    <StyledButtonGroup connected={connected} data-test={dataTest}>
      {children}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
