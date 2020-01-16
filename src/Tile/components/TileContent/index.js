// @flow
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

import type { Props } from ".";

const StyledTileContent = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  ${({ withPointer }) =>
    withPointer &&
    css`
      cursor: pointer;
    `};
  ${({ noPadding, theme }) =>
    !noPadding &&
    css`
      padding: ${theme.orbit.spaceMedium} 0;
      margin: 0 ${theme.orbit.spaceMedium};
    `};
  ${({ withBorder, theme }) =>
    withBorder &&
    css`
      border-top: 1px solid ${theme.orbit.paletteCloudNormal};
    `};
`;

StyledTileContent.defaultProps = {
  theme: defaultTheme,
};

const TileContent = forwardRef<Props, HTMLElement>(
  ({ children, noPadding, withPointer = false, withBorder = false }: Props, ref) => {
    return (
      <StyledTileContent
        noPadding={noPadding}
        ref={ref}
        withPointer={withPointer}
        withBorder={withBorder}
      >
        {children}
      </StyledTileContent>
    );
  },
);

export default TileContent;
