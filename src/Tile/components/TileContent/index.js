// @flow
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";

import type { Props } from ".";

const getPadding = ({ noPadding, useMargins, theme }) => {
  if (noPadding) return null;
  if (!useMargins) {
    return css`
      padding: ${theme.orbit.spaceMedium};
    `;
  }
  return css`
    padding: ${theme.orbit.spaceMedium} 0;
    margin: 0 ${theme.orbit.spaceMedium};
  `;
};
const StyledTileContent = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  ${({ withPointer }) =>
    withPointer &&
    css`
      cursor: pointer;
    `};
  ${({ withBorder, theme }) =>
    withBorder &&
    css`
      border-top: 1px solid ${theme.orbit.paletteCloudNormal};
    `};
  ${getPadding};
`;

StyledTileContent.defaultProps = {
  theme: defaultTheme,
};

const TileContent = forwardRef<Props, HTMLInputElement>(
  (
    { children, noPadding, withPointer = false, withBorder = false, useMargins = true }: Props,
    ref,
  ) => {
    return (
      <StyledTileContent
        noPadding={noPadding}
        ref={ref}
        withPointer={withPointer}
        withBorder={withBorder}
        useMargins={useMargins}
      >
        {children}
      </StyledTileContent>
    );
  },
);

export default TileContent;
