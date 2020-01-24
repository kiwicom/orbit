// @flow
import * as React from "react";
import styled from "styled-components";

import BadgePrimitive, { StyledBadge } from "../primitives/BadgePrimitive";
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
      <BadgePrimitive type={type} dataTest={dataTest} icon={icon} ariaLabel={ariaLabel}>
        {!icon && children}
      </BadgePrimitive>
    </StyledNotificationBadge>
  );
};

export default NotificationBadge;
