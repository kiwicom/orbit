// @flow
import styled from "styled-components";
import * as React from "react";

import defaultTheme from "../../../defaultTheme";

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${({ spacing }) => spacing};
  color: ${({ color }) => color};
  transition: background ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  > svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export default IconContainer;
