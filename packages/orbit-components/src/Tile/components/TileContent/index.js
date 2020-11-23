// @flow
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import mq from "../../../utils/mediaQuery";
import defaultTheme from "../../../defaultTheme";

import type { Props } from ".";

const getPadding = ({ noPadding, useMargins, theme }) => {
  if (noPadding) return null;

  if (!useMargins) {
    return css`
      padding: ${theme.orbit.spaceMedium};

      ${mq.largeMobile(css`
        padding: ${theme.orbit.spaceLarge};
      `)}
    `;
  }

  return css`
    padding: ${theme.orbit.spaceMedium} 0;
    margin: 0 ${theme.orbit.spaceMedium};

    ${mq.largeMobile(css`
      padding: ${theme.orbit.spaceLarge} 0;
      margin: 0 ${theme.orbit.spaceLarge};
    `)}
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

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
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
