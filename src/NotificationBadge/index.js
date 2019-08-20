// @flow

import * as React from 'react';
import styled from 'styled-components';

import Badge, { StyledBadge } from '../Badge';
import defaultTheme from '../defaultTheme';
import { TYPE_OPTIONS } from '../Badge/consts';
import type { Props } from './index.js.flow';

const StyledNotificationBadge = styled.div`
  ${StyledBadge} {
    width: ${({ theme }) => theme.orbit.widthBadgeCircled};
    padding: 0;
  }
`;

StyledNotificationBadge.defaultProps = {
  theme: defaultTheme,
};

const NotificationBadge = (props: Props) => {
  const { type = TYPE_OPTIONS.NEUTRAL, children, icon, ariaLabel, dataTest } = props;

  return (
    <StyledNotificationBadge>
      <Badge type={type} dataTest={dataTest} icon={icon} ariaLabel={ariaLabel}>
        {!icon && children}
      </Badge>
    </StyledNotificationBadge>
  );
};

export default NotificationBadge;
