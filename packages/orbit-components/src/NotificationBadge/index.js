// @flow
import * as React from "react";
import styled from "styled-components";

import Badge from "../Badge";
import { StyledBadge } from "../primitives/BadgePrimitive";
import defaultTheme from "../defaultTheme";

import type { Props } from "./index";

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
  const { type, children, icon, ariaLabel, dataTest } = props;

  return (
    <StyledNotificationBadge>
      <Badge type={type} dataTest={dataTest} icon={icon} ariaLabel={ariaLabel}>
        {!icon && children}
      </Badge>
    </StyledNotificationBadge>
  );
};

export default NotificationBadge;
