// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import { SIZES, TYPES } from "./consts";
import { StyledCarrierLogo } from "../CarrierLogo";

import type { Props } from "./index";

const StyledList = styled(({ className, children }) => <div className={className}>{children}</div>)`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.orbit.fontfamily};
  font-size: ${({ tokens, size }) => tokens.fontSizes[size]};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ tokens, type }) => tokens.colors[type]};

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

const List = ({
  children,
  size = SIZES.NORMAL,
  type = TYPES.PRIMARY,
  theme = defaultTokens,
}: Props) => {
  const tokens = {
    fontSizes: {
      [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
      [SIZES.NORMAL]: theme.orbit.fontSizeTextNormal,
      [SIZES.LARGE]: theme.orbit.fontSizeTextLarge,
    },
    colors: {
      [TYPES.PRIMARY]: theme.orbit.colorTextPrimary,
      [TYPES.SECONDARY]: theme.orbit.colorTextSecondary,
    },
  };

  return (
    <StyledList tokens={tokens} type={type} size={size}>
      {children}
    </StyledList>
  );
};

export default List;
