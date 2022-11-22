import * as React from "react";
import styled, { css } from "styled-components";

import type { Type } from "../types";
import type * as Common from "../../common/types";
import type { Theme } from "../../defaultTheme";
import defaultTheme from "../../defaultTheme";
import CircleSmall from "../../icons/CircleSmall";
import { rtlSpacing } from "../../utils/rtl";
import { StyledCarrierLogo } from "../../CarrierLogo";
import { SIZES, TYPES } from "../consts";
import { StyledText } from "../../Text";
import ListContext from "../ListContext";
import type { Props } from "./types";

export const getLineHeightToken = ({
  theme,
  size,
}: {
  theme: Theme;
  size?: Common.Size | null;
}): string | null => {
  const lineHeightTokens = {
    [SIZES.SMALL]: theme.orbit.lineHeightTextSmall,
    [SIZES.NORMAL]: theme.orbit.lineHeightTextNormal,
    [SIZES.LARGE]: theme.orbit.lineHeightTextLarge,
  };
  if (!size) return null;
  return lineHeightTokens[size];
};

const getSizeTokenLabel = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextSmall,
    [SIZES.LARGE]: theme.orbit.fontSizeTextNormal,
  };
  return sizeTokens[size];
};

const getIconSizeFromType = ({
  theme,
  type,
}: {
  theme: Theme;
  type?: Type | null;
}): string | null => {
  const tokens = {
    [TYPES.PRIMARY]: css`
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.widthIconSmall};
    `,
    [TYPES.SECONDARY]: css`
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.widthIconSmall};
    `,
  };

  if (!type) return null;
  return tokens[type];
};

export const Item = styled(({ ...props }) => <li {...props} />)`
  ${({ theme }) => css`
    font-family: ${theme.orbit.fontFamily};
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.orbit.spaceXXSmall};

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    ${StyledText} {
      line-height: inherit;
      font-size: inherit;
    }
  `}
`;

Item.defaultProps = {
  theme: defaultTheme,
};

export const IconContainer = styled.div<{ size?: Common.Size | null; type?: Type | null }>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    margin: ${rtlSpacing(`0 ${theme.orbit.spaceXSmall} 0 0`)};
    flex: 0 0 auto;
    height: ${getLineHeightToken({ theme, size })};

    ${StyledCarrierLogo} {
      ${getIconSizeFromType};
      img {
        ${getIconSizeFromType};
      }
    }
    svg {
      ${getIconSizeFromType};
    }
  `}
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledLabel = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.orbit.fontFamily};
    font-weight: ${theme.orbit.fontWeightNormal};
    color: ${theme.orbit.colorTextSecondary};
    font-size: ${getSizeTokenLabel};
  `}
`;

const StyledSpan = styled.span`
  width: 100%;
`;

StyledLabel.defaultProps = {
  theme: defaultTheme,
};

const ListItem = ({ label, children, icon = <CircleSmall />, dataTest }: Props) => {
  const { size, type } = React.useContext(ListContext);
  return (
    <Item data-test={dataTest} type={type}>
      {icon && (
        <IconContainer type={type} size={size}>
          {icon}
        </IconContainer>
      )}
      <StyledSpan>
        {label && <StyledLabel size={size}>{label}</StyledLabel>}
        {children}
      </StyledSpan>
    </Item>
  );
};

export default ListItem;
