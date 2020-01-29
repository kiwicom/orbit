// @flow
import styled from "styled-components";
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import { TOKENS } from "../consts";
import getTypeToken from "../helpers/getTypeToken";
import { getSize } from "../../../Icon";
import getIconSpacing from "../helpers/getIconSpacing";

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: ${getIconSpacing()};
  color: ${({ bordered }) =>
    bordered ? getTypeToken(TOKENS.colorTextButtonBordered) : getTypeToken(TOKENS.colorTextButton)};
  transition: background ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  > svg {
    width: ${({ sizeIcon }) => getSize(sizeIcon)};
    height: ${({ sizeIcon }) => getSize(sizeIcon)};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

export default IconContainer;
