// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { SIZES, TYPES } from "./consts";
import { StyledCarrierLogo } from "../CarrierLogo";

import type { Props } from "./index";

const getSizeToken = () => ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZES.LARGE]: theme.orbit.fontSizeTextLarge,
  };
  return sizeTokens[size];
};

const getTypeToken = () => ({ theme, type }) => {
  const typeTokens = {
    [TYPES.PRIMARY]: theme.orbit.colorTextPrimary,
    [TYPES.SECONDARY]: theme.orbit.colorTextSecondary,
  };

  return typeTokens[type];
};

const StyledList = styled(({ className, children }) => <div className={className}>{children}</div>)`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.orbit.fontfamily};
  font-size: ${getSizeToken()};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${getTypeToken()};

  // CarrierLogo images
  ${StyledCarrierLogo} {
    height: ${({ theme }) => theme.orbit.heightIconSmall};
    width: ${({ theme }) => theme.orbit.widthIconSmall};
    img {
      height: ${({ theme }) => theme.orbit.heightIconSmall};
      width: ${({ theme }) => theme.orbit.widthIconSmall};
    }
  }

  // Icons
  svg {
    height: ${({ theme }) => theme.orbit.heightIconSmall};
    width: ${({ theme }) => theme.orbit.widthIconSmall};
  }
`;

StyledList.defaultProps = {
  theme: defaultTokens,
};

const List = ({ children, size = SIZES.NORMAL, type = TYPES.PRIMARY }: Props) => (
  <StyledList type={type} size={size}>
    {children}
  </StyledList>
);

export default List;
