// @flow
import React, { useContext } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import CircleSmall from "../../icons/CircleSmall";
import { rtlSpacing } from "../../utils/rtl";
import { ListContext, getLineHeightToken } from "../index";
import { StyledCarrierLogo } from "../../CarrierLogo";
import { SIZES, TYPES } from "../consts";
import { StyledText } from "../../Text";

import type { Props } from "./index";

const getSizeTokenLabel = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextSmall,
    [SIZES.LARGE]: theme.orbit.fontSizeTextNormal,
  };
  return sizeTokens[size];
};

const getIconSizeFromType = ({ theme, type }) => {
  const tokens = {
    [TYPES.PRIMARY]: css`
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.widthIconSmall};
    `,
    [TYPES.SECONDARY]: css`
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.widthIconSmall};
    `,
    [TYPES.SEPARATED]: css`
      height: ${theme.orbit.heightIconMedium};
      width: ${theme.orbit.widthIconMedium};
    `,
  };
  return tokens[type];
};

export const Item = styled(({ type, theme, ...props }) => <li {...props} />)`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};

  &:last-child,
  &:last-of-type {
    margin: 0;
  }

  ${({ type, theme }) =>
    type === TYPES.SEPARATED &&
    css`
      border-bottom: 1px solid ${theme.orbit.paletteCloudDark};
      padding: ${theme.orbit.spaceXSmall};

      &,
      ${StyledText} {
        font-weight: ${theme.orbit.fontWeightMedium};
      }

      :last-child {
        border-bottom: none;
      }
    `}
`;

Item.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
  flex: 0 0 auto;
  height: ${getLineHeightToken};
  ${StyledCarrierLogo} {
    ${getIconSizeFromType};
    img {
      ${getIconSizeFromType};
    }
  }
  // Icons
  svg {
    ${getIconSizeFromType};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledLabel = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  color: ${({ theme }) => theme.orbit.colorTextSecondary};
  font-size: ${getSizeTokenLabel};
`;

const StyledSpan = styled.span`
  width: 100%;
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const ListItem = ({ label, children, icon = <CircleSmall />, dataTest }: Props) => {
  const { size, type } = useContext(ListContext);
  return (
    <Item data-test={dataTest} type={type}>
      <IconContainer size={size} type={type}>
        {icon}
      </IconContainer>
      <StyledSpan>
        {label && <StyledLabel size={size}>{label}</StyledLabel>}
        {children}
      </StyledSpan>
    </Item>
  );
};

export default ListItem;
